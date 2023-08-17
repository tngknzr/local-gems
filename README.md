# local-gems

[PLACE_FOR_YOUR_IMAGE]

[PLACE_TO_ADD_LINK_FOR_DEPLOYED_VERSION]
 

Local Gems is your community's digital treasure map, uncovering the hidden gems and unique delights right in your neighborhood.

- Simply plug in the name and city of the local charm you're on the hunt for.
- Presto! A curated list of community-recommended gems, tailored to your search, springs to life.
- Let's bring to light the fun, offbeat spots that make our community really stand out!

# Technologies in use / Tech Stack / Built with

  - Node.js
  - Express
  - MongoDB

# Installation



**Example:**

To install local-gems locally, please follow the steps below:
  - Clone repo to your machine
  - Open the root of the project and install all dependencies with `npm i` / `yarn`
  - Project has various scripts to run:
    - `npm start` - running local version
    - `npm run test` - run tests
**Mongo atlas account** :
**Step 1 | Create a MongoDB Atlas Account**

    Start by opening the MongoDB Atlas registration page.

    You can register for an Atlas account using your Google Account or an email address. Click on the Start Free button.
    Check the visual

    Fill up the required fields and finish the sign-up process.

    You’ll receive an email with the verification link. Click the verification link inside the email to complete your registration.
    Check the visual


**Step 2 | Create a MongoDB Atlas Cluster**

    Open the MongoDB Atlas login page and log in with your newly created account.

    You will be redirected to the main dashboard. Click on the green button Build a Database.
    Check the visual

    In the next screen, select the Shared option (labeled FREE) and click on the Create button.
    Check the visual

    In the Cloud Provider & Region panel, select AWS and one of the recommended regions (marked with a star ★) closest to your location.
    Check the visual

    In the following Cluster Tier panel, select M0 Sandbox for cluster tier.
    Check the visual

    Enter a name for your cluster in the Cluster Name field (optional).
    Check the visual

    Click the green button Create Cluster to deploy the cluster. You will be redirected to the main dashboard.
    Check the visual

    It can take up to 10 minutes for your cluster to provision and become ready to use.
    Check the visual


**Step 3 | Configure the Atlas Cluster**

    While in the main dashboard, click Databases in the top-left corner. In the Database Deployments panel, click the Connect button.
    Check the visual

    In the Add a connection IP address section, click the button Allow Access from Anywhere. In the dropdown that will open, click Add IP Address.
    Check the visual

    In the Create a Database User section, enter the desired username and click Autogenerate Secure Password.

    IMPORTANT: Write down the username and the password you just created. You’ll need your MongoDB user’s credentials in the next step.
    Check the visual

    To create the database user click on the button Create Database User.
    Check the visual

    The next step is to obtain a database connection string. To do this, click the Choose a connection method button.
    Check the visual

    In the next window, click Connect your application.
    Check the visual

    From the Driver dropdown, select Node.js and the latest version from the Version dropdown. Copy the provided connection string.
    Check the visual

    IMPORTANT: Save the copied connection string. You’ll need it in the later step when deploying your Node.js application to Fly.io. You should also update the copied connection string in the following way:
        Replace <password> with the password for the created user.
        Replace myFirstDatabase with the name of the database that connections will use by default.

**Cloudinary setup**

$ npm install cloudinary multer multer-storage-cloudinary
# .env

 

PORT=3000 # already was in .env

# we should add the following:

CLOUDINARY_NAME=your-CLOUDINARY-name-here

CLOUDINARY_KEY=your-CLOUDINARY-key-here

CLOUDINARY_SECRET=your-CLOUDINARY-secret-here
You can find this info on your Cloudinary profile page.

# What I have learned

We have practiced lots with routing, sessions, cookies, pair programming, a whole front end-back end experience. 

**Example:**

While I was building local-gems I have learned the fundamentals of Express and Mongodb. I learned what the importances of the models structuring, and what works best for my current application. We have understood better the flow of the data, with pulling, the information of ...

# What issues have we faced and how we resolved them

**Example:**

Our main challenge was working with GitHub, pulling, pushing and merging our local branches with the remote branches.

# Source

This project is done as part of the Ironhack Full Stack Development Bootcamp Curriculum. 





