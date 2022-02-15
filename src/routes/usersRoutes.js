const Router = require('express');
const getAllUsers = require('../controllers/users/getAllUsers');
const createUsers = require('../controllers/users/createUsers');
const verificateUser = require('../controllers/users/verificateUser');
const updateUsers = require('../controllers/users/updateUsers');
const signinUser = require('../controllers/users/signinUser');
const updateUsersPassword = require('../controllers/users/updateUsersPassword');
const changeUsersRole = require('../controllers/users/changeUsersRole');
const deleteUsers = require('../controllers/users/deleteUsers');
const verifyAdminOrInstruct = require('../middlewares/verifyAdminOrInstruct');
const { verifyToken } = require('../middlewares/tokens');
const checkUsers = require('../middlewares/checkUsers');

const router = Router();

router.get('/all', verifyToken, verifyAdminOrInstruct, getAllUsers);
router.post('/signup', createUsers);
router.get('/veryficated', verificateUser);
router.get('/signin', signinUser)
router.patch('/update', verifyToken, checkUsers, updateUsers);
router.patch('/update-password', verifyToken, checkUsers, updateUsersPassword)
router.patch('/change-role', verifyToken, verifyAdminOrInstruct, changeUsersRole);
router.delete('/remove', verifyToken, checkUsers, deleteUsers)

module.exports = router;