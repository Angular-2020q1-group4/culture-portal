import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-photographer-detail-page',
  templateUrl: './photographer-detail-page.component.html',
  styleUrls: ['./photographer-detail-page.component.scss']
})
export class PhotographerDetailPageComponent implements OnInit {
  public id: number;
  public card: any;

  constructor(
    public route: ActivatedRoute,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.translate
      .stream('items.' + (this.id - 1))
      .subscribe((text: string) => (this.card = text));
  }
}
