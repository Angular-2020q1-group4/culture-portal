import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  title = 'Над проектом работала команда из шести разработчиков:';

  constructor() {}

  ngOnInit(): void {}
}
