import { WorklogMember } from './models/worklog-member';

export const MembersWorklogList: WorklogMember[] = [
  {
    avatar:
      'https://avatars0.githubusercontent.com/u/39223580?s=400&u=c6a5e520e37b99901880f86cf41d8f1f07574842&v=4',
    name: 'Павел Гайдукевич',
    role: 'Front-End разработчик',
    worklog: [
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' }
    ]
  },
  {
    avatar: '',
    name: 'Pavel Haidukevich',
    role: 'Front-End developer',
    worklog: [
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' },
      { task: 'todo', spent: '1h' }
    ]
  }
];
