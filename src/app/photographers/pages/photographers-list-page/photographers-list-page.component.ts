import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographers-list-page',
  templateUrl: './photographers-list-page.component.html',
  styleUrls: ['./photographers-list-page.component.scss']
})
export class PhotographersListPageComponent implements OnInit {
  cardArray = [1, 2, 3, 5, 6, 8, 9, 1, 3, 8, 1, 2, 3, 5, 6, 8, 9, 1, 3, 8];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
