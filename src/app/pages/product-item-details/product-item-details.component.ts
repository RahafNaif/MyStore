import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Route } from 'src/app/app.constants';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  product: Product;
  productID: number = 0;
  productsRoute: string = Route.PRODUCTS_ROUTE;
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { 
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      url: ''
    }
  }

  ngOnInit(): void {
    this.getProductID();
    this.getProduct();
  }

  getProductID(){
    this.route.paramMap.subscribe({
      next: (data) => {
        this.productID = Number(data.get('id'));
      },
      error: () => {}
    })
  }

  getProduct(){
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.product = data.filter(product => product.id === this.productID)[0];
      },
      error: () => {}
    });
  }

  addToCart(product: Product){
    this.cartService.addToCart(product, this.quantity, false);
    alert('The product added successfully');
  }

}
