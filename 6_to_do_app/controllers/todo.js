const Todo = require("../models/Todo");
const moment = require("moment/moment");

const homeController = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.locals.moment = moment; // for date format

    res.render("index.ejs", { title: "List todo", todos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodoFormController = (req, res, next) => {
  try {
    res.render("update-todo.ejs", { title: "Update todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTodoFormController = (req, res, next) => {
  try {
    res.render("add-todo.ejs", { title: "Add todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodoPage = (req, res, next) => {
  try {
    res.render("delete-todo.ejs", { title: "Delete todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTodoController = async (req, res, next) => {
  try {
    const { title, desc } = req.body;

    const newTodo = new Todo({ title, desc });
    await newTodo.save();

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  homeController,
  updateTodoFormController,
  addTodoFormController,
  deleteTodoPage,
  addTodoController,
};
