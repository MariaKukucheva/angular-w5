import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { TodayService } from '../services/today.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css',
  providers: [HttpClientModule]
})
export class TodayComponent implements OnInit {
  todayS=inject(TodayService);
  names: string = "";
  day: number = 0;
  month: number = 0;

  yes = false;
  no = false;

  constructor() {}

  ngOnInit(){
    return this.getNames();
  }
  getNames(): void {
   this.todayS.getNameday().subscribe((response: any) => {
     this.day = response.day;
      this.month = response.month;
      this.names = response.nameday["bg"];

      if (this.names && this.names.length > 0) {
        this.yes = true;
        this.no = false;
      } else {
        this.yes = false;
        this.no = true;
      }
    }, error => {
      console.error('Error:', error); 
      this.yes = false;
      this.no = true;
    });
  }

  
}
