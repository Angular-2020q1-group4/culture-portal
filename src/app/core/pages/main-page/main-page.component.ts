import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  welcome = 'Добро пожаловать на культурный портал Беларуси';
  todo = 'Todo';
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}
}
