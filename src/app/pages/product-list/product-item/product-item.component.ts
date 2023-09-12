import { Component, Input, OnInit } from '@angular/core';
import { Route } from 'src/app/app.constants';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  productItemRoute: string = Route.PRODUCT_ITEM_ROUTE;
  quantity: number = 1;

  constructor(private cartService: CartService) { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0
    };
  }

  ngOnInit(): void {
  }

  addToCart(product: Product){
    this.cartService.addToCart(product, this.quantity, false);
    alert('The product added successfully');
  }

}
