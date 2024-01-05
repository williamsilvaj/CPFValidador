const express = require("express");
const router = express.Router();
const CPF = require("../models/CPFModel.js");

router.post("/validate/:cpf", (request, response) => {
  const { cpf } = request.params;
  const cpfInstance = new CPF(cpf);
  const isCPFValid = cpfInstance.validateCPF();

  response.json({ isCPFValid });
});

module.exports = router;
