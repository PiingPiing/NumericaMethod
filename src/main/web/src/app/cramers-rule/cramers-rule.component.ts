import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinearAlgebraInput} from "../model";

@Component({
  selector: 'app-cramers-rule',
  templateUrl: './cramers-rule.component.html',
  styleUrls: ['./cramers-rule.component.css']
})
export class CramersRuleComponent implements OnInit {

  n: number;

  input: LinearAlgebraInput = {};

  output: number[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  set(n) {
    this.input.matrix = [];
    this.input.vector = [];
    for (let i = 0; i < n; i++) {
      this.input.vector[i] = 0;
      this.input.matrix[i] = [];
      for (let j = 0; j < n; j++) {
        this.input.matrix[i][j] = 0;
      }
    }
  }

  calculation() {
    this.http.post<number[]>('api/linear-algebra/cramers-rule', this.input).subscribe(e => this.output = e);
  }

}
