//contador de jogadas
let player1 = 0;
let player2 = 0;

let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

//adicionar o evento de click em todas as caixas//

for (let i = 0; i < boxes.length; i++) {
  //quando há o click na caixa//
  boxes[i].addEventListener('click', function () {
    //saber quem vai jogar//
    let el = checkEl(player1, player2);

    //verificar se tem elemento na caixa//
    if (this.childNodes.length == 0) {
      //adicionar o elementro dentro da caixa//
      //vamos clonar o elemento//

      let cloneEl = el.cloneNode(true);

      //usar uma função para inserir o elemento na lista
      this.appendChild(cloneEl);

      //Verificar a troca de elementos
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
      checkCondition();
    }
  });
}

//definir quem começa

function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }
  return el;
}

//definir quem venceu

function checkCondition() {
  let b1 = document.getElementById('block-1');
  let b2 = document.getElementById('block-2');
  let b3 = document.getElementById('block-3');
  let b4 = document.getElementById('block-4');
  let b5 = document.getElementById('block-5');
  let b6 = document.getElementById('block-6');
  let b7 = document.getElementById('block-7');
  let b8 = document.getElementById('block-8');
  let b9 = document.getElementById('block-9');

  //horizontal 1°linha
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    //verificar a primeira linha
    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declareWinner('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declareWinner('o');
    }
  }
  // 2°linha
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    //verificar a primeira linha
    if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
      declareWinner('x');
    } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
      declareWinner('o');
    }
  }

  // 3°linha
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    //verificar a primeira linha
    if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
      declareWinner('x');
    } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
      declareWinner('o');
    }
  }

  //verificar 1° coluna
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    //verificar a primeira linha
    if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
      declareWinner('x');
    } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
      declareWinner('o');
    }
  }
  //verificar 2° coluna
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    //verificar a primeira linha
    if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
      declareWinner('x');
    } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
      declareWinner('o');
    }
  }
  //verificar 3° coluna
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    //verificar a primeira linha
    if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
      declareWinner('x');
    } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
      declareWinner('o');
    }
  }
  //verificar 1° diagonal-esquerda
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    //verificar a primeira linha
    if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
      declareWinner('x');
    } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
      declareWinner('o');
    }
  }

  //verificar 2° diagonal-direita
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    //verificar a primeira linha
    if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
      declareWinner('x');
    } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
      declareWinner('o');
    }
  }

  //Deu velha
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }
  //testar a quantidade de elementos
  if (counter == 9) {
    declareWinner('Deu velha');
  }
}

//zerar o jogo e declarar o vencedor

function declareWinner(winner) {
  let scoreboardX = document.querySelector('#scoreboard-1');
  let scoreboardY = document.querySelector('#scoreboard-2');
  let msg = '';

  if (winner == 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = 'O vencedor é o jogador 1!';
  } else if (winner == 'o') {
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    msg = 'O vencedor é o jogador 2!';
  } else {
    msg = 'Deu velha!';
  }
  //exibir na tela a msg
  messageText.innerHTML = msg;
  messageContainer.classList.remove('hide');

  //esconder a msg
  setTimeout(function () {
    messageContainer.classList.add('hide');
  }, 3000);

  //zerar o jogo
  let boxesToRemove = document.querySelectorAll('.box div');

  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}
