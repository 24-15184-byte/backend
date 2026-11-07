import * as studentService from '../services/studentService.js';

export const fetchAllStudent = async (req, res) => {
    try {
        const students = await studentService.fetchAllStudent();
        res.status(200).json(students);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
};