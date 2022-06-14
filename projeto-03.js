const prompt = require('prompt-sync')();
console.clear();

// Funcao para executar a posicao marcada pelo jogador
function coordenadas(linh, colu, simb) {
    if (linh == 0 && colu == 0) {
        if (matrizPrincipal[0][0] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[0][0] = simb;
            return 'aplicado';
        }
    } else if (linh == 0 && colu == 1) {
        if (matrizPrincipal[0][1] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[0][1] = simb;
            return 'aplicado';
        }
    } else if (linh == 0 && colu == 2) {
        if (matrizPrincipal[0][2] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[0][2] = simb;
            return 'aplicado';
        }
    } else if (linh == 1 && colu == 0) {
        if (matrizPrincipal[1][0] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[1][0] = simb;
            return 'aplicado';
        }
    } else if (linh == 1 && colu == 1) {
        if (matrizPrincipal[1][1] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[1][1] = simb;
            return 'aplicado';
        }
    } else if (linh == 1 && colu == 2) {
        if (matrizPrincipal[1][2] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[1][2] = simb;
            return 'aplicado';
        }
    } else if (linh == 2 && colu == 0) {
        if (matrizPrincipal[2][0] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[2][0] = simb;
            return 'aplicado';
        }
    } else if (linh == 2 && colu == 1) {
        if (matrizPrincipal[2][1] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[2][1] = simb;
            return 'aplicado';
        }
    } else if (linh == 2 && colu == 2) {
        if (matrizPrincipal[2][2] != '') {
            return 'ocupado';
        } else {
            matrizPrincipal[2][2] = simb;
            return 'aplicado';
        }
    }
}

// Funcao para validar se houve ganhador
function validarVitoria(a) {
    let contagem = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i][0] == a[i][1] && a[i][0] == a[i][2] && a[i][0] != '') {
            return 'vitoria';
        }
    }
    for (let i = 0; i < 3; i++) {
        if (a[0][i] == a[1][i] && a[0][i] == a[2][i] && a[0][i] != '') {
            return 'vitoria';
        }
    }
    if (a[0][0] == a[1][1] && a[0][0] == a[2][2] && a[0][0] != '') {
        return 'vitoria';
    } else if (a[0][2] == a[1][1] && a[0][2] == a[2][0] && a[0][2] != '') {
        return 'vitoria';
    }
    for (let i of a) {
        for (let i2 of i) {
            if (i2 == 'X' || i2 == 'O') {
                contagem++;
                if (contagem == 9) {
                    return 'velha';
                }
            }
        }
    }
    contagem = 0;
}

// Declarando variáveis globais
let simbolo = 'O';
let linha;
let coluna;
let nomeJogando;
let pnts1 = 0;
let pnts2 = 0;
let continuar = 'sim';

// Tabuleiro
let matrizPrincipal = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

// Apresentação do jogo e escolha de nomes
console.log('Bem vindo ao jogo da velha!');
console.log();

console.log(`As regras são simples:
O jogador 1 será o 'X' e o jogador 2 será 'O'
Quem conseguir fazer uma reta com 3 simbolos primeiro, vence!

Vamos começar!
`);

let nome1 = prompt('Digite o nome do jogador 1 (X): ');
console.log();

let nome2 = prompt('Digite o nome do jogador 2 (O): ');
console.log();

console.log(`Ótimo!
${nome1} será 'X' e ${nome2} será 'O'
`);

console.log('Pressione ENTER para continuar.');
let enter = prompt();
console.clear();

// Inicio do jogo
while (continuar == 'sim') {
    // Trocando as informações do jogador (nome e simbolo)
    if (simbolo == 'O') {
        simbolo = 'X';
        nomeJogando = `${nome1}`;
    } else if (simbolo == 'X') {
        simbolo = 'O';
        nomeJogando = `${nome2}`;
    }
    console.clear();

    // Exibindo tabuleiro no console
    console.table(matrizPrincipal);

    // Escolha e validação da linha
    console.log(`${nomeJogando} escolha sua jogada: `);

    linha = +prompt('Linha: ');

    while (linha != 0 && linha != 1 && linha != 2) {
        console.log('Digite uma linha válida!');
        linha = prompt('Linha: ');
    }

    // Escolha e validação da coluna
    coluna = +prompt('Coluna: ');

    while (coluna != 0 && coluna != 1 && coluna != 2) {
        console.log('Digite uma coluna válida!');
        coluna = prompt('Coluna: ');
    }

    // Verificando se a posição escolhida ja esta ocupada
    while (coordenadas(linha, coluna, simbolo) == 'ocupado') {
        console.clear();

        console.table(matrizPrincipal);

        console.log('Posição já ocupada! Escolha outra:');

        linha = prompt('Linha: ');

        while (linha != 0 && linha != 1 && linha != 2) {
            console.log('Digite uma linha válida!');
            linha = prompt('Linha: ');
        }

        coluna = prompt('Coluna: ');

        while (coluna != 0 && coluna != 1 && coluna != 2) {
            console.log('Digite uma coluna válida!');
            coluna = prompt('Coluna: ');
        }
    }

    // Chamando a funcao que executa a jogada
    coordenadas(linha, coluna, simbolo);

    console.clear();

    console.table(matrizPrincipal);

    // Verificando e exibindo caso haja vencedor
    if (validarVitoria(matrizPrincipal) == 'vitoria') {
        if (nomeJogando == nome1) {
            console.log(`${nome1} ganhou!`);
            pnts1++;
        } else if (nomeJogando == nome2) {
            console.log(`${nome2} ganhou!`);
            pnts2++;
        }
    } else if (validarVitoria(matrizPrincipal) == 'velha') {
        console.log('Deu velha!');
    }

    // Perguntando se o usuario deseja executar mais uma vez o programa
    // e fazendo o 'reset' do tabuleiro caso ele queira
    if (
        validarVitoria(matrizPrincipal) == 'vitoria' ||
        validarVitoria(matrizPrincipal) == 'velha'
    ) {
        continuar = prompt('Deseja jogar novamente? ').toLowerCase();

        while (continuar != 'sim' && continuar != 'nao') {
            console.log('Digite "sim" ou "nao"!');

            continuar = prompt('Deseja jogar novamente? ').toLowerCase();
        }
        if (continuar == 'sim') {
            matrizPrincipal = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
        } else if (continuar == 'nao') {
            console.clear();
        }
    }
}

// Declarando o grande vencedor do jogo
if (pnts1 > pnts2) {
    console.log(`E o grande vencedor é: ${nome1}!!!!!!`);
} else if (pnts1 < pnts2) {
    console.log(`E o grande vencedor é: ${nome2}!!!!!!`);
} else {
    console.log(`E o grande vencedor é: DEU EMPATE!!!`);
}
console.log();

console.log('Parabens a todos os envolvidos e até a próxima!');
