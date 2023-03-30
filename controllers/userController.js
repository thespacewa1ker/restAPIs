const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const isMatch = await user.isValidPassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
