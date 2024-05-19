const express = require('express');
const app = express();
const path = require('path')


// Middleware to parse JSON data
// app.use(express.json());

// Middleware to parse URL-encoded data
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    console.log("Started the server");
    console.log("Running......");
    next();
})

app.get('/', function (req, res) {
    res.render("index");
})
app.get('/about', function (req, res) {
    res.render("about");
})
app.get('/blog', function (req, res) {
    res.render("blog");
})
app.get('/cart', function (req, res) {
    res.render("cart");
})
app.get('/contact', function (req, res) {
    res.render("contact");
})
app.get('/product', function (req, res) {
    res.render("product");
})
app.get('/shop', function (req, res) {
    res.render("shop");
})

app.listen(3000, function () {
    console.log("Listening......");
})