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

  yes=false;
  constructor() {}

  processInputName(event: any) {
    this.inputName = event.target.value;   
  }

  getName(name:string):void{
      this.nameS.getNameday(name).subscribe((response: any) => {
        var nameday = response[0][0];       
        var splitted = nameday.name.split(", ", 100);
        if (splitted.indexOf(name) > -1) {
          this.yes = true;
          this.day = nameday.day;
          this.month = nameday.month;
          
        } else {
          this.yes = false;
        }
      })
  }
  nameBtn(): void{
    this.yes=false;
    this.getName(this.inputName);
  }
}
