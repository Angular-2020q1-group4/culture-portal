import { Injectable } from '@angular/core';
import { WorklogModel } from '@about/models/worklog.model';
import { WorklogData } from '@about/data/worklog-ru';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {
  totalScore = 0;

  worklogData: WorklogModel = WorklogData;

  constructor() {}

  getWorklogData(): WorklogModel {
    return this.worklogData;
  }

  getTotalScore(): number {
    return this.totalScore;
  }

  calculateScore(val: number, event): void {
    const checked = event.checked;
    if (checked) {
      this.totalScore += val;
    } else {
      this.totalScore -= val;
    }
  }
}
