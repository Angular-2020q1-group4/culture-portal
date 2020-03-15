import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { WorklogService } from '@about/services/worklog.service';
import { TeamService } from '@about/services/team.service';
import { Evaluation, TeamMember } from '@about/models';
import { EvaluationService } from '@about/services/evaluation.service';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit, OnDestroy {
  private teamSub: Subscription;
  private evalSub: Subscription;

  public teamMembers: TeamMember[] = [];
  public evaluations: Evaluation[] = [];

  totalScore = 0;

  constructor(
    private worklogService: WorklogService,
    private teamService: TeamService,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    this.teamSub = this.teamService.getTeamMembers().subscribe(team => {
      this.teamMembers = team;
    });

    this.evalSub = this.evaluationService
      .getEvaluation()
      .subscribe(evaluations => {
        this.evaluations = evaluations;
      });

    this.worklogService.totalScore.subscribe(
      value => (this.totalScore = value)
    );
  }

  ngOnDestroy(): void {
    this.teamSub.unsubscribe();
    this.evalSub.unsubscribe();
  }
}
