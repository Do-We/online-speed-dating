<template> 
  <div class="login">
    <form class="login-form">
    	<label>Sign In</label>
<<<<<<< HEAD
<<<<<<< HEAD
      <div>      
        <input placeholder="Enter your username here" type="text" v-model="username">
        <input placeholder="Enter your password here" type="password" v-model="password">
        <button class="login-button" role="button" href="#" v-on:click.prevent="login"> Log In </button>
      <router-view name='profile' v-bind:username.sync='username'></router-view>
=======
      <div>
        <input placeholder="Enter your username here" type="text" v-model="username">
        <input placeholder="Enter your password here" type="password" v-model="password">
        <button class="login-button" role="button" href="#" v-on:click.prevent="login"> Log In </button>
              <router-view name='profile' :username="username"></router-view>
      </div>
>>>>>>> working on profile controller and template. working on sending props between children
=======
      <div>      
        <input placeholder="Enter your username here" type="text" v-model="username">
        <input placeholder="Enter your password here" type="password" v-model="password">
        <button class="login-button" role="button" href="#" v-on:click.prevent="login"> Log In </button>
      <router-view name='profile' v-bind:username.sync='username'></router-view>
>>>>>>> editing files to get username input to be passed between components
    </form>
  </div>
</template>
