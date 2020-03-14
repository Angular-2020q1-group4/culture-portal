import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../core/models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() biography: Event[];

  constructor() {}

  ngOnInit(): void {}
}
