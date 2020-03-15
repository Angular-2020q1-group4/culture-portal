export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  contacts: {
    telegram: string;
    github: string;
  };
  worklog: Worklog[];
}

export interface Worklog {
  task: string;
  spent: string;
}

export interface WorklogModel {
  worklogHeadline: string;
  worklogMembers: WorklogMember[];
  difficultiesHeadline: string;
  difficulties: string[];
  evaluationHeadline: string;
  evaluationScore: string;
  evaluation: Evaluation[];
}

export interface WorklogMember {
  avatar: string;
  name: string;
  role: string;
  worklog: Worklog[];
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
