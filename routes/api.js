var express = require('express');
var api = express.Router();

var Twit = require('twit');

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY
  , consumer_secret: process.env.CONSUMER_SECRET
  , access_token: process.env.ACCESS_TOKEN
  , access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

/* GET home page. */
// api.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });


// make an API call to get list of followers 
var followers = [];
api.get('/twitter/:handle/followers', function(req, res) {
	T.get('followers/list', { screen_name: req.params.id },  function (err, data, response) {
	  if(!err){
	  	data.users.forEach(function(elem){
	  	//console.log(elem.screen_name);
	  	var follower = new Tweeter(elem.name, elem.screen_name, elem.id);
	  	followers.push(followers);
	  });
	  	res.json(followers);
	  }
	  else {
	  		res.send("No one is here.");
	  }
	});
});


// make an API call to get list of friends 
var friends = [];
api.get('/friends/:id', function(req, res) {
	T.get('friends/list', { screen_name: req.params.id },  function (err, data, response) {
	  data.users.forEach(function(elem){
	  	//console.log(elem.screen_name);
	  	friends.push(elem.screen_name);
	  });
	    res.json(friends);
	});
});

console.log("Money money money");

module.exports = api;
