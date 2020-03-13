export interface WorklogMember {
  avatar: string;
  name: string;
  role: string;
  worklog: Worklog[];
}

interface Worklog {
  task: string;
  spent: string;
}
