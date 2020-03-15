import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule
} from 'angularfire2/database';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FirestoreTransLoader } from '@shared/firestore-trans-loader';

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
