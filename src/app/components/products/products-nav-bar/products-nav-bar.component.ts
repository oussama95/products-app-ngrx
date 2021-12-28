import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProductsAction, GetSelectedProductsAction, SearchProductAction} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store:Store<any>,private router:Router) { }

  ngOnInit(): void {
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}));

  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductAction(dataForm.keyword));
  }

  newProduct() {
    this.router.navigateByUrl("/newProduct");
  }
}
