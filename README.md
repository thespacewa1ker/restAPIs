
# Implementation of Rest-apis

Server is live at please visit here: https://spacewa1ker.onrender.com
Created by - Sanjay

## End Points
1. **Register and Login endpoint ** - Provides basic jwt authentication.
2. **getQuestion endpoint** - <br/> 1. Bring all the questions.  <br /> 2. currently all this questions are hardcoded.
3. **save endpoint** - <br /> 1. created a transaction to insert data to mongodb <br /> 2. Inserts data only when all the 5 schema data inserted successfully <br /> 3. Else it will roll back without inserting into any. 
4. **getAllData endpoint** - <br /> 1. Fetchs data from mongodb collections(5 collections) <br /> 2. populate them and send the response in json format. 
5. **upload endpoint** -<br /> 1. File can be uploaded. <br /> 2. Need to work on that.currently I created only for generalQuestions. <br /> 3. currently it upload file and store in public folder from that it will upload file url to mongoDB.



## Technology Stack
1. Backend - NodeJs, ExpressJS 
2. Database - MongoDB


## Instructions to Install and Setup

### Setup and run server - 
1. Run the following command to install all the dependencies for node -> ```npm install or npm init```
2. Required to add .env file
3. In that required to add MONGODB_URI, PORT,JWT_SECRET
4. npm run start
5. server will start running at http://localhost:7000.


#### Issues-
1. Need to work on file upload which will save file on question level. Currently created only for generalQuestions.
2. Unit test: created unit test using jest. got stuck, need to call the test correctly.
3. will be deploying shortly

