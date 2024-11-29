const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const TAGS = sequelize.define('Tags', {
  name: { type: DataTypes.STRING, allowNull: false },
})

module.exports = TAGS
