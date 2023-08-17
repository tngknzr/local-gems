# local-gems

<div>
    <img src="public/images/local-gems.cyclic.app-desktop.png?raw=true" alt="Desktop Screenshot" title="Desktop Screenshot" width="500" height="500" style="object-fit: cover;">
</div>
<div>
  <img src="public/images/local-gems-main-screenshot.png?raw=true" alt="Desktop Screenshot" title="Desktop Screenshot" width="500">
</div>




# Deployed site link
https://local-gems.cyclic.app/
 
Local Gems is your community's digital treasure map, uncovering the hidden gems and unique delights right in your neighborhood.

- Simply plug in the name and city of the local charm you're on the hunt for.
- Presto! A curated list of community-recommended gems, tailored to your search, springs to life.
- Let's bring to light the fun, offbeat spots that make our community really stand out!

# Technologies in use / Tech Stack / Built with

  - Node.js
  - Express
  - MongoDB

# Installation

To install local-gems locally, please follow the steps below:
  - Clone repo to your machine
  - Open the root of the project and install all dependencies with `npm i` / `yarn`
  - Project has various scripts to run:
    -  `node seed.js` - (cd into the bin folder first and run this command)
    - `npm run dev` - running local version
  
      
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

**Cloudinary setup**

Cloudinary provides a comprehensive cloud-based image management solution.

Navigate to https://cloudinary.com/ and create your account.

**Configuration**

 Go to the terminal and run this command:

$ npm install cloudinary multer multer-storage-cloudinary

Now  go to the .env file and paste the values from your Cloudinary account

# we should add the following

<img src="public/images/cloudinary-env-info.png?raw=true" alt="Desktop Screenshot" title="Desktop Screenshot">



# What have we learned

- Routing: We optimized site navigation, ensuring user-friendly and efficient transitions
- Sessions and Cookies: We implemented sessions and cookies for a tailored user experience.
- Pair Programming: We made sure to collaborate when needed to ensure we stayed on track with our deadlines.
- Front-end & Back-end Development: We connected the visual and the functional integrating user interface design with backend logic
- Express and MongoDB: We were able to refine our skills leading to optimal backend performance.
- Data Structuring: Proper database structuring was essential ensuring efficient data retrieval.
- Data Flow Management: We managed the data flow, enhancing site responsiveness and efficiency.

All in all, this project has been an amazing learning experience in our coding journey. Thanks for stopping by to learn more about it!


# What issues have we faced and how we resolved them

One of our primary hurdles was mastering version control with GitHub. Initially, tasks like pulling, pushing, and merging our local branches with the remote ones proved to be challenging. However, with time and practice, we got the hang of it, streamlining our collaborative efforts and ensuring smooth project progression.

# Source

This project is done as part of the Ironhack Full Stack Development Bootcamp Curriculum. 





