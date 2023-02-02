import express, {
    json
} from "express"
import userRouter from "./routers/user.js"
import
authRouter
from './routers/auth.js'

const app = express();
app.use(express.json());


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(8000, () => {
    console.log("BACKEND IS STARTING ON PORT 8000");
    console.log("localhost : 8000");
})