import { Component, OnInit, Input } from '@angular/core';

import { Author } from '@core/models';

@Component({
  selector: 'app-photographer-item',
  templateUrl: './photographer-item.component.html',
  styleUrls: ['./photographer-item.component.scss']
})
export class PhotographerItemComponent implements OnInit {
  @Input() public author: Author;

  constructor() {}

  ngOnInit(): void {}
}
