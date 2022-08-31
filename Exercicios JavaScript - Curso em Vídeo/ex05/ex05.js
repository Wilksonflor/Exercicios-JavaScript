//Exercicio para fixação de interação com Input e função
//Tem que pedir um valor e desse valor tem que dar como resultado; O dobro do valor e a metade daquele valor

function calcular() {
  let valor = document.getElementById('numero').value
  let dobro = valor * 2
  let metade = valor / 2
  let resultado = document.getElementById('resultado')

  resultado.innerHTML = `<p>O <strong>Dobro de ${valor}</strong> é ${dobro} e a sua <strong>metade</strong> é ${metade}.</p>`
}
