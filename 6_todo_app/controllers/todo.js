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

const updateTodoFormController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const todo = await Todo.findById(id);

    res.render("update-todo.ejs", { title: "Update todo", todo });
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
    const { id } = req.query;
    res.render("delete-todo.ejs", { title: "Delete todo", id });
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

const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;

    const todo = await Todo.findById(id);

    if (!todo) {
      res.status(500).json({ message: "The todo not found" });
    } else {
      todo.title = title;
      todo.desc = desc;

      await todo.save();

      res.redirect("/");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Todo.findOneAndDelete({_id: id});

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
  updateTodoController,
  deleteTodoController
};
