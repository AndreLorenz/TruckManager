import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { CompanySlider } from '../pages/company/company';
import { CompanyService } from '../providers/company-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  companyService: CompanyService;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, companyService: CompanyService) {
    this.companyService = companyService;
    platform.ready().then(() => {
      this.companyService.countCompany().then(res => {
        if (!res) this.rootPage = CompanySlider;
        else this.rootPage = TabsPage;
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
