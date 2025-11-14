const carros = ['Chwvette', 'Fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/*

O metódo includes( ) testa se um determinado elemento existeem um vetor. Retorna true se existir
ou false, caso contrário.
O metódo includes() foi adicionado ao JavaScript apenas em 2016
*/
console.log('Tem Fusca?: ', carros.includes('Fusca'))
console.log('Tem Corcel?: ', carros.includes('Corcel'))
console.log('Tem Belina?: ', carros.includes('Belina'))

/*
 O metódo indxOf() retorna o índice (posção) de um elemtno
  no vetor> caso o contrário não exista, retorna -1.
*/
console.log('Posição do Maverick: ', carros.indexOf('Maverick'))
console.log('Posição do Chevet: ', carros.indexOf('Chevet'))
console.log('Posição do Kombi: ', carros.indexOf('Kombi'))

/*

Usando indexOf para testar a existencia de um elemento no 
vetore ( como se fazia quando ainda não havia o metódo
includes())
*/
console.log('Tem Fusca?', carros.indexOf('Fusca') >=0)

console.log('Tem Corcel?', carros.indexOf('Corcel') >=0)

console.log('Tem Belina?', carros.indexOf('Belina') >=0)