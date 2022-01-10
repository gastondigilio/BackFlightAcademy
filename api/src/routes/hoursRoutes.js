const { Router } = require('express');
const {getHoursById} = require('../controllers/hours/getHoursById')
const { uploadHours } = require('../controllers/hours/uploadHours');
const {updateHours} = require('../controllers/hours/updateHours')

const router = Router();

router.get('/', getHoursById);
router.post('/upload', uploadHours);
router.patch('/update', updateHours);

module.exports = router;