# teachbeacon-admin-ui
 
Project development progress Summary: I have done React UI initially. I have explained below.

# Development progress for UI
=> Completed course, lesson, and topic list page Design
=> Completed course, lesson, and topic edit page Design
=> Completed course, lesson, and topic create page design
=> Completed pagination, loading animation design
=> Completed lesson and topic drag and drop functionality component design.
=> Completed main and inner sidebar design
=> working on page builder design part on course create and edit page

# Development progress for React Redux and API implementation 
=> Integrated API with JWT API authorization token with ‘JWT Authentication for WP REST API’ WordPress plugin.
=> Completed React Component integration with redux state management system
=> Implemented Axio with Redux thunk middleware for API call
=> Implemented React Route V6 for route between pages 
=> Implemented courses, lessons, topics API for GET List and Single item data.
=> Implemented course, lesson , topic pagination with query parameters. 

# I am using the packages below:
-> React, 
-> React-redux, 
-> React Route V6
-> React bootstrap, 
-> Sass
-> Jodit-react
-> html-react-parser
-> Axio, 
-> React beautiful dnd,
-> Redux thunk middleware


# Project Deployment Instructions
Install and configure the JWT plugin to the wordpress website.

=> Install  ‘JWT Authentication for WP REST API’ Plugin
=> Go to wp-config.php and define constants like below

    define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
    define('JWT_AUTH_CORS_ENABLE', true);

We can create a salt from the link below and past any one salt to ‘your-top-secret-key’

https://api.wordpress.org/secret-key/1.1/salt/

=> Modify the .htaccess like below 

    RewriteCond %{HTTP:Authorization} ^(.*)
    RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]

Add this to under the <IfModule mod_rewrite.c></IfModule>

=> Now create a JWT Api authorization token 
    Create a POST request with a valid username and password to the url below. We can use Postman.

    http://your-website/wp-json/jwt-auth/v1/token?username=[your-username]&password=[your-password]

=>  Go to the React Project root folder .There we can see a file called ‘.env.sample’’. Rename the file to .env and open it to the code editor and change the value of variables below:

    REACT_APP_API_BASE=”http://your-website/wp-json/”
    REACT_APP_JWT_TOKEN=”jwt-token”

=> If The node_modules folder does not exist in the root folder then run ‘npm install’ for npm and ‘yarn install’ for yarn.
=> Finally run ‘npm start’ for npm and ‘yarn start’ for yarn
