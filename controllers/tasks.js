const getAllTasks = (req, res) => {
  res.send("get All tasks");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({id: req.params.id});
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("deleted Task");
};



module.exports = {
  getAllTasks,
  updateTask,
  createTask,
  deleteTask,
  getTask,
};
