import java.util.Scanner;
import java.util.Random;

public class JogoDaVelha {

    public static void main(String[] args) {
        // Inicializa o tabuleiro 3x3
        char[][] tabuleiro = new char[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                tabuleiro[i][j] = ' ';
            }
        }

        // Define os jogadores e quem começa
        char jogadorAtual = 'X'; // 'X' é o jogador humano, 'O' é o computador
        boolean jogoAcabou = false;

        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        System.out.println("Bem-vindo ao Jogo da Velha!");
        System.out.println("Você é o 'X'. Para jogar, digite a linha (0-2) e a coluna (0-2).");

        // Loop principal do jogo
        while (!jogoAcabou) {
            imprimirTabuleiro(tabuleiro);

            if (jogadorAtual == 'X') {
                // Vez do jogador humano
                int linha, coluna;
                while (true) {
                    System.out.print("Sua vez (linha e coluna): ");
                    linha = scanner.nextInt();
                    coluna = scanner.nextInt();

                    if (linha >= 0 && linha < 3 && coluna >= 0 && coluna < 3 && tabuleiro[linha][coluna] == ' ') {
                        tabuleiro[linha][coluna] = 'X';
                        break;
                    } else {
                        System.out.println("Posição inválida ou já ocupada. Tente novamente.");
                    }
                }
            } else {
                // Vez do computador (jogada aleatória)
                System.out.println("Vez do Computador (O)...");
                int linha, coluna;
                do {
                    linha = random.nextInt(3);
                    coluna = random.nextInt(3);
                } while (tabuleiro[linha][coluna] != ' ');
                tabuleiro[linha][coluna] = 'O';
                System.out.println("Computador jogou na linha " + linha + ", coluna " + coluna);
            }

            // Verifica se há um vencedor
            if (verificarVencedor(tabuleiro, jogadorAtual)) {
                imprimirTabuleiro(tabuleiro);
                System.out.println("O jogador '" + jogadorAtual + "' venceu!");
                jogoAcabou = true;
            }
            // Verifica se deu empate
            else if (tabuleiroCheio(tabuleiro)) {
                imprimirTabuleiro(tabuleiro);
                System.out.println("O jogo empatou!");
                jogoAcabou = true;
            }
            // Passa a vez para o próximo jogador
            else {
                jogadorAtual = (jogadorAtual == 'X') ? 'O' : 'X';
            }
        }

        scanner.close();
        System.out.println("Fim de jogo. Obrigado por jogar!");
    }

    /**
     * Imprime o estado atual do tabuleiro no console.
     * @param tabuleiro O array 2D representando o tabuleiro.
     */
    public static void imprimirTabuleiro(char[][] tabuleiro) {
        System.out.println();
        for (int i = 0; i < 3; i++) {
            System.out.println(" " + tabuleiro[i][0] + " | " + tabuleiro[i][1] + " | " + tabuleiro[i][2]);
            if (i < 2) {
                System.out.println("---|---|---");
            }
        }
        System.out.println();
    }

    /**
     * Verifica se o jogador especificado venceu o jogo.
     * @param tabuleiro O tabuleiro do jogo.
     * @param jogador O caractere do jogador a ser verificado ('X' ou 'O').
     * @return true se o jogador venceu, false caso contrário.
     */
    public static boolean verificarVencedor(char[][] tabuleiro, char jogador) {
        // Verifica linhas e colunas
        for (int i = 0; i < 3; i++) {
            if ((tabuleiro[i][0] == jogador && tabuleiro[i][1] == jogador && tabuleiro[i][2] == jogador) ||
                (tabuleiro[0][i] == jogador && tabuleiro[1][i] == jogador && tabuleiro[2][i] == jogador)) {
                return true;
            }
        }
        // Verifica diagonais
        if ((tabuleiro[0][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][2] == jogador) ||
            (tabuleiro[0][2] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][0] == jogador)) {
            return true;
        }
        return false;
    }

    /**
     * Verifica se o tabuleiro está completamente preenchido.
     * @param tabuleiro O tabuleiro do jogo.
     * @return true se todas as casas estão preenchidas, false caso contrário.
     */
    public static boolean tabuleiroCheio(char[][] tabuleiro) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (tabuleiro[i][j] == ' ') {
                    return false; // Encontrou uma casa vazia, então não está cheio
                }
            }
        }
        return true; // Nenhuma casa vazia foi encontrada
    }
}
