const { Router } = require('express');
const {getNextHoursByUserId} = require('../controllers/nextHours/getNextHours');
const {uploadNextHours} = require('../controllers/nextHours/uploadNextHours');
const {updateNextHours} = require('../controllers/nextHours/updateNextHours');

const router = Router();

router.get('/', getNextHoursByUserId);
router.post('/upload', uploadNextHours);
router.patch('/update', updateNextHours);

module.exports = router;