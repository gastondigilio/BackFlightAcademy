const { Router } = require('express');
const express = require("express");
const usersRoutes = require('./usersRoutes');
const router = Router();

router.use(express.urlencoded({ extended: true, limit: "50mb" }));
router.use(express.json({ limit: "50mb" }));

router.use('/users', usersRoutes);

module.exports = router;
