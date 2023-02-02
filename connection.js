import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "db_from",
    password: "12345678"
})