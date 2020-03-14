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
  public ready: boolean = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.stream('photographers').subscribe((authors: Author[]) => {
      this.authors = authors;
      if (typeof this.authors !== 'string') {
        this.ready = true;
      }
    });
  }

  ngOnInit(): void {}

  onClick(id: number) {
    this.router.navigateByUrl(`/photographers/${id}`);
  }
}
