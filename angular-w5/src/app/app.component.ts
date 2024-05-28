import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { NameSearchComponent } from './name-search/name-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodayComponent, NameSearchComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-w5';

  today : boolean = false;
  name : boolean = false;
  switchC : string = "";

  startToday()
  {
    this.switchC = 'today';
  }
  startName()
  {
    this.switchC = 'name';
  }
}
