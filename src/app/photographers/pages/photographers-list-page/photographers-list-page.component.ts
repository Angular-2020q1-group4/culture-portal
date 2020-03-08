import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from '../../../core/data/photographers';
import { Author } from '../../../core/models/author.model';

@Component({
  selector: 'app-photographers-list-page',
  templateUrl: './photographers-list-page.component.html',
  styleUrls: ['./photographers-list-page.component.scss']
})
export class PhotographersListPageComponent implements OnInit {
  public cardArray: Author[] = response;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
