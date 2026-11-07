import pool from '../config/db.js';

//read
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM students");
    return rows;
}