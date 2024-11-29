const sequelize = require('../config/database')
const POST = require('./Post')
const Profile = require('./Profile')
const TAGS = require('./Tags')
const User = require('./User')

User.hasOne(Profile, { foreignKey: 'userId', onDelete: 'CASCADE' })
Profile.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' })


User.hasMany(POST, { foreignKey: 'userId', onDelete: 'CASCADE' })
Profile.belongsTo(User, { foreignKey: 'userId' })

POST.belongsToMany(TAGS, { through: 'PostTags' })
TAGS.belongsToMany(POST, { through: 'PostTags' })

sequelize.sync(
  {
    alter: true,
  },
  () => {
    console.log('Sync Done')
  }
)

module.exports = { sequelize, User, Profile, POST, TAGS }
