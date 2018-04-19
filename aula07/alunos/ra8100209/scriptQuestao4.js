
      var para = document.querySelector('#nome');

      para.addEventListener('click', atualizarNome);

      function atualizarNome() {
        var nome = prompt('Insira o seu nome');
        para.textContent = 'Nome: ' + nome;
      }

      var para2 = document.querySelector('#nascimento');

      para2.addEventListener('click', atualizarNascimento);

      function atualizarNascimento() {
        var nascimento = prompt('Insira o ano de nascimento');
        para2.textContent = 'Nascimento: ' + nascimento;
      }

      var para3 = document.querySelector('#anoAtual');

      para3.addEventListener('click', atualizarAnoAtual);

      function atualizarAnoAtual() {
        var anoAtual = prompt('Insira o ano atual');
        para3.textContent = 'Ano: ' + anoAtual;
      }


    /* VERIFICAR var idade = document.querySelector('#resultado');

      idade.addEventListener('click', anoAtual - nascimento);
      alert ("A idade atual: " + idade);
      }       	*/
