
const nome = prompt('Qual è il tuo nome?');
const cognome = prompt('Qual è il tuo cognome?');
const favColor = prompt('Qual è il tuo colore preferito?');

console.log(nome + cognome + favColor);

document.getElementById('password').innerHTML= `<h1>${nome}${cognome}${favColor}21</h1>`;