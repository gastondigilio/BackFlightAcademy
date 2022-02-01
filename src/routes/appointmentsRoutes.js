const { Router } = require('express');
const {getAppointmentsByUserId} = require('../controllers/appointments/getAppointments');
const {uploadAppointments} = require('../controllers/appointments/uploadAppointments');
const {updateAppointments} = require('../controllers/appointments/udpateAppointments');

const router = Router();

router.get('/', getAppointmentsByUserId);
router.post('/upload', uploadAppointments);
router.patch('/update', updateAppointments);

module.exports = router;
