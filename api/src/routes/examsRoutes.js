const { Router } = require('express');
const { getExams } = require('../controllers/exams/getExams');
const { uploadExams } = require('../controllers/exams/uploadExams');
const {updateExams } = require('../controllers/exams/updateExams')
// const { updateUsers } = require('../controllers/users/updateUsers');

const router = Router();

router.get('/', getExams);
// router.post('/create', createUsers);
router.post('/upload', uploadExams);
router.patch('/update', updateExams);

module.exports = router;