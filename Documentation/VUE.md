- Vue Js:

  Is a lightweight Javascript framework and borrows a lot of vocabulary and concepts from both React.js and Angular.js. Look at the 
documentation for more information on how to set-up different implementations of a Vue app. 
  At the most basic, you can have HTML, Script and Style tags in one file, collectively called a component. 
Components are custom elements that Vue’s compiler attaches behavior to.

Vue.js has keywords that cannot be overwritten such as 'data', 'methods', 'templates'. This is similar to any other framework/ technology
and you should read the docs if you encounter errors in your console that don't seem syntax related. 

Download the Chrome debugging extension to give you detailed error messages in the console. 

Read more about components here:
https://vuejs.org/v2/guide/components.html

- Our implementation of Vue:

Components are currently modularized by seperating HTML into individual Template files and all the logic into seperate Javascript files called Controllers.
We've then imported the template.vue files into their respective controllers and mounted these as individual components via router-view in index.html. 


- VueX:

  At the center of every Vuex application is the store. A "store" is basically a container that holds your application state.
There are two things that makes a Vuex store different from a plain global object:

-Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store's state changes.

-You cannot directly mutate the store's state. The only way to change a store's state is by explicitly committing mutations. 
This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.

 VueX holds global state of the app and makes properties available throughout the application without having to deal with 
passing data from parent to child (as it commonly flows in Vue) or between sibiings. 

The global state allows for executing async requests through actions.

Our applications 'store.js' file is located in the Client folder. 

https://vuex.vuejs.org/en/getting-started.html

- Vue Resource:

Handles request to server. 
Has to be imported/required. That means NPM.
Allows for AJAX style $HTTP calls.


- Vue Router:

Similar to UI-Router from Angular. Handles path of application for single page applications. This allows children components to be mounted onto exisiting components. 
There is a construct called Route Guard which acts somewhat like middleware and executes a function before entering a route. 



/** Start Here **/

- Quick Start Guide:
https://vuejs.org/v2/guide/