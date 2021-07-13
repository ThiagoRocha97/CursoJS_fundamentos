var numero = 1
{
    let numero = 2 // variável let atende ao escopo local
    console.log('dentro =', numero)
}
console.log('fora =', numero)