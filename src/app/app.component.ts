import {Component, HostListener} from '@angular/core';
import { GetWidthService } from './get-width.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result: any;
  width: number;
  constructor(private getWidthService: GetWidthService) {
    this.result = this.getWidthService.result;
  }
  @HostListener('window:resize')
  onResize() {
      this.resize();
  }

  @HostListener('window:load')
  onLoad() {
      this.resize();
  }
  resize() {
      if (this.width !== window.innerWidth) {
          this.width = window.innerWidth;
          this.getWidthService.getScreenSize(window.innerWidth);
      }
  }
}
