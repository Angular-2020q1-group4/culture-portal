import { Component, OnInit } from '@angular/core';

import { LanguageSettingsService } from '@shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private languageSettings: LanguageSettingsService) {}

  ngOnInit() {
    this.languageSettings.init();
  }
}
