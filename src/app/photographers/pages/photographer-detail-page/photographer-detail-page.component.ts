import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Author } from '@core/models';
import { PhotographerService } from '@photographers/services';
import { ModalComponent } from '@photographers/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

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
    private photographerService: PhotographerService,
    public dialog: MatDialog
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: 'auto',
      width: '80%',
      data: { videoSrc: this.extractVideoId(this.author.galleryVideo[0]) }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getVideoPreview(url: string): string {
    const id = this.extractVideoId(url);
    return `https://img.youtube.com/vi/${id}/0.jpg`;
  }

  private extractVideoId(url: string): string {
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
  }
}
