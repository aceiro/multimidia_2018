function CalcIdade()
{
var Nome = document.getElementById('Nome').value;
var NomeMaiusculo = Nome.toUpperCase();
var AnoAtual = document.getElementById('AnoAtual').value;
var AnoNascimento = document.getElementById('AnoNasc').value;
var Idade = AnoAtual - AnoNascimento;
console.log(Nome);
console.log(Idade);
console.log(NomeMaiusculo);
document.getElementById('Resultado').value = NomeMaiusculo + ", você tem " + Idade +" anos." +" E nasceu no ano " + AnoNascimento +".";
document.querySelector(".resultdiv").innerHTML = NomeMaiusculo + ", você tem " + Idade +" anos." +" E nasceu no ano " + AnoNascimento +".";
}
