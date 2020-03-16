import { AngularFireDatabase } from 'angularfire2/database';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class FirestoreTransLoader implements TranslateLoader {
  constructor(private db: AngularFireDatabase) {}

  getTranslation(
    lang: string,
    prefix: string = 'translations/'
  ): Observable<any> {
    return this.db.object(`${prefix}/${lang}`).valueChanges();
  }
}
