const express = require('express');

const friendsController = require('../controllers/friends.controller');

//Express routing middleware for making our application more modular... 
const friendsRouter = express.Router();

//Friends specific middleware to collect IP address of requests using req.ip
friendsRouter.use((req, res, next) => {
    console.log('IP Address -', req.ip);
    next();
});

//Post new object to the friends array
friendsRouter.post(('/'), friendsController.postFriend );
//accessing the json
friendsRouter.get(('/'), friendsController.getFriends );
friendsRouter.get(('/:friendId'), friendsController.getFriend );

module.exports = friendsRouter;

