// Create web server
// 1. Create a web server
// 2. Create a route for comments
// 3. Create a route for comments/new
// 4. Create a route for comments/:id
// 5. Create a route for comments/:id/edit
// 6. Create a route for comments/:id/delete

// 1. Create a web server
const express = require('express');
const router = express.Router();

// 2. Create a route for comments
router.get('/', (req, res) => {
    res.send('INDEX /comments');
});

// 3. Create a route for comments/new
router.get('/new', (req, res) => {
    res.send('NEW /comments/new');
});

// 4. Create a route for comments/:id
router.get('/:id', (req, res) => {
    res.send('SHOW /comments/:id');
});

// 5. Create a route for comments/:id/edit
router.get('/:id/edit', (req, res) => {
    res.send('EDIT /comments/:id/edit');
});

// 6. Create a route for comments/:id/delete
router.delete('/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

// 7. Export router
module.exports = router;