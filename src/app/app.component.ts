import { Component, OnInit } from '@angular/core';

import { LanguageSettingsService } from '@shared/services';

import { routerAnimations } from './shared/animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimations]
})
export class AppComponent implements OnInit {
  constructor(private languageSettings: LanguageSettingsService) {}

  ngOnInit() {
    this.languageSettings.init();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
