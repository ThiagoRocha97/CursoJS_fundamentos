const escola = 'Cod3r'

console.log(escola.charAt(4)) // mostra o que tem na posição 4
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) // mostra o código do caractere 3 
console.log(escola.indexOf('3')) // mostra em qual posição tem o número 3 

console.log(escola.substring(1)) // mostra do caractere na posição 1 até o final 
console.log(escola.substring(0, 3)) // mostra do caractere na posição 0 até a 2 excluindo o 3 

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e')) // troca o digito que estiver na posição indicada pela letra indicada
console.log(escola.replace(/\w/g, 'e')) // substitui todas as letras e números pela letra indicada
console.log(escola.replace(/\w/, 'e')) // substitui só a primiera letra 
console.log(escola.replace(/\d/, 'e')) // troca somente os números pela letra indicada 

console.log('Ana, Maria, Pedro'.split(',')) // o split quebra a string em um array