const models = require('../models/friends.models')

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = models[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
}

function postFriend(req, res) {
    if (!req.body.name){
        res.status(400).json({
            error: 'Friend name is missing'
        });
    }
    const addFriend = {
        name: req.body.name,
        id: models.length 
    };
    models.push(addFriend);

    //returning the json of the newly added friend
    res.json(addFriend);
}

function getFriends(req, res) {
    res.json(models);
}

module.exports = {
    getFriend,
    getFriends,
    postFriend
}