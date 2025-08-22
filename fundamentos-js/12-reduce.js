/*
reduce() pe um meódo de4 vetores que REDUZ o vetor a um único valor
Para issso, aplica uman função a cda elemento do vetor, a qual
efetua uma opreaão sobrw o elemento e acumula o resultado a cada passada.
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', ' uva', 'jabnuticaba', 'maracujá']

const nums2 = [1, 2, 3, 4, 5, 6]


/*
 Usando reduce() para somar todos os elementos do vetor de números
 A função de callback do reducde(), em sua forma mais simles,
 possui dois parâmetros:
 ~> é o acumulador, que aramazena o resultado das operações
 sobre os elementos aqnteriores
 ~> Corresponde ao elemento que está sendo processado no momento.
 */

 const soma = numeros.reduce((acum, el) => acum + el)
 console.log('Soma de todos os lementoas do vetor "números":', soma)


 // reduce() para multiplicar os elementos de nums2
 const produto = nums2.reduce((a, e) => a * e)
 console.log('Produto de todos os lementoas do vetor "nums2":', produto)

 // Constante o vetor de frutas em uma única string, separando
 // os elemntos por ';' e convertendo para maiúsculos

 const stringFrutas = frutas.reduce((acc, el) => acc.toUpperCase() + '; ' + el.toUpperCase())
 console.log(stringFrutas)
 
console.log('-'.repeat(80))

// Refazendo a soma do vetor númros, mostrando os valores intermediários do acumulador

 const soma2 = numeros.reduce((acum, el) => { console.log(`Acumulador: ${acum}; elementos: ${el}`)
 return acum + el})

console.log('Soma de todos os lementoas do vetor "números":', soma2)

// Refazendo a concatenação das frutas, mostrando os valores
// intermediári0s do acumulador
const strFrutas = frutas.reduce((acc, el) => { console.log(`Acumulador: ${acc}; elementos: ${el}`)
 return acc.toUpperCase() + '; ' + el.toUpperCase()})
console.log(str)