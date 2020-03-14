import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'dateTranslate'
})
export class DateTranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: string, pattern: string = 'longDate'): string {
    const datePipe: DatePipe = new DatePipe(this.translate.currentLang);
    return datePipe.transform(value, pattern);
  }
}
