//Exercicio para fixação de interação com Input e função
function inicio() {
  const nome = document.getElementById('nome').value
  const resultado = document.getElementById('resultado')
  resultado.innerHTML = `<p>Olá, <strong>${nome}</strong> seja bem-vindo!</p>`
  console.log(nome)
}
