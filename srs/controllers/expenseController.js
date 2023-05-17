const Expense = require("../models/Expense");


const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createExpense = async (req, res) => {
  const { description, amount } = req.body;
  try {
    const expense = await Expense.create({ description, amount });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get an expense by ID
const getExpenseById = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      res.status(404).json({ error: "Expense not found" });
    } else {
      res.json(expense);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update an expense
const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { description, amount } = req.body;
  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      res.status(404).json({ error: "Expense not found" });
    } else {
      expense.description = description;
      expense.amount = amount;
      await expense.save();
      res.json(expense);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete an expense
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      res.status(404).json({ error: "Expense not found" });
    } else {
      await expense.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
