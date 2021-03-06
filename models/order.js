'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    menuItemId: DataTypes.INTEGER,
    userPhoneNumber: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Order',
  });
  return Order;
};