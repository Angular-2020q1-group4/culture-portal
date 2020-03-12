import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Author } from '@core/models';

@Component({
  selector: 'app-photographer-detail-page',
  templateUrl: './photographer-detail-page.component.html',
  styleUrls: ['./photographer-detail-page.component.scss']
})
export class PhotographerDetailPageComponent implements OnInit {
  public card: Author;

  constructor(
    public route: ActivatedRoute,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.translate.stream('items.' + (id - 1)).subscribe(text => {
      this.card = text;
      console.log(text);
    });
  }

  public goBack(): void {
    history.back();
  }
}
