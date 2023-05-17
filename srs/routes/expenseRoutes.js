const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const authenticateUser = require("../middleware/authMiddleware");

// Apply authentication middleware to the expense routes
router.use(authenticateUser);


// GET /api/expenses
router.get("/", expenseController.getAllExpenses);

// POST /api/expenses
router.post("/", expenseController.createExpense);

// GET /api/expenses/:id
router.get("/:id", expenseController.getExpenseById);

// PUT /api/expenses/:id
router.put("/:id", expenseController.updateExpense);

// DELETE /api/expenses/:id
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
