function CalcIdade()
{
var Nome = document.getElementById('Nome').value;
var AnoAtual = document.getElementById('AnoAtual').value;
var AnoNascimento = document.getElementById('AnoNasc').value;
var Idade = AnoAtual - AnoNascimento;
console.log(Nome)
console.log(Idade)
document.getElementById('Resultado').value = Nome + " você tem " + Idade +" anos."
}
