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
