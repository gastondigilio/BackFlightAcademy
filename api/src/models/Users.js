const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('users', {
    id: {
      //add uui
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM("Instructor", "Alumno", "Piloto", "InstructorAdmin", "Admin"),
      // allowNull: false,
    },
    document: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    nationality:{
      type: DataTypes.STRING,
      // allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    cp: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    subjectsApproved: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    pass:{
      type: DataTypes.STRING,
    }
  });
};
