import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Datos} from '../providers/datos'
import {Bienvenida} from '../pages/bienvenida/bienvenida';
import {Registro} from '../pages/registro/registro';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Registro,
    Bienvenida    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Bienvenida,
    Registro
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Datos,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

