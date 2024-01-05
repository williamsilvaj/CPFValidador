const express = require("express");
const cors = require('cors');
const cpfController = require("./backend/controllers/CPFController.js");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/api", cpfController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
