const express = require('express');
const router = express.Router();

// Define routes for rendering EJS templates
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/page2', (req, res) => {
    res.render('page2');
});

router.get('/page3', (req, res) => {
    res.render('page3');
});

router.get('/page4', (req, res) => {
    res.render('page4');
});

router.get('/page5', (req, res) => {
    res.render('page5');
});

// Export the router to be used in app.js
module.exports = router;