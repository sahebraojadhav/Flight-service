'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userprofile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userprofile.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    profilephoto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userprofile',
  });
  return userprofile;
};