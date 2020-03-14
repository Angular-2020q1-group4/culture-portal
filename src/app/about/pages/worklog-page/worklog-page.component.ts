import { Component, OnInit } from '@angular/core';
import { WorklogService } from '@about/services/worklog.service';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit {
  totalScore;
  worklogMembers;

  constructor(private worklogService: WorklogService) {}

  ngOnInit(): void {
    this.worklogMembers = this.worklogService.getWorklogData();
    this.totalScore = this.worklogService.getTotalScore();
  }
}
