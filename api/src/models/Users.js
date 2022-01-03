const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('usuarios', {
    id: {
      //add uui
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull: false,
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
    totalFlightHours: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    totalFlights: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    flightHoursCurrentMonth: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    nextHours: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    subjectsApproved: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  });
};
