export interface WorklogModel {
  worklogHeadline: string;
  worklogMembers: WorklogMember[];
  difficultiesHeadline: string;
  difficulties: string[];
  evaluationHeadline: string;
  evaluationMin: string;
  evaluationNormal: string;
  evaluationExtra: string;
  evaluationFines: string;
  evaluation: Evaluation;
}

export interface WorklogMember {
  avatar: string;
  name: string;
  role: string;
  worklog: Worklog[];
}

export interface Worklog {
  task: string;
  spent: string;
}

export interface Evaluation {
  minScope: Scope[];
  normalScope: Scope[];
  extraScope: Scope[];
  fines: Scope[];
}

export interface Scope {
  done: boolean;
  point: number;
  label: string;
}
