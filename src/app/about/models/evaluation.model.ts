export interface Evaluation {
  scopeName: string;
  scope: Scope[];
}

export interface Scope {
  done: boolean;
  point: number;
  label: string;
}
