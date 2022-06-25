const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
// create the Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },
  {
    sequelize,
  }
);

module.exports = Post;
