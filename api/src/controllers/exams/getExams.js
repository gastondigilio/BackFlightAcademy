
const {Exams} = require ('../../db.js');


async function getExams(req,res,next){
    const{ name, lenguaje, url} = req.body;
    try {
        if(name && lenguaje && url ){
            const examCreated  = await Exams.create({
                name, lenguaje, url

            })
        }
       
        if(examCreated){
            return res.status(200).json({message:"exam created successfully"})
        }else{
            return res.status(400).json({message:"the exam was not created"})
        }
    } catch (error) {
        next(error)
    }
}

module.exports= {getExams}