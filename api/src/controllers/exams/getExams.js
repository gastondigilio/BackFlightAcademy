const {Exams} = require ('../../db.js');


async function getExams(req,res,next){
    try {
        const allExams = await Exams.findAll()
        if(allExams){
            return res.status(200).json(allExams)
        }else{
            return res.status(400).json({message:"No Tests Found"})
        }
    } catch (error) {
        next(error)
    }
}

module.exports= {getExams}
