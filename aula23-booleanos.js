let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // uma exclamação mantém o valor negativo, duas mantém o valor verdadeiro

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 33))
console.log(!!(isAtivo = Infinity))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // se pelo menos um valor for verdadeiro o resultado mostra true
console.log('' || null || 0 || 'epa') // sem as duas exclamações ele imprime o valor verdadeiro 
console.log('' || null || 0 || 123 || 'epa') // se tiver dois valores verdadeiros ele imprime o que vier primeiro

let nome = ''
console.log(nome || 'Desconhecido')