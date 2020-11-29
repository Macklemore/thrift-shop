'use strict';
module.exports = (sequelize, DataTypes) => {
  const Charity = sequelize.define('Charity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {});
  Charity.associate = function(models) {
    // associations can be defined here
  };
  return Charity;
};