## Como Executar os Exercícios

Este projeto foi desenvolvido utilizando **JavaScript** com o ambiente de execução **Node.js**. Para interagir com os programas, utilizamos a biblioteca `prompt-sync`, que permite a entrada de dados pelo terminal.

Para executar os exercícios, siga os passos abaixo:

1.  **Certifique-se de ter o Node.js instalado:** Se você ainda não tem o Node.js instalado em sua máquina, você pode baixá-lo e instalá-lo a partir do site oficial: [https://nodejs.org/](https://nodejs.org/).

2.  **Clone este repositório:** Se você ainda não clonou o repositório para o seu computador, utilize o seguinte comando no seu terminal (certifique-se de estar no diretório onde deseja salvar o projeto):

    ```bash
    git clone [https://docs.github.com/articles/referencing-and-citing-content](https://docs.github.com/articles/referencing-and-citing-content)
    ```

    *(Substitua `https://docs.github.com/articles/referencing-and-citing-content` pela URL real do seu repositório no GitHub.)*

3.  **Navegue até o diretório do projeto:** Após clonar o repositório, entre na pasta do projeto utilizando o comando:

    ```bash
    cd EXERCICIOS_1
    ```

    *(Assumindo que o nome da sua pasta seja `EXERCICIOS_1`. Se for diferente, ajuste o comando.)*

4.  **Instale a biblioteca `prompt-sync`:** Para que os programas funcionem corretamente, você precisa instalar a biblioteca `prompt-sync`. Utilize o seguinte comando no seu terminal dentro da pasta do projeto:

    ```bash
    npm install prompt-sync
    ```

    Este comando irá baixar e instalar a biblioteca `prompt-sync` e suas dependências.

5.  **Execute os exercícios:** O código de todos os exercícios está no arquivo `exercicios.js`. Para testar um exercício específico, você precisará **descomentar** o bloco de código correspondente a esse exercício e **comentar** os blocos dos outros exercícios dentro do arquivo `exercicios.js`. Você pode fazer isso abrindo o arquivo em um editor de código (como o Visual Studio Code).

    Por exemplo, para executar o **Identificador de Número Par (Exercício 1)**, você removeria as `//` do seguinte bloco:

    ```javascript
    //----------------------------------------------------------------------------------------------------------------
    //IDENTIFICADOR DE NÚMERO PAR 1

    // let numI = Number(prompt('insira um número par ou impar->'))
    // if(numI % 2 === 0){
    //      console.log('É par')
    // }else{
    //      console.log('É impar')
    // }
    ```

    Para ficar assim:

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

    E você se certificaria de que os outros blocos de código dos exercícios estejam comentados (com `//` no início de cada linha).

6.  **Execute o arquivo JavaScript:** Após descomentar o exercício desejado e comentar os outros, execute o arquivo `exercicios.js` utilizando o seguinte comando no seu terminal (dentro da pasta do projeto):

    ```bash
    node exercicios.js
    ```

    O programa será executado e, se o exercício envolver entrada do usuário, o terminal irá solicitar que você insira os dados. O resultado será exibido no próprio terminal.

7.  **Teste os outros exercícios:** Para testar os outros exercícios, repita o passo 5, descomentando o bloco de código do exercício que você quer testar e comentando os demais. Em seguida, execute o arquivo novamente com o comando `node exercicios.js`.
