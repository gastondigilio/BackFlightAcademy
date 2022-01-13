const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('nextHours', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
      nextHours: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      state: {
        type: DataTypes.ENUM("Pending", "Canceled", "Aproved"),
        defaultValue: "Pending",
        allowNull: false,
      },
      plane: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
  });
};
