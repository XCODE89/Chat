const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes)
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB connection completed successfully");
}).catch((err) => {
    console.log("Error connecting");
    console.error(err.message);
});

const server = app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT)
})