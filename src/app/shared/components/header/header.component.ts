import { Component, OnInit } from '@angular/core';

import {
  LanguageSettingsService,
  LOCALES
} from '@core/services/language-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconUrl = '/assets/camera.svg';

  public languages;
  public currentLanguage;

  navLinks = [
    { path: '/main', label: 'interface.labels.main' },
    { path: '/photographers', label: 'interface.labels.photographers' },
    { path: '/about', label: 'interface.labels.about' }
  ];

  constructor(private localSettings: LanguageSettingsService) {}

  ngOnInit(): void {
    this.languages = this.localSettings.getAllLangs();
    this.currentLanguage = this.localSettings.getLanguage();
  }

  public changeLanguage(lang: LOCALES) {
    this.localSettings.setLanguage(lang);
    this.currentLanguage = lang;
  }
}
