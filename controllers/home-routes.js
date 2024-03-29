const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  Post.findAll({
    attributes: [
        'id', 'title', 'post_body', 'user_id'
    ],
    include : [
        {
            model: User,
            attributes: ['username']
        }
    ]
  })
  .then(postData => {
    const posts = postData.map(post => post.get({ plain: true }));

    res.render('homepage', { posts });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json
  })
});

router.get('/signup', (req,res) => {
  res.render('signup')
});

router.get('/dashboard', (req,res) => {
  res.render('dashboard')
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
          id: req.params.id
      },
      attributes: [
          'id', 'title', 'post_body', 'user_id', 'created_at'
      ],
      include : [
          {
              model: User,
              attributes: ['username']
          }
      ]
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'no post found' });
        return;
      }
  
      const post = postData.get({ plain: true });
  
      res.render('view-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;
