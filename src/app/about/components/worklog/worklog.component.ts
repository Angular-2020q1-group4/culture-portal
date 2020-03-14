import { Component, OnInit, Input } from '@angular/core';
import { WorklogMember } from '@about/models/worklog.model';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {
  @Input() worklogMember: WorklogMember;

  displayedColumns: string[] = ['position', 'task', 'spent'];

  constructor() {}

  ngOnInit() {}
}
