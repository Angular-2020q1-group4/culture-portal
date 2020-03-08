import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../../core/models/author.model';

@Component({
  selector: 'app-photographer-item',
  templateUrl: './photographer-item.component.html',
  styleUrls: ['./photographer-item.component.scss']
})
export class PhotographerItemComponent implements OnInit {
  @Input() public cardItem: Author;

  constructor() {}

  ngOnInit(): void {}
}
