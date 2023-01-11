import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  backgroundColor?: string='Red';

  pickColor(color: any) {
    this.backgroundColor = color;
  }
}
