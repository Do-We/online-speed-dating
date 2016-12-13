# Do-We


The Hot Date Boyz--back at it again!

##Table of Contents
* [Team Members](#team-members)
* [Tech Stack, API's and Third-party Tools](#tech-stack-apis-and-third-party-tools)
* [Folder and File Structure](#folder-and-file-structure)
* [Setting up the Development Environment](#setting-up-the-development-environment)
* [Starting the app](#starting-the-app)
* [System Architecture](#system-architecture)
* [Database Schema](#database)
* [Add Publishers](#add-publishers)
* [Worker Description](#worker-description)
* [License](#license)

##Team Members
[![Dan "Keep it in the Kitchen" Gilday](photo)](http://github.com/gildilocks)

[![Elliott Birch](photo)](http://github.com/elliottabirch)

[![Eric "Chris" Lau](photo)](http://github.com/elau002)

[![Wasiff "White Shadow" Afzal](photo)](http://github.com/is0sceles)

##Tech Stack, API's and Third-party Tools
* [Vue](Documentation/VUE.md) for rendering views
* [Vuex](Documentation/VUEX.md) for managing state
* [Vue-Router](Documentation/VUEROUTER.md) for controlling navigation within the client
* [Node.js](https://nodejs.org/en/) and [Express](http://expressjs.com/) for serving static pages and services. 
* [MongoDB](https://www.mongodb.com/) for database with [Mongoose](Documentation/MONGOOSE.md) as an ODM. See our [Database](#database) section for more details.
* [PubNub](Documentation/PUBNUB.md) for controlling interactions between groups of clients with [WebRTC](https://webrtc.org/) for peer to peer video streaming. 
* [Webpack](https://webpack.github.io/) & [Babel](https://babeljs.io/)
* [Passport](Documentation/PASSPORT.md) for managing user authentication.



##Folder and File Structure

    online-speed-dating/
    |
    |--App/
        |
        |--Client/
            |
            |--Components/
                |
                |--Vue components (data/functionality)
            |--Dependencies/
                |
                |--pubnub WebRTC SDK
            |--Router/
                |
                |--routes (Vue-Router client-side routing)
            |--Templates/ 
                |
                |--Vue templates
            |--app
            |--index
            |--store (Vuex state management)
            |--stylesheet
        |--Database/
            |
            |--models/
                |
                |--Mongoose models
            |--config (connects to the database)
            |--schema (establish mongodb schema for database entries)
        |--Server/
            |
            |--handlers/
                |
                |--Handlers for server side functionality
            |--routes
                |
                |--apiRouter
                |--authRouter
                |--eventRouter
            |--middleware
            |--router
            |--server
    |
    |--Documentation/
    |

##Setting up the Development Environment

##How to start the app

###Install dependencies: 
- [ ] navigate to the root directory and run `npm install`
- [ ] Make sure mongodb is installed and configured

####Get API Keys for PubNub
- [ ] Register with [PubNub](https://www.pubnub.com/get-started/)
- [ ] Create a project on your [PubNub user profile](https://admin.pubnub.com/)
- [ ] Make sure that 'Presence' is toggled on in the 'Application Add-Ons' section for your keyset (Don't worry, it's free).
- [ ] For further information on request/connection limits for free users, see [PubNub's pricing page](https://www.pubnub.com/pricing/)

###Starting the app
- [ ] Start your 
- [ ] Open a new terminal window and navigate to the root file of the project
- [ ] run 
- [ ] Open a terminal window and navigate to the root file of the project
- [ ] If this is the first time you are starting the app 
- [ ] run 
- [ ] Open a new terminal window and navigate to the root file of the project
- [ ] run `npm start` 

- [ ] You can now open `http://localhost:4321/`

##System Architecture
![architecture](https://dl.dropboxusercontent.com/s/....)

##Database
![schema](https://dl.dropboxusercontent.com/....)

##Do the thing
To do something that our app wants to do

##License
MIT