import { Component, OnInit } from '@angular/core';
import {LinearAlgebraInput} from "../model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gauss-jordan',
  templateUrl: './gauss-jordan.component.html',
  styleUrls: ['./gauss-jordan.component.css']
})
export class GaussJordanComponent implements OnInit {

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
    this.http.post<number[]>('api/linear-algebra/gauss-jordan', this.input).subscribe(e => this.output = e);
  }

  indexTracker(index: number, value: any) {
    return index;
  }

}
