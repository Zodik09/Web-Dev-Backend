const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    console.log("Started......");
    console.log(userModel);
    
    next();
});
app.use(function (req, res, next) {
    console.log("Running......");
    next();
});
app.get('/', (req, res) => {
    res.render("index");
})

app.get('/create', async (req, res) => {
    var createdUser = await userModel.create({
        name: 'Babu',
        username: 'Rani',
        email: 'karma@gmail.com',
        age: 23
    })
    res.send(createdUser)
    console.log("Created......");
})

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ username: 'Karma' }, { name: 'Adarsh Vishwakarma' }, { new: true })
    res.send(updatedUser)
    console.log("Done Updating.");
})

// To find or read all users you can find().
app.get('/read', async (req, res) => {
    var users = await userModel.find()
    res.send(users)
    console.log("Found it......");
})

app.get('/delete', async (req, res) => {
    var users = await userModel.findOneAndDelete({ username: 'Karma' });
    res.send(users)
    console.log("Deleted......");
})

app.listen(3000, () => {
    console.log("Listening......");
});