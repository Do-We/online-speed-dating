<template>
	<div class='sign-up'>
		<form >
		<label>Sign Up</label>
			<div>
				<input placeholder="Enter your username here" type="text" v-model="username">
				<input placeholder="Enter your password here" type="password" v-model="password">{{password}}
				<button v-on:click.prevent='signup'>Submit</button>
			</div>
		</form>
	</div>
</template> 

