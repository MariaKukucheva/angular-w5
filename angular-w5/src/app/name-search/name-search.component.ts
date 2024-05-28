import { Component, Input,inject, model } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NameServiceService } from '../services/name-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-search.component.html',
  styleUrl: './name-search.component.css',
  providers:[HttpClientModule]
})
export class NameSearchComponent {

  nameS=inject(NameServiceService);
  day: number = 0;
  month: number = 0;
  inputName: string = '';

  no=false;
  yes=false;
  constructor() {}

  processInputName(event: any) {
    this.inputName = event.target.value;   
  }

  getName(name:string):void{
      this.nameS.getNameday(name).subscribe((response: any) => {
        const nameday = response[0][0];
        if (nameday && nameday.day) {
          this.yes = true;
          this.day = nameday.day;
          this.month = nameday.month;
          
        } else {
          this.no = true;
        }
      }, error => {
        console.error('Error:', error);
        this.no = true;
      
    })
  }

  nameBtn(): void{
    this.no=false;
    this.yes=false;
    this.getName(this.inputName);
  }
}
