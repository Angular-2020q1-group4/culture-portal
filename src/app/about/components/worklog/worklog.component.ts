import { Component, OnInit, Input } from '@angular/core';

import { TeamMember } from '@about/models';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {
  @Input() teamMember: TeamMember;

  displayedColumns: string[] = ['position', 'task', 'spent'];

  constructor() {}

  ngOnInit() {}
}
