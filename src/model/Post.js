const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const POST = sequelize.define('Post', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT },
})

module.exports = POST;
