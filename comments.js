// create web server

var express = require('express');
var router = express.Router();

// import model
var Comment = require('../models/Comment');

// create route
router.get('/', function(req, res, next) {
    Comment.find({}, function(err, comments) {
        if (err) {
            res.send('Error');
        } else {
            res.send(comments);
        }
    });
});

router.get('/:id', function(req, res, next) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            res.send('Error');
        } else {
            res.send(comment);
        }
    });
});

router.post('/', function(req, res, next) {
    var newComment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });

    newComment.save(function(err, comment) {
        if (err) {
            res.send('Error');
        } else {
            res.send(comment);
        }
    });
});

router.put('/:id', function(req, res, next) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            res.send('Error');
        } else {
            comment.name = req.body.name;
            comment.comment = req.body.comment;
            comment.save(function(err, comment) {
                if (err) {
                    res.send('Error');
                } else {
                    res.send(comment);
                }
            });
        }
    });
});

router.delete('/:id', function(req, res, next) {
    Comment.findByIdAndRemove(req.params.id, function(err, comment) {
        if (err) {
            res.send('Error');
        } else {
            res.send(comment);
        }
    });
});

// export router
module.exports = router;