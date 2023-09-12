import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Route } from 'src/app/app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  productsRoute: string = Route.PRODUCTS_ROUTE;
  cartRoute: string = Route.CART_ROUTE;

  constructor() { }

  ngOnInit(): void {
  }

}
