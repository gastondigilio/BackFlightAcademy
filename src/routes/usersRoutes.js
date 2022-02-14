const Router = require('express');
const getAllUsers = require('../controllers/users/getAllUsers');
const createUsers = require('../controllers/users/createUsers');
const verificateUser = require('../controllers/users/verificateUser');
const updateUsers = require('../controllers/users/updateUsers');
const signinUser = require('../controllers/users/signinUser');
const updateUsersPassword = require('../controllers/users/updateUsersPassword');
const verifyAdmin = require('../middlewares/verifyAdmin');
const { verifyToken } = require('../middlewares/tokens');
const checkUsers = require('../middlewares/checkUsers');

const router = Router();

router.get('/all', verifyAdmin, getAllUsers);
router.post('/signup', createUsers);
router.get('/veryficated', verificateUser);
router.get('/signin', signinUser)
router.patch('/update-users', verifyToken, checkUsers, updateUsers);
router.patch('/update-users-password', verifyToken, checkUsers, updateUsersPassword)

module.exports = router;