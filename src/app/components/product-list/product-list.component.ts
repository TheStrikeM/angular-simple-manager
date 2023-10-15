import {Component, OnInit} from '@angular/core';
import ProductService from "../../services/product.service";
import {IProduct} from "../../interfaces/IProduct";
import {categories} from "../../store/products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedValue: any = null
  categories = categories
  currentCategory: any | null = null
  get products() {
    return this.productService.getAllProducts()
  }

  getProductsByFilter(): IProduct[] {
    if (this.selectedValue == null) {
      return this.productService.getAllProducts()
    }
    return this.productService.getProductsByFilter(this.selectedValue)
  }
  constructor(
    private productService: ProductService
  ) {}
}
