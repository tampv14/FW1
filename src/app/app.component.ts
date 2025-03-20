import { Component } from '@angular/core';
import { HeaderComponet } from "./component/header/header.component";
import { UseComponent } from "./component/use/use.component";
import {TodolistComponent} from "./component/todolist/todolist.component";
import { ProductComponent } from "./component/product/product.component";

@Component({
  selector: 'app-root',
  imports: [ ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'FW1-WD19319';
  myName = "tampvh50549"
  myAge = 20
  products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35000000,
      inStock: true,
      category: 'LT',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'iPhone 14 Pro Max',
      price: 29000000,
      inStock: false,
      category: 'MB',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23',
      price: 22000000,
      inStock: true,
      category: 'MB',
      rating: 4.6,
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM4',
      inStock: true,
      category: 'PK',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Bàn phím cơ Keychron K8',
      price: 2500000,
      inStock: false,
      category: 'PK',
      rating: 4.3,
    },
  ];
  data = {
    name: "7 co",
    age: 20,
    gender: true,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    description: "Yêu màu tím",
    linkFB: "https://google.com"
  }
  renderGender():string{
    return this.data.gender ? "nam" :"nu"
  }
}
