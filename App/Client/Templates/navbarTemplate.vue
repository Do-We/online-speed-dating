<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <div  v-if='this.$store.state.user.username'>
          <a href="#" v-on:click.prevent="goToMyProfile"><img id="logo" src="http://previews.123rf.com/images/iqoncept/iqoncept1204/iqoncept120400078/13406052-Les-mots-We-Can-Do-It-en-lettres-rouges-pour-symboliser-la-confiance-3d-et-une-attitude-positive-n-c-Banque-d'images.jpg" alt=""></a>
      </div>
      <div v-else>
          <a href="#"><img id="logo" src="http://previews.123rf.com/images/iqoncept/iqoncept1204/iqoncept120400078/13406052-Les-mots-We-Can-Do-It-en-lettres-rouges-pour-symboliser-la-confiance-3d-et-une-attitude-positive-n-c-Banque-d'images.jpg" alt=""></a>
      </div>
    </div>

      <!-- <ul v-if='this.$store.state.user.username' class="nav navbar-nav navbar-right"> -->
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" v-on:click.prevent="goToEvents">Events</a></li>
        <li><a href="#" v-on:click.prevent="goToMyProfile">My Profile</a></li>
        <li><a href="#" v-on:click.prevent="goToEditProfile"><span class="glyphicon glyphicon-cog"></a></li>
        <li><a href=# v-if="user.isAuth" v-on:click.prevent="logout">Logout</a></li>
      </ul>
      <!-- <form v-else class="navbar-form nav navbar-nav navbar-right"> -->
      <form class="navbar-form nav navbar-nav navbar-right">
        <login></login>
      </form>
  </div><!-- /.container-fluid -->
</nav>
</template>