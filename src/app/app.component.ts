import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webpackTest';
  isChanged = false;

  clickIsChanged() {
    this.isChanged = this.isChanged ? false: true;
  }
}
