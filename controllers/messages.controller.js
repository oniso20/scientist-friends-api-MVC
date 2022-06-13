const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my scientist friends!',
        friend: 'Elon Musk',
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
};

function postMessages(req, res) {
    res.send('Updating messages...');
};

module.exports = {
    getMessages,
    postMessages
};