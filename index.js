import express from "express";
import mongoose from "mongoose";
import routeNotif from "./routes/index.js";

const app = express()
const port = 3030

mongoose.connect("mongodb://localhost:27017/react_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Database Conected"));

app.use(express.json());
app.use('/notification', routeNotif);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})