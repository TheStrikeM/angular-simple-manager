import {Injectable} from "@angular/core";
import {ECategory, IProduct, IProductWithoutId} from "../interfaces/IProduct";
import {categories, products} from "../store/products";
import * as uuid from 'uuid';

@Injectable({
  providedIn: "root"
})
export default class ProductService {
  private products: IProduct[] = products

  getProductById(id: number): IProduct | undefined {
    for (let i = 0; i < products.length; i++) if (this.products[i].id == id) return this.products[i];
    return undefined;
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductsByFilter(selectedCategory: any): IProduct[] {
    if (selectedCategory == ECategory.ALL.toString()) {
      return this.getAllProducts()
    }
    return this.products.filter(el => el.category == selectedCategory)
  }

  // NewGetProductByFilter(selectedCategory: any, priceFilter: () => string): IProduct[] {
  //
  // }

  addNewProduct(item: IProductWithoutId): IProduct {
    const newProduct: IProduct = {
      id: uuid.v4(),
      ...item
    }
    this.products.unshift(newProduct)
    return newProduct
  }

  removeProduct(id: number | undefined) {
    this.products = this.products.filter(product => product.id != id)
    console.log("success", this.products)
  }
}
