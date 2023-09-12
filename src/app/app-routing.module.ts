import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from './app.constants';
import { CartComponent } from './pages/cart/cart.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ProductItemDetailsComponent } from './pages/product-item-details/product-item-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {path: Route.PRODUCTS_ROUTE, component: ProductListComponent},
  {path: Route.PRODUCT_ITEM_ROUTE + '/:id', component: ProductItemDetailsComponent},
  {path: Route.CART_ROUTE, component: CartComponent},
  {path: Route.CONFIRMATION_ROUTE, component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }