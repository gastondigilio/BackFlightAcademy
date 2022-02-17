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
const { verifyTokenAndTransformToId } = require('../middlewares/tokens');
const onlyAdminOrBelongingToTheUser = require('../middlewares/onlyAdminOrBelongingToTheUser');

const router = Router();

router.get('/all', verifyTokenAndTransformToId, verifyAdminOrInstruct, getAllUsers);
router.post('/signup', createUsers);
router.get('/veryficated', verificateUser);
router.get('/signin', signinUser)
router.patch('/update', verifyTokenAndTransformToId, onlyAdminOrBelongingToTheUser, updateUsers);
router.patch('/update-password', verifyTokenAndTransformToId, onlyAdminOrBelongingToTheUser, updateUsersPassword)
router.patch('/change-role', verifyTokenAndTransformToId, verifyAdminOrInstruct, changeUsersRole);
router.delete('/remove', verifyTokenAndTransformToId, onlyAdminOrBelongingToTheUser, deleteUsers)

module.exports = router;