<template>
<div>
  <ul class="nav navbar-nav navbar-right" v-if='this.$store.state.username'>
    <li><p class="navbar-text">Welcome, {{this.$store.state.username}} !!</p></li>
		<li class="dropdown">
		  <a href="#" class="dropdown-toggle " data-toggle="dropdown"><b>Profile Options</b> <span class="caret"></span></a>
						<ul id="login-dp" class="dropdown-menu logout-profile">
						<li>
			      <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="logout">Logout</button>
						</li>
						<li>
			      <button v-on:click.prevent="goToProfile" type="submit" class="btn btn-primary btn-block" >Home</button>
						</li>
						<li>
			      <button v-on:click.prevent="editProfile" type="submit" class="btn btn-primary btn-block" >Update Profile</button>
						</li>
		</li>
  </ul>
	      <ul class="nav navbar-nav navbar-right" v-else>
    <li><p class="navbar-text">Already have an account?</p></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>
			<ul id="login-dp" class="dropdown-menu">
				<li>
					 <div class="row">
							<div class="col-md-12">
								Login via
								<div class="social-buttons">
									<a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
									<a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
								</div>
                  or
                <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
				  <login></login>
				  <div class="checkbox">
				    <label>
				      <input type="checkbox"> keep me logged-in
				    </label>
				  </div>
				</form>
			  </div>
			  <div class="bottom text-center">
			  New here ?     
        <router-link to='/signup'><a href="#/signup"><b>Join Us</b></a></router-link>
			  </div>
			</div>
		  </li>
		</ul>
      </li>
  </div>
</ul>
</template>

<style>

</style>