const lines = prompt ('Entre com o valor do raio: ').split(' ')

const pi = 3.14159

const raio = parseFloat(lines[0])

const A = pi * (raio ** 2)

console.log(`A=${A.toFixed(4)}`)
