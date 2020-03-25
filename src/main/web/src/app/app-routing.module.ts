import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BisectionComponent} from "./bisection/bisection.component";
import {FalsePositionComponent} from "./false-position/false-position.component";
import {NewtonRaphsonComponent} from "./newton-raphson/newton-raphson.component";
import {OnePointComponent} from "./one-point/one-point.component";
import {SecantComponent} from "./secant/secant.component";
import {CramersRuleComponent} from "./cramers-rule/cramers-rule.component";
import {GaussEliminationComponent} from "./gauss-elimination/gauss-elimination.component";
import {GaussJordanComponent} from "./gauss-jordan/gauss-jordan.component";

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
    path: 'secant',
    component: SecantComponent
  },
  {
    path: 'cramers-rule',
    component: CramersRuleComponent
  },
  {
    path: 'gauss-elimination',
    component: GaussEliminationComponent
  },
  {
    path: 'gauss-jordan',
    component: GaussJordanComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
