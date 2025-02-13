const express = require('express')

const viewController = require('../controllers/viewController')
const authController = require('../controllers/authController')

const router = express.Router()

router.route('/login').get(viewController.login)
router.route('/signup').get(viewController.signup)
router.route('/register/:inviteToken').get(viewController.register)
router.route('/')
    .get(
        authController.isLoggedIn,
        authController.hasCompany,
        viewController.homepage)
router.route('/parts')
    .get(
        authController.isLoggedIn,
        authController.hasCompany,
        viewController.parts)
router.route('/createCompany')
    .get(
        authController.isLoggedIn,
        authController.restrictTo('admin'),
        viewController.createCompany,
    )
router.route('/admin')
    .get(
        authController.isLoggedIn,
        authController.hasCompany,
        authController.restrictTo('admin'),
        viewController.admin,
    )

router.route('/year/:id')
    .get(
        authController.isLoggedIn,
        authController.hasCompany,
        viewController.yearPage
    )

module.exports = router