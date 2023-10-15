import { Component } from '@angular/core';
import {ECategory, IProductWithoutId} from "../../interfaces/IProduct";
import ProductService from "../../services/product.service";
import {categories} from "../../store/products";

export interface ICategory {
  id: ECategory | undefined,
  name: string | undefined
}
@Component({
  selector: 'app-product-create-form',
  templateUrl: './product-create-form.component.html',
  styleUrls: ['./product-create-form.component.css']
})
export class ProductCreateFormComponent {
  selectedValue: any = null
  categories = categories

  constructor(private productService: ProductService) {
  }
  refactorToIProduct(name: string, description: string, price: number, category: ECategory, isGood = false): IProductWithoutId {
    return {name: name, description: description, price: price, category: category, isGood: isGood}
  }
  addNewProduct(product: IProductWithoutId): void {
    this.productService.addNewProduct(product)
    console.log("success added", this.productService.getAllProducts())
  }

  protected readonly Number = Number;
}
