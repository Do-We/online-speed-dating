<template>
  <div>
    <h1>{{$route.params.id}}</h1>
    <div class='profilePhoto'>
			<img width=200px height=200px v-bind:src="profileImg">
		<div>        
		  <span>Name :{{name}}</span>
        </div>
        <div>
	      <span>Gender: {{gender}}</span>
	    </div>
	    <div>
	      <span>Age: {{age}}</span>
	    </div>
	    <div>
	      <span>Location: {{location}}</span>
	    </div>
		<div>
	      <span>Description: {{userinfo}}</span>
	    </div>
	</div>
	<button v-if='this.$store.state.username' v-on:click='editProfile'>Update User Info</button>
	<!--<div>*Place holder for matchs*</div>-->
  </div>
</template>