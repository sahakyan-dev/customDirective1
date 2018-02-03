import {Injectable} from '@angular/core';

@Injectable()

export class GetWidthService {
  state: string;
  config: object = {
    small: 768,
    medium: 992,
    large: 1200
  };
  result: object = {
    small: false,
    medium: false,
    large: false
  };
  constructor() { }
  getScreenSize(width) {
    if (width < this.config['small'] && this.state !== 'small') {
        this.result[this.state] = false;
        this.result['small'] = true;
        this.state = 'small';
    } else if (this.config['small'] <= width && width < this.config['medium'] && this.state !== 'medium') {
        this.result[this.state] = false;
        this.result['medium'] = true;
        this.state = 'medium';
    } else if (this.config['medium'] <= width && this.state !== 'large') {
        this.result[this.state] = false;
        this.result['large'] = true;
        this.state = 'large';
    }
  }
}
