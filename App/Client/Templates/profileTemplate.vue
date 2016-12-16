<template>
    <div class="row">
        <div id="profileID" class="col-md-offset-3 col-md-6 rounded" >
            <div class="container-fluid">
                <div class="row" >
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-7">
                                <h3 id="name">{{name}}</h3>
                            </div>
                            <div id="gender"class="col-md-3">
                                <h3>{{gender}}</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div id="location" class="col-md-12">
                                <p class="lead">{{location}}</p>
                            </div>
                        <div id="messageBox" class="row">
                            <div v-if="hasInfo" id="userInfo" class="col-md-10 col-md-offset-1">
                                {{userinfo}}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-md-offset-1">
                        <img id="profilePic" v-bind:src="profileImg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#profileID {
    border: 2px solid #F4FFF5;
    background: linear-gradient(#2c4355, #FFFFFF);
    border-radius: 10px;
    /*background: linear-gradient(#7d62b6, purple);*/
}
#name {
    display:inline-block;
    color: white;
    font-size: canvas;
    font-weight: normal;
}
#userInfo {
    padding-top:12.5%;
    padding-bottom: 12.5%;
    border: #70705E 3px solid;
    border-radius: 40px;
    color: #3D403D;
    background: #DCF8C3;
}
#gender {
    color: #9FA14C;
    font-style: italic;
}
#location {
    color: #E4DAFF;
    font-weight: bold;
}
#profilePic {
    width: 100%;
}
</style>