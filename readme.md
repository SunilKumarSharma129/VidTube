# VidTube

This project is a complex backend project that is built with nodejs, expressjs, mongodb, mongoose, jwt, bcrypt etc. This project is a complete backend project that has all the features that a backend project should have. this is a complete video hosting website similar to youtube with all the features like login, signup, upload video, like, dislike, comment, reply, subscribe, unsubscribe and so many features.

Project uses all standard practices like JWT, bcrypt, access tokens, refresh Tokens and many more. I have spent a lot of time in building this project.

## Features

- Secure authentication with access and refresh tokens.

- Strong password hashing and validation.

- Role-based authorization and protected routes.

- Video upload, processing, and metadata management.

- Like and dislike interactions on videos.

- Commenting system with threaded replies.

- Channel subscriptions and unsubscriptions.

- User profiles and channel management.

- Pagination, filtering, and sorting for lists.

- Structured logging and request tracing.

- Environment-based configuration (.env).

- Scalable database schema and indexes.

## 🛠 Skills
Nodejs, Expressjs, MongoDB, Mongoose, JWT, Bcrypt, cookie-parser



## Getting started
#### Step 1: Clone the repository

    ```bash
    git clone https://github.com/SunilKumarSharma129/VidTube.git
    ```

    ```bash
    cd VidTube
    ```

#### Step 2: Create Your MongoDB Account and Database Cluster

- Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

- Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change `<password>` with your own password.

- add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes).

#### Step 3: Edit the Environment File

- Check a file named .env in the /backend directory. This file will store environment variables for the project to run.

#### Step 4: Update MongoDB URI

- In the .env file, find the line that reads:

    `MONGODB_URI="your-mongodb-uri"`

- Replace "your-mongodb-uri" with the actual URI of your MongoDB database.

#### Step 5: Install Backend Dependencies

- In your terminal, navigate to the /backend directory

    ```bash
    cd backend
    ```

- Use the following command to install the backend dependencies:

    ```bash
    npm install
    ```

- This command will install all the required packages specified in the package.json file.

#### Step 6: Run Setup Script

- While still in the /backend directory of the project, execute the following command to run the setup script:

    ```bash
    npm run start
    ```

- This start script may perform necessary database migrations or any other initialization tasks required for the project.

#### Step 7: Run the Backend Server

- In the same terminal, run the following command to start the backend server:

    ```bash
    npm run dev
    ```

- This command will start the backend server, and it will listen for incoming requests.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`PORT`

`MONGODB_URI`  

`ACCESS_TOKEN_SECRET`

`ACCESS_TOKEN_EXPIRY` 

`REFRESH_TOKEN_SECRET` 

`REFRESH_TOKEN_EXPIRY` 

`CLOUDINARY_CLOUD_NAME` 

`CLOUDINARY_API_KEY` 

`CLOUDINARY_API_SECRET` 

`NODE_ENV` 



## Authors

- [@SunilKumarSharma129](https://github.com/SunilKumarSharma129)

