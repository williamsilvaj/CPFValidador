# README - Validação de CPF

## Sobre
Este é um serviço simples em Node.js para validar CPFs, organizado com uma arquitetura MVC (Model-View-Controller).

A estrutura básica do projeto segue a separação de responsabilidades comuns ao modelo MVC, onde:
- **Model (Modelo):** Representado pela classe `CPFModel` responsável por realizar a validação do CPF.
- **Controller (Controlador):** Representado pelo arquivo `CPFController.js` que contém a lógica para receber requisições, processá-las usando o modelo e enviar as respostas.

![MVC](https://github.com/williamsilvaj/CPFValidador/assets/119798187/0ab9348c-fd8d-4a97-88d9-2ab6ae19a2e0)


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
```
Você pode fazer uma requisição pela interface abrindo o [index.html](![Screenshot from 2024-01-05 10-12-10](https://github.com/williamsilvaj/CPFValidador/assets/119798187/5e1502dc-8dce-4046-9276-12c5ffd882ec)
):
```bash
xdg-open index.html   # Isso abrirá no navegador padrão
```
Certifique-se de ajustar o caminho da imagem e do arquivo `index.html` conforme a estrutura do seu projeto.

Ou,

Como testar via Requisições JSON
![PostMan](https://github.com/williamsilvaj/CPFValidador/assets/119798187/e5046b32-d5e1-42fd-ba85-12afe5fbc9a9)

Exemplo: http://localhost:8080/api/validate/072.056.010-10

### EndPoint

http://localhost:8080/api/validate/{cpf aqui}
