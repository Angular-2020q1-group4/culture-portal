import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Author } from '@core/models/author.model';

@Injectable({ providedIn: 'root' })
export class PhotographerService {
  constructor(private translateService: TranslateService) {}

  getAuthors(): Observable<Author[]> {
    return this.translateService
      .stream('photographers')
      .pipe(filter(value => typeof value !== 'string'));
  }

  getAuthorById(id: string): Observable<Author> {
    return this.getAuthors().pipe(
      map((authors: Author[]) => {
        return authors.find(author => author.id === id);
      })
    );
  }

  getAuthorOfTheDay(): Observable<Author> {
    return this.getAuthors().pipe(
      map((authors: Author[]) => {
        return authors[0];
      })
    );
  }
}
