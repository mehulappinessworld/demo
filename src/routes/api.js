const express = require('express')
const { body } = require('express-validator')
const userController = require('../controller/userController')
const router = express.Router()

router.post(
  '/users',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
  ],
  userController.createUser
)

router.get('/users', userController.getUsers)

module.exports = router
