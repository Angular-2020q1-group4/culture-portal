import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Evaluation } from '@about/models';

@Injectable({ providedIn: 'root' })
export class EvaluationService {
  constructor(private translateService: TranslateService) {}

  getEvaluation(): Observable<Evaluation[]> {
    return this.translateService
      .stream('evaluation')
      .pipe(filter(value => typeof value !== 'string'));
  }
}
