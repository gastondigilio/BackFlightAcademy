const { Router } = require('express');
const getHoursByIdUser = require('../controllers/hours/getHoursByIdUser')
const uploadHours = require('../controllers/hours/uploadHours');
const updateHours = require('../controllers/hours/updateHours')
const { verifyTokenAndTransformToId } = require('../middlewares/tokens');
const verifyAdminOrInstruct = require('../middlewares/verifyAdminOrInstruct');

const router = Router();

router.get('/', verifyTokenAndTransformToId, getHoursByIdUser);
router.post('/upload', verifyTokenAndTransformToId, verifyAdminOrInstruct, uploadHours);
router.patch('/update', verifyTokenAndTransformToId, verifyAdminOrInstruct, updateHours);

module.exports = router;