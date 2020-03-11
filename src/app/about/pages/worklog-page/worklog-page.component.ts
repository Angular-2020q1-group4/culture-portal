import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worklog-page',
  templateUrl: './worklog-page.component.html',
  styleUrls: ['./worklog-page.component.scss']
})
export class WorklogPageComponent implements OnInit {
  totalScore = 0;

  constructor() {}

  ngOnInit(): void {}
}
