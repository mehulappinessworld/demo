const { User, Profile } = require("../model")

exports.createUser = async (req, res) => {
  try {
    const { name, email, bio } = req.body
    const user = await User.create({ name, email })
    await Profile.create({ bio, userId: user.id })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getUsers = async (req, res) => {
  try {
      const users = await User.findAll({
          attributes:["name"],
          include: {
              model: Profile,
              attributes:["name"]
          }
      })
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
