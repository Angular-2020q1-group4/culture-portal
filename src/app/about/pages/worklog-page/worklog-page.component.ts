import { Component, OnInit } from '@angular/core';
import { WorklogMember } from '@about/models/worklog-member';
import { MembersWorklogList } from '../../members';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit {
  worklogList: WorklogMember[] = MembersWorklogList;

  constructor() {}

  ngOnInit(): void {}
}
