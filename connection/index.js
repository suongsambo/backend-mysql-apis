import mysql from 'mysql'

export const db = mysql.createConnection({
    database: "db_from_report",
    host: "localhost",
    user: "root",
    password: "12345678"
})