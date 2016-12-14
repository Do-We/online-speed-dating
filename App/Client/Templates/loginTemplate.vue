<template>
    <div>
        <div class="form-group">
            <label class="sr-only" for="exampleInputEmail2">Email address</label>
            <input type="text" class="form-control" id="exampleInputEmail2" placeholder="Username" v-model="username" required>
        </div>
        <div class="form-group">
            <label class="sr-only" for="exampleInputPassword2">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" v-model="password" required v-on:keyup.enter="login">
            <div class="help-block text-right"><a href="">Forgot password?</a>
            </div>
        </div>
        <div class="form-group">
            <button type='button' class="btn btn-primary btn-block" v-on:click.prevent="login">Sign in</button>
        </div>
    </div>
</template>