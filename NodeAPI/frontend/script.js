const cpfForm = document.getElementById("cpfForm");
const cpfInput = document.getElementById("cpfInput");
const resultP = document.getElementById("result");

cpfForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cpf = cpfInput.value;

  fetch(`http://localhost:8080/api/validate/${cpf}`, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      if (data.isCPFValid) {
        resultP.textContent = "✅ CPF válido!";
      } else {
        resultP.textContent = "❌ CPF inválido.";
      }
    })
    .catch((error) => {
      console.error(error);
      resultP.textContent = "Ocorreu um erro 🤔";
    });
});
