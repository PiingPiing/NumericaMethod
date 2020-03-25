import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BisectionComponent} from './bisection/bisection.component';
import {FalsePositionComponent} from './false-position/false-position.component';
import {NewtonRaphsonComponent} from './newton-raphson/newton-raphson.component';
import {OnePointComponent} from './one-point/one-point.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SecantComponent } from './secant/secant.component';
import { CramersRuleComponent } from './cramers-rule/cramers-rule.component';
import { GaussEliminationComponent } from './gauss-elimination/gauss-elimination.component';
import { GaussJordanComponent } from './gauss-jordan/gauss-jordan.component';

@NgModule({
  declarations: [
    AppComponent,
    BisectionComponent,
    FalsePositionComponent,
    NewtonRaphsonComponent,
    OnePointComponent,
    SecantComponent,
    CramersRuleComponent,
    GaussEliminationComponent,
    GaussJordanComponent
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
