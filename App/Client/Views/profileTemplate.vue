<template>
  <div>
    <h1>{{$route.params.id}}</h1>
      <div>
        <div>
          <div class='profileImg' v-html='profileImg'></div>
        </div>
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
	<button v-on:click='update'>Update User Info</button>
	<!--<div>*Place holder for matchs*</div>-->
  </div>
</template>