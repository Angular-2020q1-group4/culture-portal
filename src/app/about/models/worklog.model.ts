export interface WorklogModel {
  worklogHeadline: string;
  worklogMembers: TeamMember[];
  difficultiesHeadline: string;
  difficulties: string[];
  evaluationHeadline: string;
  evaluationScore: string;
  evaluation: Evaluation[];
}

export interface TeamMember {
  avatar: string;
  name: string;
  role: string;
  gitHub: string;
  worklog: Worklog[];
}

export interface Worklog {
  task: string;
  spent: string;
}

export interface Evaluation {
  scopeName: string;
  scope: Scope[];
}

export interface Scope {
  done: boolean;
  point: number;
  label: string;
}
