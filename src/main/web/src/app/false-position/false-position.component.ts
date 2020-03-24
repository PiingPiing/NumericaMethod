import { Component, OnInit } from '@angular/core';
import {Input, Iteration} from "../model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-false-position',
  templateUrl: './false-position.component.html',
  styleUrls: ['./false-position.component.css']
})
export class FalsePositionComponent implements OnInit {

  input: Input = {};
  iterations: Iteration[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  calculation() {
    this.http.post<Iteration[]>('api/root-of-equation/false-position', this.input).subscribe(e => this.iterations = e);
  }

}
