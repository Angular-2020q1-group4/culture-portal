import { LanguageSettingsService, LOCALES } from '@shared/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-menu',
  templateUrl: './language-menu.component.html'
})
export class LanguageMenuComponent implements OnInit {
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
