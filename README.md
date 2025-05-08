# Tarefa-1-PraTi: Exercícios de Programação Básica em JavaScript (Node.js)

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
</p>

Este repositório contém a resolução de uma série de exercícios de programação básica implementados em **JavaScript** utilizando o ambiente de execução **Node.js**. Para facilitar a interação nos exercícios que requerem entrada de dados, a biblioteca `prompt-sync` foi utilizada.

## 🚀 Como Executar os Desafios

Siga estes passos simples para rodar os exercícios na sua máquina:

1.  **Pré-requisito:** Certifique-se de ter o **Node.js** instalado. Caso contrário, você pode baixá-lo aqui: [https://nodejs.org/](https://nodejs.org/).

2.  **Clone o Repositório:** No seu terminal, navegue até o diretório onde você deseja salvar este projeto e execute o seguinte comando:

    ```bash
    git clone [https://github.com/gubueno/Tarefa-1-PraTi.git](https://github.com/gubueno/Tarefa-1-PraTi.git)
    ```

3.  **Entre na Pasta do Projeto:** Acesse o diretório do repositório clonado:

    ```bash
    cd Tarefa-1-PraTi
    ```

4.  **Instale as Dependências:** Para que a biblioteca `prompt-sync` funcione, execute o seguinte comando para instalar as dependências do projeto:

    ```bash
    npm install
    ```

5.  **Execute um Exercício Específico:**
    O código de todos os exercícios está concentrado no arquivo `exercicios.js`. Para rodar um exercício em particular:
    * Abra o arquivo `exercicios.js` no seu editor de código.
    * **Descomente** (remova as `//`) o bloco de código correspondente ao exercício que você quer testar.
    * **Comente** (adicione `//` no início de cada linha) os blocos de código dos outros exercícios para evitar que sejam executados ao mesmo tempo.

    **Exemplo:** Para executar o **Identificador de Número Par (Exercício 1)**, deixe apenas este bloco descomentado:

    ```javascript
    //----------------------------------------------------------------------------------------------------------------
    //IDENTIFICADOR DE NÚMERO PAR 1

    let numI = Number(prompt('insira um número par ou impar->'))
    if(numI % 2 === 0){
         console.log('É par')
    }else{
         console.log('É impar')
    }
    ```

6.  **Rode o Código:** Com o exercício desejado descomentado, execute o arquivo `exercicios.js` no seu terminal:

    ```bash
    node exercicios.js
    ```

    O programa será executado e, se o exercício pedir alguma entrada (como um número ou uma idade), o terminal irá solicitar que você a digite. A saída do programa será exibida no terminal.

7.  **Explore os Outros Desafios:** Para testar os outros exercícios, repita o passo 5, descomentando o bloco do exercício que você quer ver em ação e comentando os demais. Em seguida, execute o arquivo novamente com `node exercicios.js`.

## 🛠️ Tecnologias Utilizadas

* **JavaScript**
* **Node.js**
* **`prompt-sync`**: Para interação com o usuário através do terminal.

## 📜 Lista de Exercícios

1.  Identificador de Número Par
2.  Classificador de Idade
3.  Avaliação de Nota
4.  Menu Interativo
5.  Cálculo de IMC
6.  Identificador de Triângulos
7.  Compra de Maçãs
8.  Ordem Crescente
9.  Contagem Regressiva
10. Repetição de Número
11. Soma de 5 Números
12. Tabuada
13. Média Aritmética
14. Fatorial
15. Sequência de Fibonacci

Sinta-se à vontade para explorar o código e executar cada um dos desafios! 😊
