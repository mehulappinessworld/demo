const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    dialect: 'mysql',
    host: 'vset-db.cdgzyysga9qn.ap-south-1.rds.amazonaws.com',
  }
)
sequelize.authenticate()
    .then((res) => {
        console.log("database Connection done");
    })
    .catch((res) => {
        console.log("database Connection failed");
    })
    
module.exports = sequelize