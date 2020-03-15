import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeamMember } from '@about/models';
import { TeamService } from '@about/services/team.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit, OnDestroy {
  title = 'Над проектом работала команда из шести разработчиков:';
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
