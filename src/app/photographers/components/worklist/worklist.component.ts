import { Component, OnInit, Input } from '@angular/core';

import { Event } from '@core/models';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.scss']
})
export class WorklistComponent implements OnInit {
  tableColumns: string[] = ['date', 'title'];
  @Input() workList: Event[];
  constructor() {}

  ngOnInit(): void {}
}
