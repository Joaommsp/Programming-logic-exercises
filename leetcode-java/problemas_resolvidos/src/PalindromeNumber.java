public class PalindromeNumber {

    public static void main(String[] args) {

    //Dado um número inteiro x, retorne verdadeiro se x for um palíndromo e falso caso contrário.
        //
        //Exemplo 1:
        //
        //Entrada: x = 121 Saída: verdadeiro Explicação: 121 lido da esquerda para a direita e da direita para a esquerda é igual.

        System.out.println(isPalindrome(221));

    }

    public static  boolean isPalindrome(int num) {

        String toString = Integer.toString(num);
        String reverse = "";

        for(int i = toString.length() - 1; i >= 0 ; i-- ) {
            reverse += toString.charAt(i);
        }

        System.out.println(toString);
        System.out.println(reverse);

        if(reverse.equals(toString)) {
            return  true;
        }
        else {
            return false;
        }

    }

}
