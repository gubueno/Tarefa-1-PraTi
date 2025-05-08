const prompt = require('prompt-sync') ()

//----------------------------------------------------------------------------------------------------------------
//IDENTIFICADOR DE NÚMERO PAR 1

// let numI = Number(prompt('insira um número par ou impar->'))
// if(numI % 2 === 0){
//     console.log('É par')
// }else{
//     console.log('É impar')
// }

//----------------------------------------------------------------------------------------------------------------
//CLASSIFICADOR DE IDADE 2

// let idade = Number(prompt('insira uma idade->'))

// if(idade <= 11){
//     console.log('criança')
// }
// else if(idade <=17 ){
//     console.log('adolescente')
// }
// else if(idade <=59){
//     console.log('adulto')
// }
// else{
//     console.log('idoso')
// }

//----------------------------------------------------------------------------------------------------------------
//AVALIAÇÃO DE NOTA 3

// let nota = Number(prompt('insira nota da prova 0 a 10->'))

// if(nota >5){
//     console.log('aprovado!')
// }
// else{
//     console.log('recuperação')
// }

//----------------------------------------------------------------------------------------------------------------
//MENU INTERATIVO 4

// let opcoes = Number(prompt(`ESCOLHA UMA OPÇÃO
//     Opção 1 -> Biscoito
//     Opção 2 -> Bolacha
//     Opção 3 -> Sair
    
//     Escola uma opção ->`))

// console.log(opcoes)

// switch(opcoes){
//     case 1:
//         console.log('Você escolheu Biscoito')
//         break;
//     case 2:
//         console.log('Você escolheu Bolacha')
//         break;
//     case 3:
//         console.log('Desconectando')
//         break;
//     case 4:
//         console.log('Você escolheu Cookie')
//         default:
//         break;

// }

//----------------------------------------------------------------------------------------------------------------
//ÍNDICE DE MASSA CORPORAL IMC 5

// let peso = Number(prompt('Peso->'))
// let altura = Number(prompt('Altura->'))
// let imc = peso / (altura*altura)

// if(imc < 18.5){
//     console.log('Baixo peso')
// }
// else if(imc <= 24.9){
//     console.log('Peso normal')
// }
// else if(imc <= 29.9){
//     console.log('Sobrepeso')
// }
// else{
//     console.log('Obesidade')
// }

//----------------------------------------------------------------------------------------------------------------
//IDENTIFICADOR DE TRIANGULOS 6

// let a = Number(prompt('Lado A do triângulo->'))
// let b = Number(prompt('Lado B do triângulo->'))
// let c = Number(prompt('Lado C do triângulo->'))

// if(a <= 0){
//     console.log('não é um triângulo')
// }
// else if(b <= 0){
//     console.log('não é um triângulo')
// }
// else if(c <= 0){
//     console.log('não é um triângulo')
// }
// else if((a === b) && (b === c)){
//     console.log('triângulo eqüilátero')
// }
// else if((a === b) || (a === c) || (b === c)){
//     console.log('triângulo isósceles')
// }
// else if((a != b) && (b != c)){
//     console.log('triângulo escaleno')
// }
// else{
//     console.log('ERRO:/')
// }

//----------------------------------------------------------------------------------------------------------------
//COMPRA DE MAÇÃS 7

// let valorInteiro = 0.30
// let valorDesconto = 0.25
// let maças = Number(prompt(`Compre Maçãs
//     | Valor das maçãs |
//     V                 V
//     Menos de uma duzia = R$ 0,30
//     A partir de uma duzia = R$ 0,25
    
//     Quantas deseja compar? ->`))

// if(maças >= 12){
//     console.log(`O valor da sua compra foi R$ ${maças * valorDesconto}`)
// }
// else if(maças <= 0){
//     console.log('Você não comprou maçãs')
// }
// else if(maças < 12){
//     console.log(`O valor da sua compra foi R$ ${maças * valorInteiro}`)
// }
// else{
//     console.log('ERRO:/')
// }

//----------------------------------------------------------------------------------------------------------------
//ORDEM CRSCENTE 8

// let valor1 = Number(prompt('insira valor 1->'))
// let valor2 = Number(prompt('insira valor 2->'))

// if(valor1 < valor2){
//     console.log(valor1, valor2)
// }
// else{
//     console.log(valor2, valor1)
// }

//----------------------------------------------------------------------------------------------------------------
//CONTAGEM REGRESSIVA 9

// for(let i = 10; i > 0; i--){
//     console.log(i)
// }

//----------------------------------------------------------------------------------------------------------------
//NÚMERO INTEIRO REPETIÇÃO 10

// let numero = Number(prompt('insira um número inteiro->'))
// let vezes = 10

// for(let i = 0; i < vezes; i++){
//     console.log(numero)
// }

//----------------------------------------------------------------------------------------------------------------
//SOMA TOTAL DE 5 NÚMEROS 11

// let valor = []
// let soma = 0

// for (let i = 0; i < 5; i++){
//     let numero = Number(prompt('insira os valores que deseja somar->'))
//     valor.push(numero);
// }

// for(let i = 0; i < valor.length; i++){
//     soma+=valor[i]
// }

// console.log(soma)

//----------------------------------------------------------------------------------------------------------------
//TABUADA 12

// let valor = Number(prompt('insira o numero da tabuada->'))
// let i = 0

// while(i < 10){
//     i++
//     console.log(valor, 'X', i, '=', valor*i)
// }

//----------------------------------------------------------------------------------------------------------------
//MEDIA ARITIMETICA 13

// let valor = null
// let soma = 0
// let numero = 0

// while(valor != 0){
//     valor = Number(prompt('insira numeros decimais para calcular a média após insira zero para finalizar->'))
//     soma+=valor
//     numero++
// }

// let media = soma/(numero-1)

// if(isNaN(media)){
//     console.log('ERRO, use "." em vez de ","')
// }else{
//     console.log('Média:', media)
// }

//----------------------------------------------------------------------------------------------------------------
//FATORIAL 14

// let valor = Number(prompt('insira o valor que deseja ver o fatorial->'))
// let resultado = 1

// for(let i = valor; i > 0; i--){
//     resultado *= i;
// }

// console.log(resultado)

//----------------------------------------------------------------------------------------------------------------
//SEQUENCIA FIBONACCI 15

// let valor = 0
// let valor2 = 1

// for(let i = 0; i < 10; i++){
//     console.log(valor)

//     let fibonacci = valor + valor2
//     valor = valor2
//     valor2 = fibonacci
// }