import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Product List';
  products: any[] = [
    {
      prodId: 2,
      prodName: 'Garden Cart',
      prodCode: 'GDN-003',
      releaseDate: '13 March 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      rating: 4.2,
      imageUrl: 'assets/image/garden_cart.png'
    },
    {
      prodId: 5,
      prodName: 'Hammer',
      prodCode: 'GDN-004',
      releaseDate: '18 March 2019',
      description: '15 pounds heavy hammer',
      price: 12.99,
      rating: 3.2,
      imageUrl: 'assets/image/hammer.png'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
