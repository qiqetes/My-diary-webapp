const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv/config");

app.use(express.json());

// Import routes
const userRoute = require("./routes/user");
app.use("/users", userRoute);
const dayRoute = require("./routes/day");
app.use("/days", dayRoute);

// Conect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to the DB!")
);

// Start listening to the port 3000
app.listen(3000, () => {
    console.log("Server running...");
}); 