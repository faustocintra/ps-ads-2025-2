// Alguns DADOS DE UM USUÁRIO
const fullname = 'Jonicleisson Junqueira Júnior'
const username = 'junin'
const group = 'alunos'

//   CRIANDO UM OBJETO A PARTIR DAS VARIÁVIES ACIMS
const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)

/*
 Quando o nome das propiedades do objeto é idêntico á da 
 variável que lhe dará o valor, é possível usar a sintaxe
 chamda PORPIEDADE ABREVIADA,  que permite bão repetir
 os nomes das variávuis á frente do nome das propiedades
*/


 const user2 = {
    fullname,
    username,
    group
 }

 // Um objeto pode mesclar PROPIEDADES ABREVIADAS E NÃO ABREVIADS

 const user3 ={
    fullname,
    username,
    password: 'TodoPoderosoTimao',
    group,
    lastlogin: '2025-08-14 10:47:23'
 }
 console.log(user3)

 //DEPURANDO USANDO PROPIEDADES ABREVIADAS

 const x = 10, y = 'batata'

 /*
 Exibindo o valor das dus variáveis com console.log()
 Observe que os valores serão mostrados, mas a saída não
 informa quais as variávies de onde provêm os valores
 */
console.log(x,y )

/*
 Saída melhorada: passsa\ndo um objeto formado pelas variávies
 como propiedades abreviadas para o console.log(), conseguimos 
 identificar de onde vêm os valores
 */
console.log({x, y})