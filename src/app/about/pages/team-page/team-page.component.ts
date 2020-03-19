import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TeamService } from '@about/services';
import { TeamMember } from '@about/models';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit, OnDestroy {
  private teamSub: Subscription;
  public teamMembers: TeamMember[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamSub = this.teamService.getTeamMembers().subscribe(team => {
      this.teamMembers = team;
    });
  }

  ngOnDestroy(): void {
    this.teamSub.unsubscribe();
  }
}
