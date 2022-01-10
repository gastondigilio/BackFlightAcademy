const { Exams } = require('../../db.js');


async function updateExams(req, res, next) {
    const { name, language, url } = req.body;
    try {
        if (name && language && url) {
            const examUpdated = await Exams.update({
                name: name, language: language, url: url

            },
            {
                where: {
                    name: name,
                }
            })
            if (examUpdated.length > 0) {
                return res.status(200).json({ message: "exam updated successfully" })
            } else {
                return res.status(400).json({ message: "the exam was not update" })
            }
        }

    } catch (error) {
        next(error)
    }
}

module.exports = { updateExams }