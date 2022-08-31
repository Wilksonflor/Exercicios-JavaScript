//Exercicio para fixação de interação com Input e função
//Tem que pedir dois valores e soma os dois valores.

function calcular() {
  let numero1 = Number(document.getElementById('valor1').value) //Sempre que for calcular tme que colocar NUMBER porque vem como string
  let numero2 = Number(document.getElementById('valor2').value)
  soma = numero1 + numero2
  console.log(soma)
  let resultado = document.getElementById('resultado')

  resultado.innerHTML = `<p>O calculo de <strong>${numero1}</strong> + <strong>${numero2}</strong> é: ${soma}</p>`
}
