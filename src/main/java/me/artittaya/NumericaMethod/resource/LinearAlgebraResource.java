package me.artittaya.NumericaMethod.resource;

import Jama.Matrix;
import me.artittaya.NumericaMethod.domain.LinearAlgebraInput;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api/linear-algebra")
public class LinearAlgebraResource {

    /**
     * @param input matrix[][], vector[]
     * @return x1, x2, x3
     */
    @PostMapping(value = "/cramers-rule")
    public List<Long> cramersRule(@RequestBody LinearAlgebraInput input) {
        List<Long> answer = new ArrayList<>();

        double[][] matrix = input.getMatrix();
        double[] vector = input.getVector();

        int counter = 0;
        while (counter != matrix.length) {
            double[][] transformMatrix = matrix.clone();
            for (int i = 0; i < matrix.length; i++) {
                for (int j = 0; j < matrix[0].length; j++) {
                    if (j == counter) {
                        transformMatrix[i][j] = vector[i];
                        break;
                    }
                }
            }
            counter++;
            answer.add(Math.round(Matrix.constructWithCopy(transformMatrix).det()) / Math.round(Matrix.constructWithCopy(matrix).det()));
        }
        return answer;
    }

    /**
     * @param input matrix[][], vector[]
     * @return doubleList
     */
    @PostMapping(value = "/gauss-elimination")
    public List<Double> gaussElimination(@RequestBody LinearAlgebraInput input) {
        List<Double> answer = new ArrayList<>();

        double[][] A = input.getMatrix();
        double[] B = input.getVector();

        int n = A[0].length;

        if (A[0][0] == 0) { //pivoting
            double[] tempRow = A[0];
            double tempColumn = B[0];
            A[0] = A[1];
            A[1] = tempRow;
            B[0] = B[1];
            B[1] = tempColumn;
        }
//Forward eliminated
        for (int k = 0; k < n; k++) {
            for (int i = k + 1; i < n; i++) {
                double factor = A[i][k] / A[k][k];
                for (int j = k; j < n; j++) {
                    A[i][j] = A[i][j] - factor * A[k][j];
                }
                B[i] = B[i] - factor * B[k];

            }
        }
//Backward Substitution
        double[] X = new double[n];
        X[n - 1] = B[n - 1] / A[n - 1][n - 1]; //find Xn
        for (int i = n - 2; i >= 0; i--) { //find Xn-1 to X1
            double sum = B[i];
            for (int j = i + 1; j < n; j++) {
                sum = sum - A[i][j] * X[j];
            }
            X[i] = Math.round(sum / A[i][i]);
        }
        for (int i = 0; i < n; i++) {
            answer.add(X[i]);
        }


        return answer;
    }

    /**
     * @param input matrix[][], vector[]
     * @return doubleList
     */
    @PostMapping(value = "/gauss-jordan")
    public List<Double> gaussJordan(@RequestBody LinearAlgebraInput input) {
        List<Double> answer = new ArrayList<>();

        double[][] A = input.getMatrix();
        double[] B = input.getVector();

        int n = A[0].length;

        if (A[0][0] == 0) { //pivoting
            double[] tempRow = A[0];
            double tempColumn = B[0];
            A[0] = A[1];
            A[1] = tempRow;
            B[0] = B[1];
            B[1] = tempColumn;
        }
//Forward eliminate
        for (int k = 0; k < n; k++) {
            for (int i = k + 1; i < n; i++) {
                double factor = A[i][k] / A[k][k];
                for (int j = k; j < n; j++) {
                    A[i][j] = A[i][j] - factor * A[k][j];
                }
                B[i] = B[i] - factor * B[k];

            }
        }
//Backward Substitution
        for (int k = n - 1; k >= 0; k--) {
            for (int i = k; i >= 0; i--) {

                if (i == k) {//Identity matrix
                    double factor = 1 / A[i][k];

                    for (int j = 0; j < n; j++) {
                        A[i][j] = A[i][j] * factor;
                    }
                    B[i] = B[i] * factor;


                } else {
                    double factor = A[i][k] / A[k][k];
                    for (int j = 0; j < n; j++) {
                        A[i][j] = A[i][j] - factor * A[k][j];
                    }
                    B[i] = B[i] - factor * B[k];
                }
            }
        }
        for (int i = 0; i < n; i++) {
            answer.add(B[i]);
        }


        return answer;
    }

// /**
// * @param input matrix[][], vector[]
// * @return doubleList
// */
// @PostMapping(value = "/lu-decomposition")
// public List<Double> luDecomposition(@RequestBody LinearAlgebraInput input) {
// List<Double> answer = new ArrayList<>();
//
//// double[][] A = input.getMatrix();
//// double[][] B = {input.getVector()};
//
//
// double[][] A = {{2, 3, 4},
// {4, 10, 9},
// {6, 17, 20}};
// double[][] B = {
// {23,0,0},
// {59,0,0},
// {101,0,0}
// };
//
// int[] decompose = new LUDecomposition(Matrix.constructWithCopy(A)).solve(Matrix.constructWithCopy(B)).lu().getPivot();
//
// for (int i = 0; i < decompose.length; i++) {
// answer.add((double) Math.round(decompose[i]));
// }
//
// return answer;
// }


}