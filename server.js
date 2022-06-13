const express = require('express');

const path = require('path');

//path to our routers
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router')

const app = express();

//Set our templating engine
app.set('view engine', 'hbs');
//set path to the template
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

//First middleware for metadata
app.use((req, res, next) => {
    const start = Date.now();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms`);
    next(); 
});

// Express static middleware for serving the frontend
app.use('/site', express.static(path.join(__dirname, 'public')));
//Express middleware for adding (POST) new friends i.e JSON parsing middleware
app.use(express.json());

//Rendering the template engine
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My scientist friends',
        caption: 'Time to go Skiing!',
    });
});

// Mounting the friends and messages router on the express app. These are the collections our application support
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
});