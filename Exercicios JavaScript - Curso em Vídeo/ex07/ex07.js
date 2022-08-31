// Exercício para colocar em prática:
// manipular os dados recebidos
// usar uma condicional(if)
// Imprimir se o aluno foi aprovado ou reprovado

function calcular() {
  let nome = document.getElementById('nome').value
  let nota1 = Number(document.getElementById('valor1').value) //Sempre que for calcular tme que colocar NUMBER porque vem como string
  let nota2 = Number(document.getElementById('valor2').value)
  soma = (nota1 + nota2) / 2
  let resultado = document.getElementById('resultado')
  console.log(soma)

  if (soma >= 7) {
    resultado.innerHTML = `<p>A nota de ${nome}</p> <p>Primeira nota foi <strong>${nota1}</strong> e da segunda foi <strong>${nota2}</strong></p><p>Sua média foi de <strong>${soma}</strong</p> <p>A situação do aluno é <strong>Aprovado</strong>`
  } else {
    resultado.innerHTML = `<p>A nota de ${nome}</p> <p>Primeira nota foi <strong>${nota1}</strong> e da segunda foi <strong>${nota2}</strong></p> <p>Sua média foi de <strong>${soma}</strong></p> <p>A situação do aluno é <strong>Reprovado</strong>`
  }
}
