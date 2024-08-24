'use strict';

(() => {
  //Constantes e Variáveis
  var segundos = document.querySelector('#segundos');
  var minutos = document.querySelector('#minutos');
  var horas = document.querySelector('#horas');
  var dias = document.querySelector('#dias');

  let hoje = new Date();
  let evento = verificaDia();
  console.log("Data atual: " + evento, new Date(evento).toLocaleDateString(), new Date(evento).toLocaleTimeString());

  //Funções
  function formatarDigito(digito) {
    digito = `0${digito}`.slice(-2);
    return (digito);
  }

  function verificaDia() {
    const diaNum = (new Date().getDate());
    // console.log(diaNum);
    const mes = (new Date().getMonth()) + 1;
    // console.log(mes);
    const ano = new Date().getFullYear();
    // console.log(ano);
    const hora = new Date().getHours();
    // console.log(hora);
    const minutos = new Date().getMinutes();
    // console.log(minutos);
    const segundos = new Date().getSeconds();
    // console.log(segundos);

    const proximaLive = document.querySelector('#proxima-live');
    const diaSemana = new Date().getDay();
    const horaFull = hora + ':' + minutos + ':' + segundos;
    // console.log(horaFull)

    let eventoFunc;
    let diaDeLive;

    // 0 - domingo; 2 - terça; 4 - quinta
    if (diaSemana == 0 || diaSemana == 2 || diaSemana == 4) {
      eventoFunc = ((ano + '-' + formatarDigito(mes) + '-' + formatarDigito(diaNum + 1)) + ' 19:30:00');
      proximaLive.textContent = "A próxima live é amanhã";
      diaDeLive = false;
    } else {
      // segunda, quarta, quinta e sexta
      proximaLive.textContent = "Hoje tem live! às 19h30";
      eventoFunc = ((ano + '-' + formatarDigito(mes) + '-' + formatarDigito(diaNum)) + ' 19:30:00');
      diaDeLive = true;

      if (diaDeLive == true && horaFull > '19:30:00' && horaFull < '23:59:00') {

        proximaLive.textContent = "Ao vivo ●";
        proximaLive.style.color = '#831d1c';
        eventoFunc = Date.now();
        // console.log(eventoFunc);
        document.querySelector('#texto-botao').textContent = "Assistir";
      }

    }
    // console.log(eventoFunc);
    return (eventoFunc);
  }

  const constagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
      if (tempo === 0) {
        pararContagem();
      }
      // console.log(tempo);
      atualizar(tempo);
      tempo--;
    }

    const id = setInterval(contar, 1000);
  }

  const tempoRestante = () => {
    const dataEvento = new Date(evento);
    const dataAtual = Date.now();
    // console.log(dataAtual);

    const restante = Math.floor((dataEvento - dataAtual) / 1000);
    return (restante);
  }

  constagemRegressiva(tempoRestante()); //(segundos)

  const atualizar = (tempo) => {
    let quantSegundos = tempo % 60;
    let quantMinutos = Math.floor((tempo % (60 * 60)) / 60);
    let quantHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    let quantDias = Math.floor((tempo / (60 * 60 * 24)));

    if (quantSegundos < 0) quantSegundos = 0;
    if (quantMinutos < 0) quantMinutos = 0;
    if (quantHoras < 0) quantHoras = 0;
    if (quantDias < 0) quantDias = 0;

    segundos.textContent = formatarDigito(quantSegundos);
    minutos.textContent = formatarDigito(quantMinutos);
    horas.textContent = formatarDigito(quantHoras);
    dias.textContent = formatarDigito(quantDias);

    // quantSegundos === 0 ? segundos.closest('div').remove() : segundos.textContent = formatarDigito(quantSegundos);
    // quantMinutos === 0 ? minutos.closest('div').remove() : minutos.textContent = formatarDigito(quantMinutos);
    // quantHoras === 0 ? horas.closest('div').remove() : horas.textContent = formatarDigito(quantHoras);
    // quantDias === 0 ? dias.closest('div').remove() : dias.textContent = formatarDigito(quantDias);

    return;
  }

  setInterval(() => {
    verificaDia();
    /* eslint-disable */console.log(...oo_oo(`3986456678_119_4_119_44_4`, 'Executando verificação...'))
  }, 5000);
})();
