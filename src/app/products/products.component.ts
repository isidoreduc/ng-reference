import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductService } from '../services/product.service';

@Component({
  // selector: 'app-products',
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
  products: IProduct[] = [];
  errorMessage = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: prods => {
        this.products = prods;
        // we need to assign this inside the subscription, otherwise it does not wait for the data, and be empty
        this.filteredProducts = this.products;
      },
      error: err => (this.errorMessage = err)
    });
  }

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
