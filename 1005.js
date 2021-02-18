const lines = prompt ('Digite nota A e B: ').split(' ')

const notas = (a , b) => (a*3.5 + b*7.5) / 11

const resultado = lines.map(Number).reduce(notas)

console.log(`MEDIA = ${resultado.toFixed(5)}`)