const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    console.log("Server Started");
    next();
})
app.use(function (req, res, next) {
    console.log("Now you can use a server");
    next();
})

app.get('/', function (req, res, next) {
    re.send('Hello World')
    return next(new Error('Something Went Wrong'))
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000)