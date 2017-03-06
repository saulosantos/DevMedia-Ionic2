import { Component } from '@angular/core';

import { NotasPage } from '../notas/notas';
import { PrevisaoPage } from '../previsao/previsao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NotasPage;
  tab2Root: any = PrevisaoPage;

  constructor() {

  }
}
