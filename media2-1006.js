const lines = prompt ('Digite as três notas: ').split(' ')

// const a = parseFloat(lines[0])
// const b = parseFloat(lines[1])
// const c = parseFloat(lines[2])

const [a,b,c] = lines.map(Number)

const media = (a*2 + b*3 + c*5) / 10


console.log(`MEDIA = ${media.toFixed(1)}`)