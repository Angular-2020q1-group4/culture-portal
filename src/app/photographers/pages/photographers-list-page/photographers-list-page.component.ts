import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Author } from '@core/models';
import { PhotographerService } from '@photographers/photographer.service';

@Component({
  selector: 'app-photographers-list-page',
  templateUrl: './photographers-list-page.component.html',
  styleUrls: ['./photographers-list-page.component.scss']
})
export class PhotographersListPageComponent implements OnInit, OnDestroy {
  public authors: Author[] = [];
  private subscription: Subscription;

  constructor(
    private router: Router,
    private photographerService: PhotographerService
  ) {}

  ngOnInit(): void {
    this.subscription = this.photographerService
      .getAuthors()
      .subscribe((authors: Author[]) => {
        this.authors = authors;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
