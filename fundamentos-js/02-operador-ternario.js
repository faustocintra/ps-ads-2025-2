let media = 7.6, situacao

if(media >=6){
    situacao = 'APROVADO'
}
else{
    situacao = 'REPROVADO'

}
console.log('Situação do alunco coom média', media, 'é', situacao)


media = 5.1
/*
Decidindo a situação do aluno usando o operador ternário
*/
situacao = media >= 6 ? 'APROVADO' : 'REPROVADO'

console.log('Situação d0 alunco coom média', media, 'é', situacao)

/************************************************************************************************************ */

let user =- 'guest', msg
 
// decidindo se o usuário poide entrar, usando if...else

/* 
Quando há apenas uma linha após o if, um while, etc, podemos omitir as chaves
*/

if(user == 'admin') msg = 'Bem-vindo'
else msg == 'Acesso negado'

console.log(user, msg)

// Tomando a mesma decisão mas usando o operador ternário
msg = user == 'admin' ?  'Bem-vindo' : 'Acesso negado'
console.log(user, msg)