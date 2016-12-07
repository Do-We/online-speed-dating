<template> 
  <div class="login">
    <form class="login-form">
    	<label>Sign In</label>
      <div>
        <input placeholder="Enter your username here" type="text" v-model="username">
        <input placeholder="Enter your password here" type="password" v-model="password">
        <button class="login-button" role="button" href="#" v-on:click.prevent="login"> Log In </button>
              <router-view name='profile' :username="username"></router-view>
      </div>
    </form>
  </div>
</template>
