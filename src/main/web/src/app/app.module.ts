import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BisectionComponent} from './bisection/bisection.component';
import {FalsePositionComponent} from './false-position/false-position.component';
import {NewtonRaphsonComponent} from './newton-raphson/newton-raphson.component';
import {OnePointComponent} from './one-point/one-point.component';
import {TrapezoidalRuleComponent} from './trapezoidal-rule/trapezoidal-rule.component';
import {CompositeTrapezoidalComponent} from './composite-trapezoidal/composite-trapezoidal.component';
import {SimpsonsRuleComponent} from './simpsons-rule/simpsons-rule.component';
import {CompositeSimpsonsRuleComponent} from './composite-simpsons-rule/composite-simpsons-rule.component';
import {SimpsonsRule38Component} from './simpsons-rule38/simpsons-rule38.component';
import {GaussQuadratureComponent} from './gauss-quadrature/gauss-quadrature.component';
import {DerivativeFwComponent} from './derivative-fw/derivative-fw.component';
import {DerivativeH2Component} from './derivative-h2/derivative-h2.component';
import {DerivativeH4Component} from './derivative-h4/derivative-h4.component';
import {EulersComponent} from './eulers/eulers.component';
import {HeunsComponent} from './heuns/heuns.component';
import {ModifiedEulersComponent} from './modified-eulers/modified-eulers.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BisectionComponent,
    FalsePositionComponent,
    NewtonRaphsonComponent,
    OnePointComponent,
    TrapezoidalRuleComponent,
    CompositeTrapezoidalComponent,
    SimpsonsRuleComponent,
    CompositeSimpsonsRuleComponent,
    SimpsonsRule38Component,
    GaussQuadratureComponent,
    DerivativeFwComponent,
    DerivativeH2Component,
    DerivativeH4Component,
    EulersComponent,
    HeunsComponent,
    ModifiedEulersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
