const fs = require('fs');
const path = require('path');

const students_data = require('./../models/database.json');

exports.getAllStudents = async () => {
    return students_data;
}

exports.getStudentById = async (id) => {
    const student = students_data.find((student) => student.id === id);

    if (!student) {
        throw new Error('Student not found');
    }

    return student;
}

exports.createStudent = async (data) => {
    const { firstName, lastName, id, gender, dayOfBirth, monthOfBirth, yearOfBirth } = data;
    const notes = data.notes.split(',');
    
    
    var sum = 0;
    var note = 0;
    
    for (var i = 0; i < notes.length; i++) {
        note = Number(notes[i]);
        sum += note;

    }

    var average = sum / notes.length;  
    function calculateAge(birthdate) {
        var birthDate = new Date(birthdate);
        var currentDate = new Date();
        
        var age = currentDate.getFullYear() - birthDate.getFullYear();
        var month = currentDate.getMonth() - birthDate.getMonth();
        
        if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }


    const newStudent = {
        firstName,
        lastName,
        id,
        gender,
        dayOfBirth,
        monthOfBirth,
        yearOfBirth,
        age: calculateAge(`${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`),
        notes,
        average
    };

    students_data.push(newStudent);

    fs.writeFileSync(path.join(__dirname, '../models/database.json'), JSON.stringify(students_data, null, 2));

    return newStudent;
}

exports.deleteStudentById = async (id) => {
    const studentIndex = students_data.findIndex((student) => student.id === id);

    if (studentIndex === -1) {
        throw new Error('Student not found');
    }

    const student = students_data[studentIndex];

    students_data.splice(studentIndex, 1);

    fs.writeFileSync(path.join(__dirname, '../models/database.json'), JSON.stringify(students_data, null, 2));

    return student;
}