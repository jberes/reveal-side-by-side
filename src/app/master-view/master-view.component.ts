import { Component } from '@angular/core';
import { RevealViewOptions } from 'reveal-sdk-wrappers';
import { RevealViewComponent } from 'reveal-sdk-wrappers-angular';

@Component({
  selector: 'app-master-view',
  imports: [RevealViewComponent],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  dashboardOptions1: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  constructor() {
    $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
  }
}
