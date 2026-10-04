const readlineSync = require('readline-sync');
let nomeJogador = readlineSync.question("Qual o seu nome, aventureiro?")

let tempoRestante = 100;
let temChave = null;
let energia = 50;

console.log("\n=== Ficha do jogador ===");
console.log(`Nome: ${nomeJogador}`)

console.log(`Tipo de tempoRestante: ${typeof tempoRestante}`)
console.log(`Tipo de nomeJogador: ${typeof nomeJogador}`)
let portaEscolhidaTexto = readlineSync.question("Você vê 3 portas: [1] Vermelha [2] Azul [3] Verde. Qual  você escolhe?")
let portaEscolhida = Number(portaEscolhidaTexto);

switch (portaEscolhida) {
    case 1: energia -= 20 
    console.log("Uma armadilha! Você perdeu energia.")
    break 

    case 2:temChave = true 
    console.log("Você encontrou uma chave escondida!")
    break

    case 3: tempoRestante -= 30
    console.log("Sala labirintica! Você perdeu tempo")
    break 

    default: energia -= 30
    console.log("Porta inválida, você tropeça e perde 10 de energia")
    
}  

let enigma = readlineSync.question("Quanto é 8 x 7?")
let resposataEnigma = Number(enigma)

if (resposataEnigma == 56) {
    console.log("Correto! Um painel se abre");
    tempoRestante += 15
    
} else {
    console.log("Errado! Você perde tempo tentando de novo.") 
    tempoRestante -= 15 
}

let finalDaHistoria;

if (temChave === true && tempoRestante > 0 && energia > 0 ) {
   finalDaHistoria = "fuga_perfeita"

} else if (temChave === true && tempoRestante <= 0 || energia <= 0) {
    finalDaHistoria = "fuga_por_pouco";

} else if (temChave !== true && tempoRestante > 0) {
    finalDaHistoria = "preso_sem_chave";

} else {
    finalDaHistoria = "tempo_esgotado";
}
 console.log("Final da Historia:", finalDaHistoria) 

 let pontuacaoFinal = tempoRestante + energia 

 let classificacao; 
 if (pontuacaoFinal >= 80) {
    classificacao = "Mestre do Escape"
 } else {
    classificacao = "Sobrevivente"
 }

 switch(finalDaHistoria) {
    case "fuga_perfeita": 
    console.log(`
        
    "========================= escaperoom ======================="
        
        ${nomeJogador} escapou pela porta principal, chave em mãos e energia de sobra!
         Pontuação final: ${pontuacaoFinal} 
         Classificação ${classificacao} 
         
    "============================================================"
         `);
    break 

    case "fuga_por_pouco": 
    console.log(`

    "========================= escaperoom ========================"

        ${nomeJogador} escapou passando nem uma filepa de vento, com chave mas quase sem tempo e quase não tinha energia!
         Pontuação final: ${pontuacaoFinal} 
         Classificação: ${classificacao}
         
   "=============================================================="     
         `);
    break

    case "preso_sem_chave":
         console.log(
        
    "======================== escaperoom ========================="
        
         `${nomeJogador} hahahahha seu trouxa, ficou preso sem chave 
         Pontuação Final: ${pontuacaoFinal}
         Classificação: ${classificacao} 
    "=============================================================="
     `)
    break 
    default: 
     console.log(`
        
    "========================= escaperoom ========================="

        ${nomeJogador} teu tempo esgotou doidão hahahahahhahahhaha nem chave nem nada tu tem KAKAKAKAKKAK
        Pontuação final: ${pontuacaoFinal}
        Classificação: ${classificacao}
        
    "=============================================================="
        `)
 }
