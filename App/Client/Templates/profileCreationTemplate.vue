<template>
    <div class="row">
        <h1 class="col-xs-offset-1" id="updateTitle">Update Your Profile</h1>
        <div class="container-fluid col-xs-5 col-xs-offset-1">
            <h3>Basic info</h3>
            <div class="form-group col-xs-12" v-for="(info, key) in basic">
                <div class="col-xs-2 col-xs-offset-2"> {{key}} :</div>
                <input class="col-xs-4" placeholder="Please fill me in" type="text" v-model="info.value">
                <div class="col-xs-1">
                    <button v-on:click="updateUserBasicInfo(key, info.value)" type="submit" class="glyphicon glyphicon-pencil"></button>
                </div>
            </div>
        </div>
        <div class="container-fluid col-xs-5">
            <h3>Personal info</h3>
            <div class="form-group col-xs-10 col-xs-offset-2">
                <div class="col-xs-3 col-xs-offset-2">Divorced: </div>
                <div>
                    <input type="radio" id="yes" value="Yes" v-model="personal.divorced">
                    <label for="yes">Yes</label>
                    <input type="radio" id="no" value="No" v-model="personal.divorced">
                    <label for="no">No</label>
                </div>
                <br>
                <div class="col-xs-3 col-xs-offset-2">Number of kids: </div>
                <input type="number" min="0" max="15" placeholder="0" v-model="personal.kids" required>
                <br>
                <div class="col-xs-3 col-xs-offset-2">Description: </div>
                <br>
                <br>
                <textarea class="col-xs-6 col-xs-offset-2" v-model="personal.description" placeholder="Add your description"></textarea>
                <br>
                <br>
                <br>
                <br>
                <div class="button">
                    <button v-on:click="updateUserPersonalInfo" type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
        <div class="container-fluid col-xs-10 col-xs-offset-1">
            <h3>Interests</h3>
            <div class="form-group" v-for="(interest, key) in interests">
                <div class="col-xs-3 col-xs-offset-1 interest" v-bind:class="{active: interest.value}" v-on:click="updateInterests(key)"><h3>{{key}}</h3></div>
            </div>
        </div>
    </div>
</template>

<style>
    #ColumnInput {
        position: absolute;
    }
    #updateBackground {
        width: 100%;
        position: absolute;
    }
    #profileUpdateBackground {
        width: 100%;
    }

    #updateForm {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    #updateTitle {
        color: #3D403D;
    }

    #updateButton {
        /*background: transparent;*/
        float: right;
    }

    .button {
        text-align: center;
    }

    .interest {
        height: 100px;
        background-color: #e7e7e7;
        color: black;
        text-align: center;
        margin-bottom: 10px;
        border-radius: 8px;
    }

    .active {
        height: 100px;
        background-color: #4CAF50;
        color: white;
        text-align: center;
        margin-bottom: 10px;
        border-radius: 8px;
    }

    h3 {
        text-align: center;
    }

</style>