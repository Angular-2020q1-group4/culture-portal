import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';

import { Author } from '@core/models';
import { PhotographerService } from '@photographers/services/photographer.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PhotographerResolver implements Resolve<Author> {
  constructor(private photographerService: PhotographerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Author> | Promise<Author> | Author {
    return this.photographerService
      .getAuthorById(route.paramMap.get('id'))
      .pipe(take(1));
  }
}
