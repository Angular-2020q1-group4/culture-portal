import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Author } from '@core/models';

@Component({
  selector: 'app-photographers-list-page',
  templateUrl: './photographers-list-page.component.html',
  styleUrls: ['./photographers-list-page.component.scss']
})
export class PhotographersListPageComponent implements OnInit {
  public authors: Author[] = [];

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.stream('photographers').subscribe((authors: Author[]) => {
      this.authors = authors;
      console.log(authors);
    });
  }
}
