import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Author } from '@core/models';
import { PhotographerService } from '@photographers/services/photographer.service';
import { SearchService } from '@core/services/search.service';

@Component({
  selector: 'app-photographers-list-page',
  templateUrl: './photographers-list-page.component.html',
  styleUrls: ['./photographers-list-page.component.scss']
})
export class PhotographersListPageComponent implements OnInit, OnDestroy {
  public authors: Author[] = [];
  private subscription: Subscription;
  keyWord = '';

  constructor(
    private photographerService: PhotographerService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.subscription = this.photographerService
      .getAuthors()
      .subscribe((authors: Author[]) => {
        this.authors = authors;
      });

    this.searchService.searchWord.subscribe(word => (this.keyWord = word));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
