const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/config");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
