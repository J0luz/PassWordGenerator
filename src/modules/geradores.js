const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;<>~^{}[]?/@#%&*()!`´|+='.split('')
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, Mai, Min, Num, Simb) {
  const senhaArray = []
  qtd = Number(qtd)
  for (let i = 0; i < qtd; i++) {
    Mai && senhaArray.push(geraMaiuscula())
    Min && senhaArray.push(geraMinuscula())
    Num && senhaArray.push(geraNumero())
    Simb && senhaArray.push(geraSimbolo())
  }
  return senhaArray.join('').slice(0, qtd)
}
geraSenha(5, true, true, true, true)
console.log(geraSimbolo())
