/*
 calcArea() é uma função quie calcula a área de uma figura
 geométrica plana, dados a base, altura e o tipo da forma
 */

 // Se a função for chamada com apenas parâmetros, o terceiro, om itido, será interpretado com "R"
 function calcArea(base, altura, tipo){
    switch(tipo){
        case 'R ': // Retângulo
        return base * altura
        case 'T ': // Triângulo
        return base * altura / 2
        case 'E ': // elipise/cículo
        return (base / 2 * altura) * (altura / 2) * Math.PI     
        default: // Formas inválidas/ desconhecidas
        return undefined



        
    }
 }

 console.log(`Área triângulo 10x30: ${calcArea(10, 30, 'T')}`)
 console.log(`Área elispe (círculo) 7,5x7,5: ${calcArea(7.5, 7.5, 'E')}`)
 console.log(`Área retângulo 12,8x15,5: ${calcArea(12.8, 15.53, 'R')}`)
 console.log(`Área forma inválida 8x17: ${calcArea(8, 17, 'H')}`)


 // cHAMNDO A FUNÇÃO COM APENSA DOIS PARÂMETROS
 console.log(`Área retângulo 20x40: ${calcArea(20,40)}`)

 /*
 REGRAS PARA O USO DE PARÂMETROS PREDEFINIDOS
 1) O parâmetro predefinido deve vir sempre POR ÙLTIMO
 2) Pode haver mais de um parâmetro predefinido, mas eles devem ser 
 SEMPRE OS ÚLTIMOS
 */
 