package me.artittaya.NumericaMethod.resource;

import me.artittaya.NumericaMethod.domain.Input;
import me.artittaya.NumericaMethod.domain.Iteration;
import net.objecthunter.exp4j.ExpressionBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api/bisection")
public class BisectionResource {

    @PostMapping
    public List<Iteration> calculation(@RequestBody Input input) {
        List<Iteration> iterations = new ArrayList<>();

        String func = input.getFunc();
        double xl = input.getXl();
        double xr = input.getXr();
        double xm = searchXm(xl, xr);

        int count = 0;
        double error = 100.0;
        do {
            double xmOld = xm;
            double fxl = fx(xl, func);
            xm = searchXm(xl, xr);
            double Fxm = fx(xm, func);
            if (count > 0) {
                error = Math.abs((xm - xmOld) / xm);
                if (error > 0.000001) {
                    Iteration iteration = new Iteration();
                    iteration.setX(xm);
                    iteration.setError(error);
                    iterations.add(iteration);
                }
            }
            if (fxl * Fxm > 0) {
                xl = xm;
            } else {
                xr = xm;
            }
            count++;
        } while (error > 0.01);
        return iterations;
    }

    private Double searchXm(Double xl, Double xr) {
        return (xl + xr) / 2;
    }

    private Double fx(Double x, String func) {
        return new ExpressionBuilder(func)
                .variable("x")
                .build()
                .setVariable("x", x).evaluate();
    }
}
