import express from 'express';
import {
    login,
    register,
    logout
} from "../controller/auth.js"
const router = express.Router();

router.get("/login", login)
router.get("/register", register)
router.get("/logout", logout)


export default router