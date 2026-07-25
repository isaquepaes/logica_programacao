// let TemIngresso = true;
// if (TemIngresso) {
//     console.log("PodeEntrar")
// }

// let vida = 100;
// if(vida == 0) {
//     console.log("GameOver!");
// }

// let vida = 0;

// if (vida == 0) {
//     console.log("GameOver!");
// } else {
//     console.log("ContinueJogando!");
// }

// let vida = 15;
//  if (vida == 0) {
//     console.log("GameOver!")
//  } else if (vida <= 20) {
//     console.log("Use uma kit medico")
//  }

//  let golsFlamengo = 4;
//  let golsAdversario = 4; 

//  if (golsFlamengo > golsAdversario) {
//    console.log("flamengo venceu!");
//  } else if (golsFlamengo < golsAdversario) {
//    console.log("adversario venceu!");
//  } else if (golsFlamengo == golsAdversario) {
//    console.log("partida empatada!");
//  }

let vida = 80;
let moedas = 500;

if (vida == 0) {
   console.log("gameOver!");
} else if (vida < 30) {
   console.log("use um kit medico"); 
} else if (30 < vida < 70) {
   console.log("voce esta machucado"); 
}  else if (vida > 70) {
   console.log("vida excelente");
}