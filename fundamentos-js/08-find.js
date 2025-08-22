/*
 O metódo de vetores find() ENCONTRA O PRIEMIRO ELEMENTO que corresponde ao retorno
 de uma função passada como praâmetro
 */

 const numeros = [12, 19, 3, -4, 13, 11, 15, -1, 0]
 const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba', 'maracujá']


 // Encontram o priemiro número negativo no vetor de númros
 console.log('Primeiro número negativo: ', numeros.find(n => n < 0))

 // Encontrando o primeiro número múltiplo de 5
 console.log('Primeiro número múltiplo de 5: ', numeros.find(x => x % 5 === 0))

 // Encontrando o primeiro número maior que 20
 console.log('Primeiro número maior que 20: ', numeros.find(i => i > 20))

 // Encontrando a priemira frut que começ com 'm'
 console.log('Primeira FRUTA começando cin "m": ', frutas.find(f => f.charAt(0) === 'm'))

 // Encontrando a priemria fruta que termina com "m"
 console.log('Primeira fruta terminada com "r": ', frutas.find(f => f.slice(-1) === 'r'))