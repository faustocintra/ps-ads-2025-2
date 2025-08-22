/* Função tradicional com 1 parâmetro e 1 linha de corpo com return */

function quadrado(n){
    return n * n
}
console.log('[TRADI] O quadrado de 7 é', quadrado(7))

/*
FUNÇÃO equivalente, usando a sintaxe arrow function
~> não necessita de chaves 
~> nnão necessita de parêntese em volta do parâmetro
~>  não necessita da plavra 'return'
~> a palav ra- chave "function" é substituída ela flecha
 => LOGO APOS o parâmetro
 ~> a arrow functioin é invocada usadndo o nome da constante que recebe em atribuição
 */


const quadradoA = n => n * n

console.log('[ARROW] O quadrado de 7 é', quadradoA(7))

/* Função tradicioal com maisd de um parâmetri e apenas umas linha com return*/

function calc(a, b, c){
     return a * b + c
}
console.log('[TRADI] O resultado do cálcuylo é', calc (10, 20, 30))

/* Equiavalente em sintaxe a\rrow function
~> quando o número de parâmetro né  DIFERENTE de 1 (igual ao exemplo se tem 3), 
os parêntesdes voltam a ser obrigatórios
*/

 const calcA = (a, b, c) => a * b + c
 console.log('[ARROW] O resultado do cálculo é', calc (10, 20, 30))

/*
 Função tradicional sem, parâmetros e uma linha de corpo com return
 */
function msgErro(){
    return 'ERRO FATAL!'
}
console.log('[TRADI][ MENSAGEM DE ERRO: ', msgErro())

/* Equivalete na sintaxe arrow function
~> parênteses vazi9os devem ser usados para marcar o lugar do parâmetro
*/
const msgErroA = () => "ERRO FATAL!"
console.log('[ARROw][ MENSAGEM DE ERRO: ', msgErroA())

/*  
Função tradicional com um parâmetro e vÀrias linhas de4 corpo 
*/
 function fatorial(x){
    let resultado = 1
    for(let i = x; i > 1; i--) resultado *= i
     return resultado
 }
 console.log('[TRAD] O fatorial de 8 é', fatorialA(8))
  
 
 /*  Equivalete na sintaxe arrow function
 ~> Não há economia de linhas no corpo da função> MESMI ASSIM,
  É COMUM ENCONTRAR ARROW FUNCTION DE VÁRIAS LINHAS EM PROJETOS REACT
 ~> as CHAVES VOLTAM A SER OBRIGATÓRIAS, assim como a palavra-chave
   "return"    
   */
  const fatorialA = x => {
    let resultado = 1
    for(let i = x; i > 1; i--) resultado *= i
    return resultado
  }   
console.log('[ARROW] O fatorial de 8 é', fatorialA(8))
  