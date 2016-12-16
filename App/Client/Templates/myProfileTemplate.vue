<template>
    <div class="row">
        <div id="profileColumn" class="col-md-2 col-sm-offset-1">
            <h1 id="username" >{{$route.params.id}}</h1>
            <div>
                <img id="profileImg" v-bind:src="profileImg">
                <div>
                    <p id="profText">Name: {{name}}</p>
                </div>
                <div>
                    <p id="profText">Gender: {{gender}}</p>
                </div>
                <div>
                    <p id="profText">Age: {{age}}</p>
                </div>
                <div>
                    <p id="profText">Location: {{location}}</p>
                </div>
                <div>
                    <p id="profText">Description: {{userinfo}}</p>
                </div>
           <div id="editButton"> <button class="glyphicon glyphicon-pencil" v-if='this.$store.state.user.username' v-on:click='editProfile'></button></div>
            </div>
        </div>
        <div class="col-md-7 col-sm-offset-4">
            <div class="row" >
                <div v-if="match" id="eventColumn" class="col-md-7 col-md-offset-2">
                    <div>
                        <h2 class="overhead">Events:</h2>
                        <ul v-for='event in savedEvents'>
                            <div id="event" class="row">
                                <a v-on:click="toDate(event)" id="clickEvent">
                                    <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                    <li id="eventDetails"> {{ event.eventName }} </li>
                                    <li id="eventDetails"> {{ event.eventType }} </li>
                                    <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass" v-on:click="toDate(event)"></button></li>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
                <div v-else>
                    <div id="eventColumn" class="col-md-5">
                        <div>
                            <h2 class="overhead">Events:</h2   >
                            <ul v-for='event in events'>
                                <div id="event" class="row">
                                    <a id="clickEvent">
                                        <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                        <li id="eventDetails"> {{ event.eventName }} </li>
                                        <li id="eventDetails"> {{ event.eventType }} </li>
                                        <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass"></button></li>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div id='matchHorizon' class="col-md-5 col-md-offset-1">
                        <div>
                            <span>Matches:</span>
                            <ul v-for='match in matches'>
                                <ul> {{ match.profileImg }}</ul>
                                <ul> {{ match.name }} </ul>
                                <ul> {{ match.location }} </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div>*Place holder for matchs*</div>-->
    </div>
</template>

<style>
h2.overhead {
    color: #BDD4E6;
}
#profText {
    color: #75B2E1;
}
#clickEvent {
    display: block;
    width: 100%;
    height: 100%;
}
#eventDetails {
    list-style-type: none;
    padding-left: 30px;
}
#username {
    color: #75B2E1;
}
#profileColumn {
    border: 3px solid black;
    position: fixed;
    background-color: #5A666E;
}
#eventColumn {
    border: 3px solid #759CF8;
    background-color: #334D61;
}
#matchHorizon {
    border: 3px solid red;
}
#editButton {
    float: right;
    /*color:#75B2E1;*/
}
#profileImg {
    width: 100%;
    padding-bottom: 5px;
}
#event {
    border: 1px solid #E5C9B0;
    background-color: black;
    padding-top: 2  px;
    padding-bottom: 2px;
}
/*#eventDetails:nth-child(even) {
    border: 1px solid tomato;
    background-color: white;
    padding-top: 2  px;
    padding-bottom: 2px;
}
#eventDetails:nth-child(odd) {
    border: 1px solid tomato;
    background-color: black;
    padding-top: 2  px;
    padding-bottom: 2px;
}*/
#eventButton {
    float: right;
    color: #75B2E1;
    padding-bottom: 3px;
}

</style>