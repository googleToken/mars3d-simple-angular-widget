import {AfterViewInit, Component} from '@angular/core';
import {getMapConfig,getWidgetConfig} from '../map/api';
import {createMap, initStaticWidget} from '../map/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  title = 'marsgis-cesium-ng';


  ngAfterViewInit(): void {
    getMapConfig().then(data => {
      // tslint:disable-next-line:prefer-const
      let viewer = createMap('cesiumContainer', data); 
      window['viewer'] = viewer; //绑定到全局，widgets目录用

      getWidgetConfig().then(widgetdata => { 
        initStaticWidget(viewer, widgetdata); 
      });

    });
  }


}
