let vitorias = parseInt(prompt('Digite a quantidade de vitórias:'));
let derrotas = parseInt(prompt('Digite a quantidade de derrotas:'));

let saldosVitorias = vitorias - derrotaslet;
let = nivel;

if(vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 51) {
nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
nivel = "Lendário";
} else {
    nivel = 'Imortal';
}
console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível ${nivel}.`);
  