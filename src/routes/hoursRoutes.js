const { Router } = require('express');
const getHoursByIdUser = require('../controllers/hours/getHoursByIdUser')
const uploadHours = require('../controllers/hours/uploadHours');
const updateHours = require('../controllers/hours/updateHours')
const { verifyToken } = require('../middlewares/tokens');
const onlyAdminOrBelongingToTheUser = require('../middlewares/onlyAdminOrBelongingToTheUser');

const router = Router();

router.get('/', verifyToken, onlyAdminOrBelongingToTheUser, getHoursByIdUser);
router.post('/upload', verifyToken, onlyAdminOrBelongingToTheUser, uploadHours);
router.patch('/update', verifyToken, onlyAdminOrBelongingToTheUser, updateHours);

module.exports = router;