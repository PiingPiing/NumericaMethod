import { Component, OnInit } from '@angular/core';
import {Input, Iteration} from "../model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-newton-raphson',
  templateUrl: './newton-raphson.component.html',
  styleUrls: ['./newton-raphson.component.css']
})
export class NewtonRaphsonComponent implements OnInit {

  input: Input = {};
  iterations: Iteration[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  calculation() {
    this.http.post<Iteration[]>('api/root-of-equation/one-point', this.input).subscribe(e => this.iterations = e);
  }


}
