const lines=prompt('Entre com os valores: ').split(' ');


// const a = parseInt(lines[0])
// const b = parseInt(lines[1])

// desestruturação

const [a , b] = lines.map(Number)

const x = a + b

console.log(`X = ${x}`)

