import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';
import localeEn from '@angular/common/locales/en';
import localeRu from '@angular/common/locales/ru';
import localeBe from '@angular/common/locales/be';

export enum LOCALES {
  'ru' = 'ru',
  'en' = 'en',
  'be' = 'be'
}

@Injectable({ providedIn: 'root' })
export class LanguageSettingsService {
  private languages = [LOCALES.ru, LOCALES.en, LOCALES.be];
  private defaultLanguage = LOCALES.ru;

  constructor(private translateService: TranslateService) {}

  public init() {
    this.translateService.addLangs(this.languages);
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.registerLocales();

    const language = this.getLanguage()
      ? this.getLanguage()
      : this.defaultLanguage;

    this.setLanguage(language);
  }

  public setLanguage(lang: LOCALES) {
    this.translateService.use(lang);
    this.storeLanguage(lang);
  }

  public getLanguage() {
    return LOCALES[this.getStoredLanguage()];
  }

  public getAllLangs() {
    return this.languages;
  }

  private storeLanguage(lang: LOCALES) {
    localStorage.setItem('language', lang);
  }

  private getStoredLanguage() {
    return localStorage.getItem('language');
  }

  private registerLocales() {
    registerLocaleData(localeEn, LOCALES.en);
    registerLocaleData(localeRu, LOCALES.ru);
    registerLocaleData(localeBe, LOCALES.be);
  }
}
