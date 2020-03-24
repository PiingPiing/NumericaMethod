import { Component, OnInit } from '@angular/core';
import {Input, Iteration} from "../model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-one-point',
  templateUrl: './one-point.component.html',
  styleUrls: ['./one-point.component.css']
})
export class OnePointComponent implements OnInit {

  input: Input = {};
  iterations: Iteration[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  calculation() {
    this.http.post<Iteration[]>('api/root-of-equation/newton-raphson', this.input).subscribe(e => this.iterations = e);
  }

}
