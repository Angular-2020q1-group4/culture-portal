import { Component, OnDestroy, OnInit } from '@angular/core';
import { WorklogService } from '@about/services/worklog.service';
import { Subscription } from 'rxjs';
import { TeamService } from '@about/services/team.service';
import { TeamMember } from '@about/models';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public teamMembers: TeamMember[] = [];

  totalScore = 0;
  worklogMembers;

  constructor(
    private worklogService: WorklogService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.subscription = this.teamService.getTeamMembers().subscribe(team => {
      this.teamMembers = team;
    });

    this.worklogMembers = this.worklogService.getWorklogData();
    this.worklogService.totalScore.subscribe(
      value => (this.totalScore = value)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
