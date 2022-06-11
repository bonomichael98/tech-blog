const router = require('express').Router();
const { Router } = require('express');
const sequelize = require('../../config/connection');
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
            'created_at'
        ],
        include : [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

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
            'created_at'
        ],
        include : [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData =>{ 
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id. '})
            return;
        }
        res.json(dbPostData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_body: req.body.post_body,
        ingredients: req.body.ingredients,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


router.put('/:id', (req, res) => {
    Post.update(
        {
        title: req.body.title,
        post_body: req.body.post_body,
        ingredients: req.body.ingredients
        },
        {
        where:{
            id: req.params.id
        },

    })
    .then(dbPostData =>{ 
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id. '})
            return;
        }
        res.json(dbPostData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;