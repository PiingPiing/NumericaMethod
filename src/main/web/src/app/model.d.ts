export interface Input {
  func?: string;
  xl?: number;
  xr?: number;
  x?: number;
  a?: number;
  b?: number;
  n?: number;
  x0?: number;
  x1?: number;
}

export interface Iteration {
  x?: string;
  y?: string;
  error?: number;
}

export interface LinearAlgebraInput {
  matrix?: number[][];
  vector?: number[];
}
