const { Exams } = require('../../db.js');


async function uploadExams(req, res, next) {
    const { name, language, url } = req.body;
    try {
        if (name && language && url) {
            const examCreated = await Exams.create({
                name, language, url

            })
            if (examCreated) {
                return res.status(200).json({ message: "exam created successfully" })
            } else {
                return res.status(400).json({ message: "the exam was not created" })
            }
        }

    } catch (error) {
        next(error)
    }
}

module.exports = { uploadExams }