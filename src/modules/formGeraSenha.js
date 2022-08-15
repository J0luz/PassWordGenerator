import geraSenha from './geradores'
console.log(geraSenha())

const senhaGerada = document.querySelector('.senha-gerada')
const qtdChar = document.querySelector('.qtd-char')
const checkMaiusculas = document.querySelector('.chk-maiúsculas')
const checkMinusculas = document.querySelector('.chk-minúsculas')
const checkNum = document.querySelector('.chk-números')
const checkSimbolos = document.querySelector('.chk-símbolos')
const btnGeraSenha = document.querySelector('.gerarSenha')

export default () => {
  btnGeraSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera()
  })
}

function gera() {
  const senha = geraSenha(
    qtdChar.value,
    checkMaiusculas.checked,
    checkMinusculas.checked,
    checkNum.checked,
    checkSimbolos.checked
  )
  return senha || 'Erro de seleção'
}
