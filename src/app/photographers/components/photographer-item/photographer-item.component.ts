import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../../core/models/author.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-photographer-item',
  templateUrl: './photographer-item.component.html',
  styleUrls: ['./photographer-item.component.scss']
})
export class PhotographerItemComponent implements OnInit {
  @Input() public cardItem: Author;
  @Input() public itemDate;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
