/*
var π = 3.1415
window.alert('Minha primeira mensagem!')//Janela de Aviso com botão OK
window.confirm('Está gostando de JS?')  //Janela com botão OK e Cancel
var a = Number.parseFloat(window.prompt('Digite A:'))
var b = Number.parseFloat(window.prompt('Digite B:'))
var c = Number.parseFloat(window.prompt('Digite C:'))
if((Math.sqrt(b*b)-(4*a*c)) > 0){
document.write(`Delta   : ${(b*b)-(4*a*c)}<br>
                Positivo: ${((-b)+(Math.sqrt(b*b)-(4*a*c)))/(2*a)}<br>
                Negativo: ${((-b)-(Math.sqrt(b*b)-(4*a*c)))/(2*a)}`)
} else if ((Math.sqrt(b*b)-(4*a*c)) == 0){
document.write(`Delta    : ${(b*b)-(4*a*c)}<br>
                Resultado: ${((-b)+(Math.sqrt(b*b)-(4*a*c)))/(2*a)}`)
} else {
document.write(`Delta    : ${(b*b)-(4*a*c)}<br>
                Sem resultado.`)
}
*/
const bot = document.getElementById('refresh');
const paragrafo = document.getElementById('msg');
bot.addEventListener('click', function() {
  paragrafo.textContent = 'Olá, Bom dia! O botão foi clicado às ' + new Date().toLocaleTimeString();
});















