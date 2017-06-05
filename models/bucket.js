module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: {
      name: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Todo;
};