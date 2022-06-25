const router = require('express').Router();
const { Router } = require('express');
const sequelize = require('../../config/config');
//Tags added to the below variable
const { Post, User } = require('../../models');

//directory is http://localhost:3001/api/post

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_body',
            'user_id',
        ],
        include : [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:id', (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_body',
            'user_id',
        ],
        include : [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData =>{ 
        if (!postData) {
            res.status(404).json({ message: 'No post found'})
            return;
        }
        res.json(postData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_body: req.body.post_body,
        user_id: req.session.user_id
    })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/:id', (req, res) => {
    Post.update(
        {
        title: req.body.title,
        post_body: req.body.post_body,
        },
        {
        where:{
            id: req.params.id
        },

    })
    .then(postData =>{ 
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id. '})
            return;
        }
        res.json(postData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;