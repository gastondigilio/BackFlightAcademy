const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('hours', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
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
      // nextHours: {
        // type: DataTypes.STRING,
        // allowNull: false,
      // },
  });
};
