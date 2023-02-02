import {
    db
} from "../connection.js";
import bcrypt from "bcrypt"

export const login = (req, res) => {

}

export const register = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [body.res.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User already exits")
    })

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);


    const sql = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)"

    const values = [
        req.body.username,
        req.body.email,
        hashedPassword,
    ]

    db.query(sql, [values], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(200).json("Create user success")
    })

}
export const logout = (req, res) => {

}