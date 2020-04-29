import { Component } from '@angular/core';
import { Book } from './common/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  books: Book[] = [
    {
      sku: "text-100",
      name: "C Programming Languaje",
      description: "Learn C Programming Languaje",
      unitPrice: 600,
      imageUrl: "assets/image/books/text-100.png",
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updateOn: null,
    },
    {
      sku: "text-101",
      name: "C# Crash Course",
      description: "Learn C# Programming Languaje",
      unitPrice: 900,
      imageUrl: "assets/image/books/text-101.png",
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updateOn: null,
    },
    {
      sku: "text-102",
      name: "C++ Crash Course",
      description: "Learn C++ Programming Languaje",
      unitPrice: 700,
      imageUrl: "assets/image/books/text-102.png",
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updateOn: null,
    }
    
  ]

}
