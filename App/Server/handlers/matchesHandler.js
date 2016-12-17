var userModel = require('../../Database/models/userModel.js');
var db = require('../../Database/config.js');
var User = require('../../Database/models/userModel.js');

exports.getMatches = function (req, res) {
  //compare likes across users
  //update current user's 'matches' property
  //User.findOneAndUpdate({parameters}, {$push: {$each: [value, value]}})

  //User.findOne({username: user name yo}).then(function(data){
  //   data.likes.forEach(function(item){
  //     User.find({username: item}).then(function(itemdata){
  //       if (itemData.likes.indexOf(username) !== -1) {
  //         User.findOneAndUpdate({username: username}, {push: {itemData.name})
  //         // or store to an array
  //       }
  //     })
  //   })
  // })

  //alternatively, store all matched names in an array, then call findoneandupdate with a push/each of that array
  res.end()
};

exports.updateMatches = function (req, res) {

  res.end()
};