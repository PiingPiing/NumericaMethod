import {Component, OnInit} from '@angular/core';
import {Input, Iteration} from "../model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bisection',
  templateUrl: './bisection.component.html',
  styleUrls: ['./bisection.component.css']
})
export class BisectionComponent implements OnInit {

  input: Input = {};
  iterations: Iteration[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  calculation() {
    this.http.post<Iteration[]>('api/root-of-equation/bisection', this.input).subscribe(e => this.iterations = e);
  }

}
