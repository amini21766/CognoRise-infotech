const express = require("express");
const tasksRouter = require("./routes/tasks");

const app = express();
const port = 4000;

// middleware
app.use(express.json());


// the default route for testing
app.get("/hello", (req, res) => {
  res.send("Task Management API.");
});

// All route of the API
app.use("/api/v1/tasks", tasksRouter);

// listener
app.listen(port, console.log(`The server is running on port ${port}...`));
