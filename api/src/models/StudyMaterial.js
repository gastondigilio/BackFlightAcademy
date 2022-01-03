const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('studyMaterial', {
    // id: {
      //add uui
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    language: {
      type: DataTypes.ENUM("Español", "Ingles", "Portugues"),
      allowNull: false,
    },
    manuals: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checklist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
