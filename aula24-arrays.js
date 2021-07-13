const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // adiciona um elemento no array
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') // push adiciona novos elementos no aray
console.log(valores)

console.log(valores.pop()) // pop retira o último elemento do array caso nada seja indicado 
delete valores[0] // exclui o elemento indicado
console.log(valores)

console.log(typeof valores)