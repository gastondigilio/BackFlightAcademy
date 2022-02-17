const { Router } = require('express');
const getHoursByIdUser = require('../controllers/hours/getHoursByIdUser')
const uploadHours = require('../controllers/hours/uploadHours');
const updateHours = require('../controllers/hours/updateHours')
const { verifyTokenAndTransformToId } = require('../middlewares/tokens');
const onlyAdminOrBelongingToTheUser = require('../middlewares/onlyAdminOrBelongingToTheUser');

const router = Router();

router.get('/', verifyTokenAndTransformToId, getHoursByIdUser);
router.post('/upload', verifyTokenAndTransformToId, onlyAdminOrBelongingToTheUser, uploadHours);
router.patch('/update', verifyTokenAndTransformToId, onlyAdminOrBelongingToTheUser, updateHours);

module.exports = router;