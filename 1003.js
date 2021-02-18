const lines = prompt ('Entre com os valores: ').split(' ')

const [a , b] = lines.map(Number)

const soma = a + b

console.log(`SOMA = ${soma}`)