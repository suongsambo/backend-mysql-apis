import express from "express"
const router = express.Router();
import {
    getUser
} from "../controller/user.js";


// router.get("find:userID", getUser)
router.get('/ts', function (req, res) {
    res.send("Rendering file")
})


export default router