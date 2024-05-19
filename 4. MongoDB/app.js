const express = require('express');
const app = express();
const userModel = require('./usermodel');


app.get('/', (req, res) => {
    res.send("Hello");
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


// To find anyone user you can pass any key value in an Object.
// Note: Here you can use find() or findOne().
// Note: find() returns data in the form of array or findOne() returns data in the form of an Object.
// Note: In the below case if there are two name: "Aniket" then it will return the first user.

// app.get('/read', async (req, res) => {
//     var users = await userModel.find({ name: "Aniket" })
//     res.send(users)
// })


app.listen(3000, () => {
    console.log("Listening......");
})