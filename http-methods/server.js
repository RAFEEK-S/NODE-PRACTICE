const express = require("express")
const bodyParser = require("body-parser")
const connectDB = require("./config/dbConfig")
const taskRoutes = require("./routes/taskRoutes")

const app = express();

// middleware

app.use(bodyParser.json());

//connect to MongoDB
connectDB();
//Routes
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
