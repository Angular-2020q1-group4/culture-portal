import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../../core/models/author.model';

@Component({
  selector: 'app-photographer-card',
  templateUrl: './photographer-card.component.html',
  styleUrls: ['./photographer-card.component.scss']
})
export class PhotographerCardComponent implements OnInit {
  @Input() public author: Author;
  constructor() {}

  ngOnInit(): void {}
}
