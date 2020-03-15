import { Component, OnInit, Input } from '@angular/core';

import { WorklogService } from '@about/services/worklog.service';
import { Evaluation } from '@about/models';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  @Input() evaluation: Evaluation;

  constructor(private worklogService: WorklogService) {}

  ngOnInit(): void {}

  onToggle(val: number, event) {
    this.worklogService.calculateScore(val, event);
  }
}
