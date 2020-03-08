import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  testEntries = [
    {
      title: 'Title 1',
      description: 'Some description here 1',
      year: '2020'
    },
    {
      title: 'Title 2',
      description: 'Some description here 2',
      year: '2020'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
