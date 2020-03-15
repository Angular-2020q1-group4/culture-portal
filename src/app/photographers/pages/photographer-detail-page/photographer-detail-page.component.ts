import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Author } from '@core/models';
import { PhotographerService } from '@photographers/photographer.service';

@Component({
  selector: 'app-photographer-detail-page',
  templateUrl: './photographer-detail-page.component.html',
  styleUrls: ['./photographer-detail-page.component.scss']
})
export class PhotographerDetailPageComponent implements OnInit, OnDestroy {
  public author: Author;
  private subscription: Subscription;

  constructor(
    public route: ActivatedRoute,
    public photographerService: PhotographerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.subscription = this.photographerService
      .getAuthorById(id)
      .subscribe(author => {
        this.author = author;
      });
    console.log(this.author);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public goBack(): void {
    history.back();
  }
}
