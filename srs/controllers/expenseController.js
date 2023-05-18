const Expense = require("../models/Expense");

const getAllExpenses = async (req, res) => {
  try {
    const { userId } = req.user;
    const expenses = await Expense.findAll({
      where: {
        userId,
      },
    });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createExpense = async (req, res) => {
  const { userId } = req.user;
  const { description, amount } = req.body;
  try {
    const expense = await Expense.create({ description, amount, userId });
    res.status(201).json(expense);
  } catch (error) {
    console.log("error creatting expense", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get an expense by ID
const getExpenseById = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  try {
    const expense = await Expense.findOne({
      where: {
        id,
        userId,
      },
    });
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
  const { userId } = req.user;
  const { id } = req.params;
  const { description, amount } = req.body;
  try {
    const expense = await Expense.findOne({
      where: {
        id,
        userId,
      },
    });
    if (!expense) {
      res.status(404).json({ error: "Expense not found" });
    } else {
      await expense.update({
        description,
        amount,
      });
      // expense.description = description;
      // expense.amount = amount;
      // await expense.save();
      return res.status(200).json({ expense });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete an expense
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  try {
    const expense = await Expense.findOne({
      where: {
        id,
        userId,
      },
    });
    if (!expense) {
      res.status(404).json({ error: "Expense not found" });
    } else {
      await expense.destroy();
      return res.status(200).json({ message: "Expense deleted successfully" });
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
