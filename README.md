# README - Validação de CPF

## Sobre
Este é um serviço simples em Node.js para validar CPFs, organizado com uma arquitetura MVC (Model-View-Controller).

A estrutura básica do projeto segue a separação de responsabilidades comuns ao modelo MVC, onde:
- **Model (Modelo):** Representado pela classe `CPFModel` responsável por realizar a validação do CPF.
- **Controller (Controlador):** Representado pelo arquivo `CPFController.js` que contém a lógica para receber requisições, processá-las usando o modelo e enviar as respostas.


### Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em seu ambiente.

### Instalação de Dependências
1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repo.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd NodeAPI
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

### Inicializando o Serviço
Execute o seguinte comando para iniciar o servidor:
```bash
node app.js

Você pode fazer uma requisição pela interface abrindo o index.html
xdg-open index.html   # Isso abrirá no navegador padrão

![image](https://github.com/williamsilvaj/CPFValidador/assets/119798187/998cb712-526b-4de9-97fa-f15ca9f18496)


Ou,

Como testar via Requisições JSON

Exemplo: http://localhost:8080/api/validate/072.056.010-10
![image](https://github.com/williamsilvaj/CPFValidador/assets/119798187/88547e04-3bd8-45ca-bacb-e1db75d2c5a7)

