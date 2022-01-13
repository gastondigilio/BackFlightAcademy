const { Router } = require('express');
const express = require("express");
const usersRoutes = require('./usersRoutes');
const examsRoutes = require('./examsRoutes');
const hoursRoutes = require('./hoursRoutes');
const nextHoursRoutes = require('./nextHoursRoutes');
const router = Router();

router.use(express.urlencoded({ extended: true, limit: "50mb" }));
router.use(express.json({ limit: "50mb" }));

router.use('/users', usersRoutes);
router.use('/exams', examsRoutes);
router.use('/hours', hoursRoutes);
router.use('/nextHours', nextHoursRoutes);

module.exports = router;
