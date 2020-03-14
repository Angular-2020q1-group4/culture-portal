import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorklogService } from '@about/services/worklog.service';
import { TeamUsersService } from '@about/services/team-users.service';
import { Subscription } from 'rxjs';
import { TeamMember } from '@about/models/worklog.model';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  totalScore = 0;
  worklogMembers;
  teamMembers: TeamMember[] = [];

  constructor(
    private worklogService: WorklogService,
    private teamUsers: TeamUsersService
  ) {}

  ngOnInit(): void {
    this.worklogMembers = this.worklogService.getWorklogData();
    this.subscription = this.teamUsers
      .getTeamMembers()
      .subscribe((member: TeamMember[]) => (this.teamMembers = member));
    this.worklogService.totalScore.subscribe(
      value => (this.totalScore = value)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
