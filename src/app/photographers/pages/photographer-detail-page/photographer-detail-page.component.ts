import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photographer-detail-page',
  templateUrl: './photographer-detail-page.component.html',
  styleUrls: ['./photographer-detail-page.component.scss']
})
export class PhotographerDetailPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public goBack(): void {
    history.back();
  }
}
