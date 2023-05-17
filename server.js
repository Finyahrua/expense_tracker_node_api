const express = require("express");
const expenseRoutes = require("./srs/routes/expenseRoutes");
const authRoutes = require("./srs/routes/authRoutes");
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

const port = 3000;


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
