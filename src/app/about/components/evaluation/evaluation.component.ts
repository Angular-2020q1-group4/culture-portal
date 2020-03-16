import { Component, OnInit, Input } from '@angular/core';

import { Evaluation } from '@about/models';
import { EvaluationService } from '@about/services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  @Input() evaluation: Evaluation;

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit(): void {}

  onToggle(val: number, event) {
    this.evaluationService.calculateScore(val, event.checked);
  }
}
