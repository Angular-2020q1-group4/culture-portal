import { TranslateLoader } from '@ngx-translate/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

export class FirestoreTransLoader implements TranslateLoader {
  constructor(private db: AngularFireDatabase) {}

  getTranslation(
    lang: string,
    prefix: string = 'translations/'
  ): Observable<any> {
    return this.db.object(`${prefix}/${lang}`).valueChanges();
  }
}
