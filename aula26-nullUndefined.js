let valor // não inicializada 
console.log(valor)

valor = null // ausência de valor, não aponta pra nenhum objeto na memória
console.log(valor)
// console.log(valor.toString()) ERRO! não se pode ler a propriedade toString de um nulo

const produto = {}
console.log(produto.preco) // como o produto foi definido eu posso verificar o preço desse produto 
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)