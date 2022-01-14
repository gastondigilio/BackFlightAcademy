const { Router } = require('express');
const { getAllUsers } = require('../controllers/users/getAllUsers');
const { createUsers } = require('../controllers/users/createUsers');
const { updateUsers } = require('../controllers/users/updateUsers');
const { loginUser } = require('../controllers/users/loginUser');

const router = Router();

router.get('/', getAllUsers);
router.post('/create', createUsers);
router.patch('/update', updateUsers);
router.post('/login', loginUser)

module.exports = router;