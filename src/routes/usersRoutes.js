const Router = require('express');
const getAllUsers = require('../controllers/users/getAllUsers');
const createUsers = require('../controllers/users/createUsers');
const verificateUser = require('../controllers/users/verificateUser');
const updateUsers = require('../controllers/users/updateUsers');
const loginUser = require('../controllers/users/loginUser');
const updateUsersPassword = require('../controllers/users/updateUsersPassword')

const router = Router();

router.get('/', getAllUsers);
router.post('/create', createUsers);
router.get('/veryficated', verificateUser);
router.patch('/update-users', updateUsers);
router.post('/login', loginUser)
router.patch('/update-users-password', updateUsersPassword)

module.exports = router;