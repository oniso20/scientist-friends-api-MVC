const express = require('express');

const messagesController = require('../controllers/messages.controller');

//Express routing middleware for making our application more modular... 
const messagesRouter = express.Router();

messagesRouter.get(('/'), messagesController.getMessages );
messagesRouter.post(('/'), messagesController.postMessages );

module.exports = messagesRouter;