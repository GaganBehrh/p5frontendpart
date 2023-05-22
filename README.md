![Resposive Image](src/media/Responsive.png)
Looking to post your recipes? You've come to the right place! ReciBook is a place where you can view the recipes of the other people.  You can create your own free account and add an unlimited number of recipes and share it.This website is also responsive


## React
React is a library for building user interfaces, which comprise only one part of an app. Deciding on all the other parts — styles, routers, npm modules, ES6 code, bundling and more — and then figuring out how to use them is a drain on developers. This has become known as javascript fatigue. Despite this complexity, usage of React continues to grow.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

A Component is one of the core building blocks of React. In other words UI in React will be made up of pieces called components. Components make the task of building UIs much easier. A UI can be broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI.

Components in React basically return a piece of JSX code that tells what should be rendered on the screen. 
man
The reuasble component in this project is for example is the Navigation bar, Asset. These reusable components are used in several pages

### Architecture of the React Application
React library is just UI library and it does not enforce any particular pattern to write a complex application.React architecture is a collection of components responsible for building a software’s User Interface (UI). You can also see it as an organization of your codebase that helps you build your unique project. 

For example, a React architecture will include several UI components such as buttons, forms, API services, Central State Management services, etc. 

Because of this ReactJs architectural freedom, it is the most preferred JavaScript library (framework) for building front-end applications. Get to know more about React.js features. 

- React app starts with a single root component.

- Root component is build using one or more component.

- Each component can be nested with other component to any level.

- Composition is one of the core concepts of React library. So, each component is build by composing smaller components 
  instead of inheriting one component from another component.

- Most of the components are user interface components.

- React app can include third party component for specific purpose such as routing, animation, state management, etc.

## Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## UX
### User Stories
Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages

Sign up: As a user I can create a new account so that I can access all the features for signed up users

Sign in: As a user I can sign in to the app so that I can access functionality for logged in users

Add Post:As a user I would like to add posts to the app so that I can add my recipe

## Wireframe:
Mockups were designed using Figma

![Sign In](src/media/Signin.png)

![Add Post](src/media/Add%20Post.png)

![Signup](src/media/Signup.png)



## Existing Features
Register Account
Anybody can register for free and create their own unique account.
Log In to Account
Users can easily log out of their account with the click of a button.
Log Out of Account
Users can easily log out of their account with the click of a button.

## Database Model
![Database Model](src/media/P5%20Database%20Model.png)

## Kanban Board
![Kanban Board](src/media/Kanban%20Board.png)


## Technologies Used
 React,Heroku, Python, Django, ElephantSQL,

## Agile Method:
The agile Methodology was used and different user stories were created using Kanban board and implemented for the project.

## Model for project
Here is the model I used

### Validators
W3C HTML Validator - No errors found


W3C CSS Validator -No errors found


JShint:
only warnings found

PEP8 Online:
No errors found

Testing of user stories
## Manual Testing for Front End
User Stories
* Creation of the posts: As a user I can create the recipeposts on this website
  Result:Pass, I was able to create the recipepost on this website

* Editing of the posts:As a user I can edit my posts and see those changes on the website as well
  Result:Pass, I can make those changes on ym recipes and also see those changes on the website

* Deleting of the posts: As a developer I can delete the recipes posts which I dont want anymore
  Result:Pass, I was able to delete a recipes which i dint want anymore on my website

* Receiving of all Recipes from the backend: As a user, I was able to see all the recipes created so far
  Result:Pass, it was possible to receive all the recipesfrom the backend and see it in the front end

* Signup: As a developer i could easily signup on the website so as to create further recipes
  Result:Pass, I was able to Signup on the website

* Navigation Test: As a user I can view a navbar from every page so that I can navigate easily between pages
  Result: Pass, A navigation bar was found and i could easily navigate between different pages through this navvbar

* Sign in Test: As a user I can sign in to the app so that I can access functionality for logged in users
  Result: Pass, A sign in page was found where i could sign in and start creating or adding my recipes

