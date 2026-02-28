const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes")
require("dotenv").config();

// connect to mongodb:
connectDB();
app.use(bodyParser.json());
// connect routes:

app.use("/api/users",authRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});
