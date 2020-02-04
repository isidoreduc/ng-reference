import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ConvertToSpacesPipe, StarComponent, ProductDetailComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
