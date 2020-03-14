import { Injectable, Output, EventEmitter } from '@angular/core';
import { WorklogModel } from '@about/models/worklog.model';
import { WorklogData } from '@about/data/worklog-ru';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {
  @Output() totalScore: EventEmitter<number> = new EventEmitter();

  score = 0;

  worklogData: WorklogModel = WorklogData;

  constructor(private translateService: TranslateService) {}

  getWorklogData(): WorklogModel {
    return this.worklogData;
  }

  calculateScore(val: number, event): void {
    const checked = event.checked;
    if (checked) {
      this.score += val;
      this.totalScore.emit(this.score);
    } else {
      this.score -= val;
      this.totalScore.emit(this.score);
    }
  }
}
