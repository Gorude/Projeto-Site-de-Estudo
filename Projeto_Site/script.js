
const bodyElement = document.body;
const bot = document.getElementById('refresh');
const bulb = document.getElementById('light');
const conf = document.getElementById('config');
const calc = document.getElementById('calculator');
const paragrafo = document.getElementById('msg');
const tema = document.getElementById('brightness');
const icone = document.getElementById('sun_moon');
const boticon = document.getElementById('bot_icon')
const boticon2 = document.getElementById('bot_icon2')
const boticon3 = document.getElementById('bot_icon3')
const boticon4 = document.getElementById('bot_icon4')

const titulo = document.getElementById('titulo');
const lorem_box = document.getElementById('lorem_box');
const botoes = document.getElementById('botoes');
const text_input = document.getElementById('text_input');

const calc_arrast = document.getElementById('calc_arrast')
const calc_result = document.getElementById('calc_result_id')

let isMoon = true;
let isON = false;
let arrastando = false;
let offsetX, offsetY;

bot.addEventListener('click', function() {
  paragrafo.textContent = 'Olá, Bom dia! O botão foi clicado às ' + new Date().toLocaleTimeString();
});

bulb.addEventListener('click', function() {
  bodyElement.classList.toggle('gradiente_fundo');
  lorem_box.classList.toggle('shadow');
  botoes.classList.toggle('shadow');
  text_input.classList.toggle('shadow');
  calc_arrast.classList.toggle('shadow');
  tema.classList.toggle('shadow');
  isON = !isON;
});

tema.addEventListener('click', () => {
if(!isMoon) {
  icone.classList.remove('fa-sun');
  icone.classList.add('fa-moon');
  icone.style.color = 'rgb(255, 255, 255)';
  calc_result.style.backgroundColor = 'rgb(31, 31, 31)';
  calc_result.style.color = 'rgba(0, 240, 72, 1)';

  calc_arrast.classList.toggle('toggle_light');
  bodyElement.classList.toggle('toggle_light');
  lorem_box.classList.toggle('toggle_light');
  text_input.classList.toggle('toggle_light');
  tema.classList.toggle('toggle_light');
  boticon.classList.toggle('toggle_light');
  boticon2.classList.toggle('toggle_light');
  boticon3.classList.toggle('toggle_light');
  boticon4.classList.toggle('toggle_light');
  bot.classList.toggle('toggle_light');
  bulb.classList.toggle('toggle_light');
  conf.classList.toggle('toggle_light');
  calc.classList.toggle('toggle_light');

}else{
  icone.classList.remove('fa-moon');
  icone.classList.add('fa-sun');
  icone.style.color = 'rgb(0, 0, 0)';
  calc_result.style.backgroundColor = 'rgba(189, 189, 189, 1)';
  calc_result.style.color = 'rgba(31, 31, 31, 1)';

  calc_arrast.classList.toggle('toggle_light');
  bodyElement.classList.toggle('toggle_light');
  lorem_box.classList.toggle('toggle_light');
  text_input.classList.toggle('toggle_light');
  tema.classList.toggle('toggle_light');
  boticon.classList.toggle('toggle_light');
  boticon2.classList.toggle('toggle_light');
  boticon3.classList.toggle('toggle_light');
  boticon4.classList.toggle('toggle_light');
  bot.classList.toggle('toggle_light');
  bulb.classList.toggle('toggle_light');
  conf.classList.toggle('toggle_light');
  calc.classList.toggle('toggle_light');
}
isMoon = !isMoon
});

document.addEventListener('click', function(){
if(!isMoon && !isON){
  titulo.style.color = 'rgba(31, 31, 31, 1)';
  paragrafo.style.color = 'rgba(31, 31, 31, 1)';
}else{
  titulo.style.color = 'rgba(255, 255, 255, 1)';
  paragrafo.style.color = 'rgba(255, 255, 255, 1)';
}
});

calc_arrast.addEventListener('mousedown', (event) => {
arrastando = true;

offsetX = event.clientX - calc_arrast.getBoundingClientRect().left;
offsetY = event.clientY - calc_arrast.getBoundingClientRect().top;
calc_arrast.classList.add('active');
});

document.addEventListener('mousemove', (event) =>{
  if(!arrastando) return;

  const newX = event.clientX - offsetX;
  const newY = event.clientY - offsetY;
  calc_arrast.style.left = `${newX}px`;
  calc_arrast.style.top = `${newY}px`;
});

document.addEventListener('mouseup', () => {
    arrastando = false;
    calc_arrast.classList.remove('active');
});

calc.addEventListener('click', () => {
  calc_arrast.classList.toggle('hidden_calculadora');
});

function iniciarCalculadora() {
const botoesCalculadora = document.querySelectorAll('.botao_calc');
botoesCalculadora.forEach(button => {
  button.addEventListener('click', () => {
    const valor = button.textContent;
    if (valor === 'C') {
      calc_result.value = '0';
    } else if (valor === '←') {
      calc_result.value = calc_result.value.slice(0, -1) || '0';
    } else if (valor === '=') {
      try {
        calc_result.value = eval(calc_result.value.replace(/x/g, '*').replace(/÷/g, '/'));
      } catch (error) {
        calc_result.value = 'Erro';
      }
    } else {
      if (calc_result.value === '0' && ['+', '-', '*', '/'].includes(valor)) {
        calc_result.value += valor;
      } else if (calc_result.value === '0') {
        calc_result.value = valor;
      } else {
        calc_result.value += valor;
      }
    }
  });
});
}
iniciarCalculadora();






















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












