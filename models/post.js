module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", 
  {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.DATE,
      comments: DataTypes.TEXT,
      rating: DataTypes.INTEGER

  });
  return Post;
};
