import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Product List';
  imageHeight = 30;
  showImage = false;

  // getter and setter for listFilter property
  // tslint:disable-next-line: variable-name
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  // tslint:disable-next-line: max-line-length
  // if we have a listFilter word, we set the filtered list of products to reflect that, by calling the filtering function. if no listFilter word, the list of filtered products contains all the products
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-003',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'GDN-004',
      releaseDate: '18 March 2019',
      description: '15 pounds heavy hammer',
      price: 12.99,
      starRating: 3.2,
      imageUrl: 'assets/images/hammer.png'
    }
  ];

  constructor() {
    this.listFilter = '';
    this.filteredProducts = this.products;
  }

  ngOnInit() {}

  toggleImage = () => (this.showImage = !this.showImage);

  onClickedRating(message: string) {
    this.pageTitle = 'Event:' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (p: IProduct) =>
        p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
