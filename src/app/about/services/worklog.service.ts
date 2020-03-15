import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {
  @Output() totalScore: EventEmitter<number> = new EventEmitter();

  score = 0;

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
