import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BisectionComponent} from "./bisection/bisection.component";
import {FalsePositionComponent} from "./false-position/false-position.component";
import {NewtonRaphsonComponent} from "./newton-raphson/newton-raphson.component";
import {OnePointComponent} from "./one-point/one-point.component";
import {TrapezoidalRuleComponent} from "./trapezoidal-rule/trapezoidal-rule.component";
import {CompositeTrapezoidalComponent} from "./composite-trapezoidal/composite-trapezoidal.component";
import {SimpsonsRuleComponent} from "./simpsons-rule/simpsons-rule.component";
import {CompositeSimpsonsRuleComponent} from "./composite-simpsons-rule/composite-simpsons-rule.component";
import {SimpsonsRule38Component} from "./simpsons-rule38/simpsons-rule38.component";
import {GaussQuadratureComponent} from "./gauss-quadrature/gauss-quadrature.component";
import {DerivativeFwComponent} from "./derivative-fw/derivative-fw.component";
import {DerivativeH2Component} from "./derivative-h2/derivative-h2.component";
import {DerivativeH4Component} from "./derivative-h4/derivative-h4.component";
import {EulersComponent} from "./eulers/eulers.component";
import {HeunsComponent} from "./heuns/heuns.component";
import {ModifiedEulersComponent} from "./modified-eulers/modified-eulers.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bisection'
  },
  {
    path: 'bisection',
    component: BisectionComponent
  },
  {
    path: 'false-position',
    component: FalsePositionComponent
  },
  {
    path: 'newton-raphson',
    component: NewtonRaphsonComponent
  },
  {
    path: 'one-point',
    component: OnePointComponent
  },
  {
    path: 'trapezoidal-rule',
    component: TrapezoidalRuleComponent
  },
  {
    path: 'composite-trapezoidal',
    component: CompositeTrapezoidalComponent
  },
  {
    path: 'simpsons-rule',
    component: SimpsonsRuleComponent
  },
  {
    path: 'composite-simpsons-rule',
    component: CompositeSimpsonsRuleComponent
  },
  {
    path: 'simpsons-rule38',
    component: SimpsonsRule38Component
  },
  {
    path: 'gauss-quadrature',
    component: GaussQuadratureComponent
  },
  {
    path: 'derivative-fw',
    component: DerivativeFwComponent
  },
  {
    path: 'derivative-h2',
    component: DerivativeH2Component
  },
  {
    path: 'derivative-h4',
    component: DerivativeH4Component
  },
  {
    path: 'eulers',
    component: EulersComponent
  },
  {
    path:'heuns',
    component:HeunsComponent
  },
  {
    path:'modified-eulers',
    component:ModifiedEulersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
