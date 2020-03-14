import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import localeRu from '@angular/common/locales/ru';
import localeBe from '@angular/common/locales/be';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    registerLocaleData(localeRu, 'ru');
    registerLocaleData(localeBe, 'be');
  }
}
