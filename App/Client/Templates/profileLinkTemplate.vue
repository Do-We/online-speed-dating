<template>
    <div>
        <div v-if='this.$store.state.user.username'>
        </div>
        <div v-else>
            <h2>Sign-up here!</h2>
                <div class="row">
                    <div>
                        Signup via
                        <div class="social-buttons">
                            <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
                            <a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
                        </div>
                        or
                        <form class="form" role="form" method="post" action="signup" accept-charset="UTF-8" id="login-nav">
                            <signup></signup>
                        </form>
                    </div>
                        </router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<style>
</style>