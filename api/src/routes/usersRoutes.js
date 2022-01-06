const { Router } = require('express');
const { getAllUsers } = require('../controllers/users/getAllUsers');
const { createUsers } = require('../controllers/users/createUsers');
const { updateUsers } = require('../controllers/users/updateUsers');

const router = Router();

router.get('/', getAllUsers);
router.post('/create', createUsers);
router.patch('/update', updateUsers);

module.exports = router;