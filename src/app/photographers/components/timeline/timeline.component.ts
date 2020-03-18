import { Component, OnInit, Input } from '@angular/core';

import { Event } from '@core/models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() biography: Event[];
  bio: Event[];

  constructor() {}

  ngOnInit(): void {
    this.bio = this.biography.map(item => ({
      firstDate: new Date(item.firstDate),
      lastDate: item.lastDate && new Date(item.lastDate),
      title: item.title
    }));
  }
}
