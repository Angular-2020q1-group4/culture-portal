import { Injectable, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Evaluation } from '@about/models';

@Injectable({ providedIn: 'root' })
export class EvaluationService {
  @Output() totalScore: EventEmitter<number> = new EventEmitter();

  score = 0;

  constructor(private translateService: TranslateService) {}

  getEvaluation(): Observable<Evaluation[]> {
    return this.translateService
      .stream('evaluation')
      .pipe(filter(value => typeof value !== 'string'));
  }

  calculateScore(val: number, isChecked: boolean): void {
    if (isChecked) {
      this.score += val;
      this.totalScore.emit(this.score);
    } else {
      this.score -= val;
      this.totalScore.emit(this.score);
    }
  }
}
