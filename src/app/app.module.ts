import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {
  AngularFirestore,
  AngularFirestoreModule
} from '@angular/fire/firestore';
//import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirestoreTransLoader } from './shared/firestore-trans-loader';
import { FirestoreMissingTranslationHandler } from '@shared/firestore-missing-translation-handler';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

/*
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


export function FirestoreTranslationsLoaderFactory(db: AngularFirestore) {
  return new FirestoreTransLoader(db);
}
*/

export function FbTransLoaderFactory(db: AngularFireDatabase) {
  return new FirestoreTransLoader(db);
}
/*
export function MissingTranslationHandlerFactory(http: HttpClient) {
  return new FirestoreMissingTranslationHandler(http);
}
*/
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,

    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: FbTransLoaderFactory,
        deps: [AngularFireDatabase]
      }
      /*
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useFactory: MissingTranslationHandlerFactory,
        deps: [HttpClient]
      }
*/
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
