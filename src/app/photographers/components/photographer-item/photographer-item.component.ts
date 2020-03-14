import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from '@core/models';

@Component({
  selector: 'app-photographer-item',
  templateUrl: './photographer-item.component.html',
  styleUrls: ['./photographer-item.component.scss']
})
export class PhotographerItemComponent implements OnInit {
  @Input() public author: Author;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(id: string): void {
    this.router.navigate(['/photographers', `${id}`]);
  }
}
