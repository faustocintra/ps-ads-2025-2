/* 
 O metódo map() cria um novo vetor no qual cad elemento
 corresponde a uma transformação do elemento do vetor original.
 A trasnformação é contolada pela funação passada como parâmetro.
 O nvo vetor gerado por map() terá sempre terá sempre o mesmo número de 
 elementos do vetor original.
 */

 const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
 const frutas = ['laranja', 'abacaxi', 'maça', ' uva', 'jabnuticaba', 'maracujá']


 // Gerando um novo vetor em cada elemeto corresponde ao valor
 // do elemento original elevado ao quadrado
 const quadrados = numeros.map(n => n ** 2)
 console.log('Vetor com números aoquadrado: ', quadrados)



 // map() que transforma os elementos do vetor original em itens
 // de lista para uso em pagina HTML (aplicação frequente em // React)

 const itensLista = frutas.map(f => `<li>${f}<\li>`)
 console.log('Vetor com itens da lista: ', itensLista)

 console.log('-'.repeat(80))

 console.log('<h1.FRUTAS ENCONTADAS NO BRASIL<\h1>')
 console.log('<ul>')
 for(const item of itensLista) console.log(' ',item)
 console.log('</ul>')
