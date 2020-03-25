package me.artittaya.NumericaMethod.resource;

import me.artittaya.NumericaMethod.domain.RootOfEquationInput;
import me.artittaya.NumericaMethod.domain.Iteration;
import net.objecthunter.exp4j.ExpressionBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api/root-of-equation")
public class RootOfEquationResource {

    /**
     * @param input func, xl, xr
     * @return xl, xr, x, error
     */
    @PostMapping(value = "/bisection")
    public List<Iteration> bisection(@RequestBody RootOfEquationInput input) {
        List<Iteration> data = new ArrayList<>();

        String fx = input.getFunc();
        boolean increaseFunction = false;
        double xl = input.getXl();
        double xr = input.getXr();
        double xm;
        double sum;
        if (fx(xl, fx) < fx(xr, fx)) {
            increaseFunction = true;
        }

        do {
            xm = (xl + xr) / 2;
            if (fx(xm, fx) * fx(xr, fx) < 0) {
                sum = this.error(xm, xr);
                if (increaseFunction) {
                    xl = xm;
                } else {
                    xr = xm;
                }

            } else {
                sum = this.error(xm, xl);
                if (increaseFunction) {
                    xr = xm;
                } else {
                    xl = xm;
                }
            }

            Iteration iteration = new Iteration();
            iteration.setXl(xl);
            iteration.setXr(xr);
            iteration.setX(xm);
            iteration.setError(Math.abs(Math.abs(sum)));
            data.add(iteration);
        } while (Math.abs(sum) > 0.000001);

        return data;
    }

    /**
     * @param input func, xl, xr
     * @return xl, xr, x, error
     */
    @PostMapping(value = "/false-position")
    public List<Iteration> falsePosition(@RequestBody RootOfEquationInput input) {
        List<Iteration> data = new ArrayList<>();

        String fx = input.getFunc();
        boolean increaseFunction = false;
        double xl = input.getXl();
        double xr = input.getXr();
        double xi;
        double epsilon;

        if (fx(xl, fx) < fx(xr, fx)) {
            increaseFunction = true;
        }

        do {
            xi = (xl * fx(xr, fx) - xr * fx(xl, fx)) / (fx(xr, fx) - fx(xl, fx));
            if (fx(xi, fx) * fx(xr, fx) < 0) {
                epsilon = error(xi, xr);
                if (increaseFunction) {
                    xl = xi;
                } else {
                    xr = xi;
                }

            } else {
                epsilon = error(xi, xl);
                if (increaseFunction) {
                    xr = xi;
                } else {
                    xl = xi;
                }

            }

            Iteration iteration = new Iteration();
            iteration.setXl(xl);
            iteration.setXr(xr);
            iteration.setX(xi);
            iteration.setError(Math.abs(epsilon));
            data.add(iteration);
        } while (Math.abs(epsilon) > 0.000001);

        return data;
    }

    /**
     * @param input func, x0
     * @return x, error
     */
    @PostMapping(value = "/newton-raphson")
    public List<Iteration> newtonRaphson(@RequestBody RootOfEquationInput input) {
        List<Iteration> data = new ArrayList<>();

        String fx = input.getFunc();
        double xNew = 0;
        double epsilon;
        double xOld = input.getX0();
        do {
            xNew = xNew - (fx(xNew, fx) / fxDiff(xOld, fx)); //TODO ยังไม่ diff
            epsilon = this.error(xNew, xOld);
            xOld = xNew;

            Iteration iteration = new Iteration();
            iteration.setX(xNew);
            iteration.setError(Math.abs(epsilon));
            data.add(iteration);

        } while (Math.abs(epsilon) > 0.000001);

        return data;
    }


    /**
     * @param input func, x0
     * @return x, error
     */
    @PostMapping(value = "/one-point")
    public List<Iteration> onepoint(@RequestBody RootOfEquationInput input) {
        List<Iteration> data = new ArrayList<>();

        String fx = input.getFunc();
        double xNew;
        double epsilon;
        double xOld = input.getX0();
        do {
            xNew = fx(xOld, fx);
            epsilon = error(xNew, xOld);
            xOld = xNew;

            Iteration iteration = new Iteration();
            iteration.setX(xNew);
            iteration.setError(Math.abs(epsilon));
            data.add(iteration);

        } while (Math.abs(epsilon) > 0.000001);

        return data;
    }

    /**
     * @param input func, x0, x1
     * @return y, error
     */
    @PostMapping(value = "/secant")
    public List<Iteration> secant(@RequestBody RootOfEquationInput input) {
        List<Iteration> data = new ArrayList<>();

        String fx = input.getFunc();
        List<Double> x = new ArrayList<>();
        double y;
        double epsilon;
        int i = 1;

        x.add(input.getX0());
        x.add(input.getX1());

        Iteration iteration1 = new Iteration();
        iteration1.setY(input.getX0());
        iteration1.setError(0d);
        data.add(iteration1);

        do {
            y = x.get(i) - (fx(x.get(i), fx) * (x.get(i) - x.get(i - 1))) / (fx(x.get(i), fx) - fx(x.get(i - 1), fx));
            x.add(y);
            epsilon = error(y, x.get(i));

            Iteration iteration = new Iteration();
            iteration.setY(y);
            iteration.setError(Math.abs(epsilon));
            data.add(iteration);
            i++;

        } while (Math.abs(epsilon) > 0.000001);

        return data;
    }

    private double error(double xNew, double xOld) {
        return Math.abs((xNew - xOld) / xNew);
    }

    private Double fx(Double x, String func) {
        return new ExpressionBuilder(func)
                .variable("x")
                .build()
                .setVariable("x", x).evaluate();
    }

    //TODO ยังไม่ diff
    private Double fxDiff(Double x, String func) {
        return new ExpressionBuilder(func)
                .variable("x")
                .build()
                .setVariable("x", x).evaluate();
    }
}
