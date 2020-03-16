import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { Author } from '@core/models/author.model';

@Injectable({ providedIn: 'root' })
export class PhotographerService {
  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {}

  getAuthors(): Observable<Author[]> {
    return this.translateService
      .stream('photographers')
      .pipe(filter(value => typeof value !== 'string'));
  }

  getAuthorById(id: string): Observable<Author> {
    return this.getAuthors().pipe(
      map((authors: Author[]) => {
        const authorById = authors.find(author => author.id === id);

        if (!authorById) {
          this.navigateToErrorPage();
        }

        return authorById;
      })
    );
  }

  getAuthorOfTheDay(): Observable<Author> {
    const date = new Date().getDate();

    return this.getAuthors().pipe(
      map((authors: Author[]) => {
        if (authors.length === 0) {
          this.navigateToErrorPage();
        }

        const id = date % authors.length;

        return authors[id];
      })
    );
  }

  private navigateToErrorPage() {
    this.router.navigate(['/not-found']);
  }
}
