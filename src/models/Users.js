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
      validate:{
        isAlpha: true,
        len: [2, 15]        
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha: true,        
        len: [2, 15]   
      }
    },
    email: {
      type: DataTypes.STRING,      
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    role: {
      type: DataTypes.ENUM("Instructor", "Alumno", "Piloto", "Co-Admin", "Admin"),
      defaultValue: "Alumno",
    },
    document: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      minDate: '01-01-1960',
      maxDate: '01-01-2004',
      // allowNull: true,
    },
    nationality:{
      type: DataTypes.STRING,
      // allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    province: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    cp: {
      type: DataTypes.INTEGER,
      // allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    subjectsApproved: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    password:{
      type: DataTypes.STRING(60),
      validate:{
        len: [60, 60]
      },
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
