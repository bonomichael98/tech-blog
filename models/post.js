const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
class Post extends Model {}

Post.init(
    {
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },post_body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        sequelize,
    }
);

module.exports = Post;
