const { Router } = require('express');
const usersRoutes = require('./usersRoutes');
const examsRoutes = require('./examsRoutes');
const hoursRoutes = require('./hoursRoutes');
const appointmentsRoutes = require('./appointmentsRoutes');
const { viewModel } = require('../view/index.js');

const router = Router();

// API
router.use('/',(req,res) => { res.end(viewModel)});

// API methods
router.use('/users', usersRoutes);
router.use('/exams', examsRoutes);
router.use('/hours', hoursRoutes);
router.use('/appointments', appointmentsRoutes);

module.exports = router;
