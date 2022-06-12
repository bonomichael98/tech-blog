// import all models
const Post = require('./Post');
const User = require('./User');
// const Vote = require('./Vote');
// const Comment = require('./Comment');
// const Tags = require('./Tags');


User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User.belongsToMany(Post, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.belongsToMany(User, {
// //   through: Vote,
// //   as: 'voted_posts',
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//   foreignKey: 'post_id'
// });

// Post.hasOne(Comment, {
//   foreignKey: 'post_id'
// });

// Tags.hasMany(Post, {
//   foreignKey: 'id',
// });

module.exports = { User, Post, };
