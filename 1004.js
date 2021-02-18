const lines = prompt ('Entre com dois valores: ').split(' ')

const prod = (a , b) => a * b

const resultado = lines.map(Number).reduce(prod)

console.log(`PROD = ${resultado}`)