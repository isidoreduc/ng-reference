import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/model/product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  pageTitle = "Product List";
  imageHeight = 30;
  showImage = false;
  listFilter = "cart";
  products: IProduct[] = [
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-003",
      releaseDate: "March 18, 2019",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "assets/images/garden_cart.png"
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "GDN-004",
      releaseDate: "18 March 2019",
      description: "15 pounds heavy hammer",
      price: 12.99,
      starRating: 3.2,
      imageUrl: "assets/images/hammer.png"
    }
  ];
  constructor() {}

  ngOnInit() {}

  toggleImage = () => (this.showImage = !this.showImage);
}
