import { Component, OnInit } from '@angular/core';
import {
  LanguageSettingsService,
  LOCALES
} from '@shared/services/language-settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
