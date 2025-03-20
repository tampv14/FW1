import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-use',
  imports: [CommonModule],
  templateUrl: './use.component.html',
  styleUrl: './use.component.css'
})
export class UseComponent {
  users = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      age: 25,
      gender: true,
      isActive: true,
      role: 'admin',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      email: 'tranthib@example.com',
      age: 30,
      gender: false,
      isActive: false,
      role: 'admin',
    },
    {
      id: 3,
      name: 'Lê Văn C',
      email: 'levanc@example.com',
      age: 22,
      gender: true,
      isActive: true,
      role: 'member',
    },
  ];

}
