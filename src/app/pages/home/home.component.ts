import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as Colors from '@pxblue/colors';
import { ViewportService } from '../../services/viewport.service';
import * as Highcharts from 'highcharts';
import { LineChartOptions } from './charts/line-chart';
import {AreaChartOptions} from "./charts/area-chart";
import {BarChartOptions} from "./charts/bar-chart";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    HC: typeof Highcharts = Highcharts; // required

    // https://www.highcharts.com/demo
    lineChartOptions = LineChartOptions;
    areaChartOptions = AreaChartOptions;
  barChartOptions = BarChartOptions;

    colors = Colors;
    height = 400;
    width = 300;
    padding = 32 * 2;

    constructor(private readonly _viewportService: ViewportService, private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
      this.resize();
      window.onresize = (): void => {
        this.resize();
      }
    }

    resize(): void {
      this.height = document.body.clientHeight - 64 - this.padding;
      this.width = document.body.clientWidth - this.padding;
      this.height = Math.min(400, this.height);
      this.width = Math.min(900, this.width);
      this._ref.detectChanges();
      setTimeout(() => {});
    }

    isSmall(): boolean {
        return this._viewportService.isSmall();
    }
}
