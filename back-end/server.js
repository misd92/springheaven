const express = require("express");
const cors = require('cors');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use(errorHandler);

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.get('/user1', (req,res) => {
  console.log("sdfihi")
  res.json({name: "user 1"});
})
app.get('/', (req,res) => {
  res.json({name: "sdf"});
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
