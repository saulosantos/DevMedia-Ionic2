import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotasPage } from '../pages/notas/notas';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { PrevisaoPage } from '../pages/previsao/previsao';
import { TabsPage } from '../pages/tabs/tabs';
import { WebService} from '../providers/web-service';

@NgModule({
  declarations: [
    MyApp,
    NotasPage,
    DetalhePage,
    PrevisaoPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotasPage,
    DetalhePage,
    PrevisaoPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},WebService]
})
export class AppModule {}
