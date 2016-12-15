var Event = require('../../Database/models/eventModel.js');
var db = require('../../Database/config.js');


//Request handlers
exports.getEvents = (req, res) => {
  Event.find({}).exec((err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).send(results);
  });
};

exports.postEvent = (req, res) => {
  let event = new Event(req.body); //save new event model in db
  event.save((err, result) => {
    if (err) {
      console.error('Could not save to database..', err);
      res.status(400).send(result);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.getSingleEvent = (req, res) => {
  Event.findOne(req.query, (err, event) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(event);
    }
  });
};

exports.updateEvent = function (req, res) {
  Event.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, function() {
    res.send(204);
  });
};
