import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//Pages
import { ConfigPage } from '../pages/config/config';
import { PanelPage } from '../pages/panel/panel';
import { VariousReleasesPage } from '../pages/various-releases/various-releases';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  config:Object    = ConfigPage;
  panel:Object     = PanelPage;
  various_releases = VariousReleasesPage;
  rootPage:Object  = this.various_releases;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  rootNavigation(page){
    this.rootPage = page;
  }
}
