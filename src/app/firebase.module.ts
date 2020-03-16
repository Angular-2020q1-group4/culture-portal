import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FirestoreTransLoader } from '@shared/firestore-trans-loader';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule
} from 'angularfire2/database';

export function FbTransLoaderFactory(db: AngularFireDatabase) {
  return new FirestoreTransLoader(db);
}

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: FbTransLoaderFactory,
        deps: [AngularFireDatabase]
      }
    })
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    TranslateModule
  ]
})
export class FirebaseModule {}
