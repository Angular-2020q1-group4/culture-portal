import { Component, OnInit } from '@angular/core';
import { Author } from '../../../core/models/author.model';

@Component({
  selector: 'app-photographer-detail-page',
  templateUrl: './photographer-detail-page.component.html',
  styleUrls: ['./photographer-detail-page.component.scss']
})
export class PhotographerDetailPageComponent implements OnInit {
  author = {
    firstName: 'Name',
    middleName: 'MidName',
    lastName: 'LastName',
    birthday: '2020',
    avatarImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    placeOfBirth: 'Minsk'
  } as Author;

  constructor() {}

  ngOnInit(): void {}

  public goBack(): void {
    history.back();
  }
}
