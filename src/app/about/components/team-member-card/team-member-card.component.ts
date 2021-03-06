import { Component, Input, OnInit } from '@angular/core';

import { TeamMember } from '@about/models';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss']
})
export class TeamMemberCardComponent implements OnInit {
  githubIcon = '/assets/github.svg';
  telegramIcon = '/assets/telegram.svg';

  @Input() teamMember: TeamMember;
  constructor() {}

  ngOnInit(): void {}
}
