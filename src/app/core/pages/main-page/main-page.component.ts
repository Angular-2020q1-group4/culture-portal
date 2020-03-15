import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { PhotographerService } from '@photographers/photographer.service';
import { Subscription } from 'rxjs';
import { Author } from '@core/models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public author: Author;
  private subscription: Subscription;

  constructor(public photographerService: PhotographerService) {}

  ngOnInit(): void {
    this.subscription = this.photographerService
      .getAuthorOfTheDay()
      .subscribe(author => {
        this.author = author;
      });
    console.log(this.author);
  }

  ngOnDestroy(): void {}
}
