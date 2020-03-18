import { Component, OnInit } from '@angular/core';

import { LanguageSettingsService, LOCALES } from '@shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconUrl = '/assets/camera.svg';

  navLinks = [
    { path: '/main', label: 'interface.labels.main' },
    { path: '/photographers', label: 'interface.labels.photographers' },
    { path: '/about', label: 'interface.labels.about' }
  ];

  public languages;
  public currentLanguage;

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