* HomePage Navigation: As a user as i enter on the home page of the website, its clearly directed that i could create the 
  recipe after signing up or there is a possibilty of directly signing up and signing in and then directly creating the  recipes
  Result:Pass, On the Homepage when we click on ReciBook logo we are directed to this page where all above mentioned options were found

## Manual Testing for Back End
User stories:
* Creation of the posts: As a developer I can create the posts and receive it in the my backend posts section
  Result:Pass, I was able to create a post and was also found in the backend

* Editing of the posts:As a developer I can edit my posts and see those changes in the backend as well
  Result:Pass, i could see the relevant changes in the backend

* Deleting of the posts: As a developer I can delete the posts and found these posts no more in the backend section
  Result:Pass, I was able to delete a post and this post was also not found in the backend

* Receiving of all Recipes from the backend: As a developer, I was able to receive all the recipes from the backend
  Result:Pass, it was possible to receive all the recipesfrom the backend

* Signup: As a developer i could signup and find the same user in the backend
  Result:Pass, this was posible to find the same user in the backend as well

## Setup and Deployment
Making a Local Clone
Log in to GitHub and locate the GitHub Repository Under the repository name, click "Clone or download". To clone the repository using HTTPS, under "Clone with HTTPS", copy the link. Open Git Bash Change the current working directory to the location where you want the cloned directory to be made. Type git clone, and then paste the URL you copied in Step 3. $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY Press Enter. Your local clone will be created. $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

Cloning into CI-Clone... remote: Counting objects: 10, done. remote: Compressing objects: 100% (8/8), done. remove: Total 10 (delta 1), reused 10 (delta 1) Unpacking objects: 100% (10/10), done. Running it from the github

After cloning the repo please run the following command to include all the neccesary apps in requirement.txt

pip install -r requirements.txt

and include the env.py file which should look like this and the user has to fill in these values
emote Heroku Deployment:
Create an account at Heroku.

Download CLI here.

Open up CMD (Windows) or Terminal (MacOS) and type the following and follow the instructions that appear.

heroku login Create a new Heroku app using the following code in your terminal: heroku create app-name-here With the Heroku app name you just created, modified the production.py file in the settings folder and update the following: ALLOWED_HOSTS = ['your-app-name.herokuapp.com', '127.0.0.1', 'localhost'] Open the Heroku apps webpage and click the app you created in Step 4.

Navigate to the Settings tab on the top horizontal bar, we will be adding the required environment variables here.

Click the 'Reveal Config Vars' button and add the below variables:

You can deploy it using the Deploy option and carry out the build like this Heroku Deployment

All the React installation steps were followed accoriding to the guidelines in the moments app
Gitpod space was created as guided in the setup part of the moments app
and the react bootstrap was installled

Zero-configuration Deploy to Heroku
Thanks to the zero-config foundation of create-react-app, the idea of zero-config deployment seemed within reach. Since these new apps all share a common, implicit architecture, the build process can be automated and then served with intelligent defaults. So, we created this community buildpack to experiment with no-configuration deployment to Heroku.

Create and Deploy a React App 
You can get started building React apps for free on Heroku.

npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
Try it yourself using the buildpack docs.

Growing Up from Zero Config
create-react-app is very new (currently version 0.2) and since its target is a crystal-clear developer experience, more advanced use cases are not supported (or may never be supported). For example, it does not provide server-side rendering or customized bundles.

To support greater control, create-react-app includes the command npm run eject. Eject unpacks all the tooling (config files and package.json dependencies) into the app's directory, so you can customize to your heart's content. Once ejected, changes you make may necessitate switching to a custom deployment with Node.js and/or static buildpacks. Always perform such project changes through a branch / pull request, so they can be easily undone. Heroku's Review Apps are perfect for testing changes to the deployment.

## Acknowledgements and Credits
Mentor and Tutor support Media Info Inspired by "Moments App"