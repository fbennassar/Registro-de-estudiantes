const express = require('express');
const router = express.Router();

const students = require('../controllers/students');

router.get('/', students.getAllStudents);

router.get('/:id', students.getStudentById);

router.post('/', students.createStudent);

router.delete('/:id', students.deleteStudentById);

router.put('/:id', students.updateStudentById);

module.exports = router;