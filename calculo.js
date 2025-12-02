let vitorias = 21
let derrotas = 10

let contador = 0

while (contador < 1){
    console.log("Iniciando cálculo")
    contador ++
}


function calcularRank(vitorias, derrotas){
let saldo = vitorias - derrotas
let nivel = "";

if (vitorias < 10){
    nivel = "Ferro"

} else if (vitorias <= 20){
    nivel = "Bronze"

} else if (vitorias <= 50){
    nivel = "Prata"

} else if (vitorias <= 80){
    nivel = "Ouro"

} else if (vitorias <= 90){
    nivel = "Diamante"

} else if (vitorias <= 100){
    nivel = "Lendário"

} else {
    nivel = "Imortal"
}
return {saldo, nivel}

}
let resultado = calcularRank(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`);
