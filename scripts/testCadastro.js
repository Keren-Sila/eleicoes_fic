import {Eleicao} from '../src/dominio/Eleicao.js'

eleicao.cadrastrar("Keren", 23)
eleicao.cadrastrar("João", 45)
eleicao.cadrastrar("Maria", 67)

console.log(eleicao.listarCandidatos())

eleicao.votar(44)
eleicao.votar(77)
eleicao.votar(89)
eleicao.votar(23)
eleicao.votar(32)
eleicao.votar(98)

console.log(eleicao.votos)
console.log(eleicao.apurarVotos())

const eleicao = new Eleicao()