//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

public class TwoSum {
    public TwoSum() {
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1, 2, 3, 4, 5, 6};
        System.out.println(TwoSumCalc(nums, 8));
    }

    public static int[] TwoSumCalc(int[] numeros, int target) {
        int[] indexes = new int[2];

        for(int i = 0; i < numeros.length; ++i) {
            int newTarget = target - numeros[i];

            for(int j = i + 1; j < numeros.length; ++j) {
                if (numeros[j] == newTarget) {
                    indexes[0] = i;
                    indexes[1] = j;
                    return indexes;
                }
            }
        }

        return null;
    }
}
