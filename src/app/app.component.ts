import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clockHour: number = 1;
  clockMin: number = 1;
  clockSec: number = 1;

  ngOnInit(): void {
    setInterval( () => this.clockSec ++, 1000);
  }

}
