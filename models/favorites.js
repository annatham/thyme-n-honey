module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
      title: {
        type: DataTypes.STRING,
        defaultValue: ""
        },
      image: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      ingredients: {
        type: DataTypes.TEXT,
        defaultValue: ""
      },
      instructions: {
        type: DataTypes.STRING,
        defaultValue: ""
      }
    });
    return Favorite;
  };
  