var paraA = document.querySelector('.scoreA');
paraA.addEventListener('click', atualizarNomeA);
function atualizarNomeA() {
  var nomeA = prompt('Insira um novo nome');
  paraA.textContent = 'Player A : ' + nomeA;
}

var paraB = document.querySelector('.scoreB');
paraB.addEventListener('click', atualizarNomeB);
function atualizarNomeB() {
  var nomeB = prompt('Insira um novo nome');
  paraB.textContent = 'Player B : ' + nomeB;
}
