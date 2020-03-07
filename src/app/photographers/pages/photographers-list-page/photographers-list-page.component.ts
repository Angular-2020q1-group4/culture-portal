import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photographers-list-page',
  templateUrl: './photographers-list-page.component.html',
  styleUrls: ['./photographers-list-page.component.scss']
})
export class PhotographersListPageComponent implements OnInit {
  cardArray = [1, 2, 3, 5, 6];

  constructor() {}

  ngOnInit(): void {}
}
