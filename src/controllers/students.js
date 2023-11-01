const students = require('../services/students');

module.exports.getAllStudents = async (req, res) => {
    
    try {
        const data = await students.getAllStudents();
        res.send(data);
    }

    catch (err) {
        res.status(500).send({ message: err.message });
    }

}

module.exports.getStudentById = async (req, res) => {
    
        try {
            const data = await students.getStudentById(req.params.id);
            res.send(data);
        }
    
        catch (err) {
            res.status(500).send({ message: err.message });
        }
    
    }

module.exports.createStudent = async (req, res) => {
        
        try {
            const data = await students.createStudent(req.body);
            res.send(data);
        }
    
        catch (err) {
            res.status(500).send({ message: err.message });
        }
    
    }

module.exports.deleteStudentById = async (req, res) => {
    
        try {
            const data = await students.deleteStudentById(req.params.id);
            res.send(data);

            
        }
    
        catch (err) {
            res.status(500).send({ message: err.message });
        }
    
    }