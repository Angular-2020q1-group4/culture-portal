import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { Evaluation, Scope } from '@about/models';

@Injectable({ providedIn: 'root' })
export class EvaluationService {
  totalScore = new BehaviorSubject<number>(0);
  private score = 0;

  constructor(private translateService: TranslateService) {}

  getEvaluation(): Observable<Evaluation[]> {
    return this.translateService.stream('evaluation').pipe(
      filter(value => typeof value !== 'string'),
      tap(value => this.setInitialScore(value))
    );
  }

  calculateScore(val: number, isChecked: boolean): void {
    if (isChecked) {
      this.setScore(this.score + val);
    } else {
      this.setScore(this.score - val);
    }
  }

  setInitialScore(evaluations: Evaluation[]) {
    this.setScore(0);

    let scopes: Scope[] = [];

    evaluations.forEach(evaluation => {
      scopes = [...scopes, ...evaluation.scope];
    });

    scopes
      .filter(scope => scope.done)
      .forEach(scp => this.calculateScore(scp.point, scp.done));
  }

  setScore(score: number) {
    this.score = score;
    this.totalScore.next(this.score);
  }
}
