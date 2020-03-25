import { Component, OnInit } from '@angular/core';
import {Input, Iteration} from "../model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-secant',
  templateUrl: './secant.component.html',
  styleUrls: ['./secant.component.css']
})
export class SecantComponent implements OnInit {

  input: Input = {};
  iterations: Iteration[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  calculation() {
    this.http.post<Iteration[]>('api/root-of-equation/secant', this.input).subscribe(e => this.iterations = e);
  }

}
