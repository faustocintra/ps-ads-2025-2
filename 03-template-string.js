const nome = 'Eduarda'
const idade = 20
const cidade = 'Franca/SP'

// Mesclando string com vriáveis usando concatenação

let msg1 = 'Meu nome é ' + nome +  ', tenho' + idade + 'anos  e moro em ' + cidade + '.'
console.log(msg1)


//Mesclando strings e varoiáveis usando termpletes string
//Templete strings são OBRIGATORIAMENTE delimitas por ``
// (acentos graves/backtiks)

const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`
console.log(msg2)

// Dentro de u7ma templete string, não estamos limitas a\ usar apenas váriaveis
// Dentro do símmboloi ${}. Qualquer código JavaScript válido pode ser empregado ali.
console.log
