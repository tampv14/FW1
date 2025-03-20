import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-todolist',
  imports: [CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  job = ""
  Jobs = [
    "An",
    "Ngu",
    "Code"
  ]
  hanldeAddJob () {
    this.Jobs.push(this.job)
    this.job= ""
  }
  hanldeDelete (i:number){
    this.Jobs.splice(i, 1);
    // this.Jobs = this.Jobs.filter((item,i)=> i != i)

  }

}
