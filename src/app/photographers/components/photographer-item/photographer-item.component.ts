import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../../core/models/author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographer-item',
  templateUrl: './photographer-item.component.html',
  styleUrls: ['./photographer-item.component.scss']
})
export class PhotographerItemComponent implements OnInit {
  @Input() public cardItem: Author;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(id: number): void {
    this.router.navigateByUrl(`/photographers/${id}`);
  }
}
