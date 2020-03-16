import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Author } from '@core/models';
import { PhotographerService } from '@photographers/services';

@Component({
  selector: 'app-photographer-detail-page',
  templateUrl: './photographer-detail-page.component.html',
  styleUrls: ['./photographer-detail-page.component.scss']
})
export class PhotographerDetailPageComponent implements OnInit, OnDestroy {
  public author: Author;
  private subscription: Subscription;
  imageObjects: Array<{}> = [];

  constructor(
    public route: ActivatedRoute,
    private photographerService: PhotographerService
  ) {}

  ngOnInit(): void {
    this.author = this.route.snapshot.data.author;
    this.author.galleryImages.forEach(im =>
      this.imageObjects.push({ image: im, thumbImage: im })
    );

    this.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public goBack(): void {
    history.back();
  }

  private subscribe() {
    const id = this.route.snapshot.params.id;
    this.subscription = this.photographerService
      .getAuthorById(id)
      .subscribe(author => {
        this.author = author;
        author.galleryImages.forEach(im =>
          this.imageObjects.push({ image: im, thumbImage: im })
        );
      });
  }
}
