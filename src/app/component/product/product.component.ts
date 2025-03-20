import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() name!: string;
  @Input() age!: number;
  @Input() products!: any;

  @Output() deleteId = new EventEmitter;

  renderStatus(state:boolean){
    return state ? "con hang " : "het hang"
  }
  hanldeDelete(id:number){
    this
  }


}
