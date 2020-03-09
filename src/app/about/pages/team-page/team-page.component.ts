import { Component, OnInit } from '@angular/core';
import { User } from '@about/models/team-user.model';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  title = 'Над проектом работала команда из шести разработчиков:';

  user: User = {
    github: 'https://github.com/pavel232',
    photo: 'https://avatars0.githubusercontent.com/u/39223580?s=460&v=4',
    RU: {
      name: 'Павел Гайдукевич',
      role: 'Front-End'
    },
    EN: {
      name: 'Pavel Haidukevich',
      role: 'Front-End'
    },
    BY: {
      name: 'Павел Гайдукевич',
      role: 'Front-End'
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
