import {Component, Input} from '@angular/core';
import {ECategory, IProduct} from "../../interfaces/IProduct";
import ProductService from "../../services/product.service";

@Component({
  selector: 'app-product-item-of-list',
  templateUrl: './product-item-of-list.component.html',
  styleUrls: ['./product-item-of-list.component.css']
})
export class ProductItemOfListComponent {
  @Input() product: IProduct
  showDetails: boolean = false

  constructor(private productService: ProductService) {
  }
  onShowDetailsClick() { this.showDetails = !this.showDetails }

  onDeleteItemClick(id: number | undefined) {
    this.productService.removeProduct(id)
  }
}
