var User = require('../../Database/models/userModel.js');
var db = require('../../Database/config.js');
var Event = require('../../Database/models/eventModel.js');
var PubNub = require('pubnub');

exports.initiateEvent = function(req, res) {
  var pubnub = new PubNub({
    publishKey: process.env.PUBNUB_PUBLISH_KEY,
    subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
    ssl: true
  });

  Event.findOne({ _id: req.body.eventId})
   .exec(function(err, event) {

    //  var currentEvent = event;
    //  var eventId = event._id; //could be a unique event  ID instead, might be better to avoid any possible duplication
    //  var eventCallDuration = event.eventCallDuration;
    //  var totalRounds = Math.ceil(event.usernames.length / 2);

     //send message to start event -- maybe this is on its own channel, could be easier than parsing message content
     pubnub.publish(
       {
         message: 'Menergy',
         channel: 'a',
       },
      function (status, response) {
          // handle status, response
      }
    );

    //Set Timeout based on dateDuration that sends message whenever a call should end
      //sends message to channel--possibly a channel just for messages when hangups should happen to avoid parsing/just watch the channel for any message
        //include tracking number of which round we are on (ie 7 = round 7), to keep track of where in the process we are
      //if the total number of rounds (set in event's data) not been reached, call setTimeout function recursively
      //if the total number of rounds has been reached, the event is over and a message should be sent to that effect (again, possibly on its own channel)
        //possibly update event database entry to reflect that it is "finished"

   });
};

exports.setupEvent = function(req, res) {
  Event.findOne(req.body) //find an event by saved _id
  //MAYBE findoneandupdate and add a setup true/false parameter on mongoose model to check for in a different route
    .exec(function(err, event) {
      console.log(err);
      var fullList = event.usernames;
        //for now we are just splitting the list in half, maybe add functions for different splitting based on different factors at some point
        //if the list isn't even, add a dummy user so that the resulting halves will be the same length
      if (fullList.length % 2 !== 0) {
        fullList.push('GARBAGE');
      }
        //slice list into caller and callee lists default-no-reasoning edition
      var caller = fullList.slice(0, fullList.length / 2);

      var callee = fullList.slice(fullList.length / 2);

      for (var i = 0; i < caller.length; i++) {
        var thisCaller = caller[0];
        var thisCallee = callee[0];

        User.findOneAndUpdate({username: thisCaller}, {$set: {callList: Array.prototype.concat(true, callee) }} )
        .exec(function(err, response) {
        });

        User.findOneAndUpdate({username: thisCallee}, {$set: {callList: Array.prototype.concat(false, caller) }} )
        .exec(function(err, response) {
          if (err) { console.log(err); }
        });

        caller.push(caller.shift());
        callee.push(callee.shift());
      }
    });
  //send an indicator that room has been setup and can now be navigated to(?)
  //or create seperate authentication and set it to true/passed/whatever right before sending server res
  res.status(200).send('Call Lists SO HOT RIGHT NOW');
  //send back req body unique id and do something with it?
};