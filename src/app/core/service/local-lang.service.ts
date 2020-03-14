import { Injectable } from '@angular/core';

@Injectable()
export class LocalLangService {
  getLanguage(): string {
    if (localStorage) {
      return localStorage['language'] || '';
    } else {
      return '';
    }
  }

  setLanguage(language: string) {
    if (localStorage) {
      localStorage['language'] = language;
    }
  }
}
