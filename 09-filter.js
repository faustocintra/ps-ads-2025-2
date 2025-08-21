/*
 O metódo de vetores find() cria um NOVO VETOR contendo
 apenas os elementos que a\tendam ao critério apresentado
 pela função passada como parâmetro
 */
const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi' , 'maça', 'uva', 'jabuticaba', 'maracujá']

// Cria um novo vetor apenas com os números negativos
console.log('Apenas números negativos', numeros.filter(n => n < 0))

// Cria um novo vetor apenas com números pares
console.log('Apenas números pares', numeros.filter(i % 2 === 0))


// Cria um novo vetor apenas com números maiores que 20
console.log('Apenas números maiorees que 20', numeros.filter(x => x === 20))

// Novo vetor apenas com frutas que começam com "m"
console.log('Apenas fruats começadas em "m"', frutas.filter(el => el.charAt(0) === 'm'))


// Novo vetor apenas com frutas que terminam com "r"
console.log('Apenas fruats começadas em "m"', frutas.filter(fru => fru.slice(-1) === 'r'))