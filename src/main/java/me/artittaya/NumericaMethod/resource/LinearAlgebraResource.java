package me.artittaya.NumericaMethod.resource;

import Jama.Matrix;
import me.artittaya.NumericaMethod.domain.Input;
import me.artittaya.NumericaMethod.domain.Iteration;
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
}
