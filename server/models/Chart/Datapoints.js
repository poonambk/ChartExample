
const Datapoints = (sequelize, DataTypes) => {
    const Datapoints = sequelize.define(
      'Datapoints',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,

        },
        age: {
          type: DataTypes.INTEGER,
        },
        gender: {
            type: DataTypes.STRING,
          },
          
      },
      {
        timestamps: true,
        freezeTableName: true,
      }
    );
  
    Datapoints.sync();
    return Datapoints;
  };
  
  //export default Datapoints;
  module.exports = Datapoints;