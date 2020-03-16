import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Author } from '@core/models';
import { PhotographerService } from '@photographers/services/photographer.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public author: Author;
  private subscription: Subscription;

  constructor(
    private photographerService: PhotographerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.author = this.route.snapshot.data.authorOfTheDay;

    this.subscription = this.photographerService
      .getAuthorOfTheDay()
      .subscribe(author => {
        this.author = author;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
