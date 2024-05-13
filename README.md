# DonchoZ-Website
DonchoZ-Website

I. Introduction

This project is the digital portfolio of artist - Doncho Zahariev.
MERN stack project - MongoDB, Express.js, React.js, and Nodejs
Deploy: http://doncho-zahariev.com/

II. Getting Started

Installation instructions:

Go to "client" folder and run "npm start"
Go to "server" folder and run "npm run start"

III. Folder Structure

client folder structure:

"public" folder - contains all public images
"scr" folder - contains: - api folder -for all api requests - components folder - all components - context folder - hook folder - contains custom form hook - utils folder

IV. Components

Navigation component - contains the header and the navigation bar of the web app
Catalog component - contains all listed entries and a search bar
Create component - contains a creation form
Details component - contains the details of the entries. Depending if user is logged , owner or guest - different functionalitites are shown
Login component - contains login form
Homepage component - contains the home page of the app
SingleRecord component - contains the info card for each entry

V. Routing

Routing is done with the help of "react-router-dom".
Private routes are done using react-auth-kit - "RequireAuth".

VI. State Management
Context was created, which holds the main states across the project

VII. APIs and Backend Integration

Mongoose, Express, and Node.js
CRUD Operations All requests are sent to http:localhost/3030/:resource. Supported requests are GET, POST, PUT, PATCH, DELETE
MongoDB Models: User, Comment, Record

VIII. Styling

The application is divided into components with separate CSS files.
