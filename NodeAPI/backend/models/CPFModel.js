class CPF {
  constructor(cpf) {
    // Expressão regular para remover caracteres que não são dígitos
    this.cpf = cpf.replace(/\D/g, "");
  }

  getCPF() {
    return this.cpf;
  }

  setCPF(cpf) {
    this.cpf = cpf.replace(/\D/g, "");
  }

  validateCPF() {
    if (this.cpf.toString().length !== 11 || /^(\d)\1{10}$/.test(this.cpf)) {
      return false;
    }

    var result = true;
    [9, 10].forEach((j) => {
      var soma = 0,
        r;
      this.cpf
        .split(/(?=)/)
        .splice(0, j)
        .forEach((e, i) => {
          soma += parseInt(e) * (j + 2 - (i + 1));
        });
      r = soma % 11;
      r = r < 2 ? 0 : 11 - r;
      if (r != this.cpf.substring(j, j + 1)) {
        result = false;
      }
    });

    return result;
  }
}

module.exports = CPF;
