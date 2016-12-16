<template>
    <div>
        <div class="form-group">
            <label class="sr-only">Email address</label>
            <input type="text" class="form-control" placeholder="username" v-model="user.username">
        </div>
        <div class="form-group">
            <label class="sr-only">Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="user.password">
        </div>
        <div class="form-group">
            <button v-if="!user.isAuth" class="btn btn-primary btn-block" v-on:click="login()">Sign in</button>
        </div>
    </div>
</template>
