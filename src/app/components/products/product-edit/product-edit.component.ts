import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {EditProductAction, NewProductAction, UpdateProductAction} from "../../../ngrx/products.actions";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  state:ProductsState|null=null;
  id:number;
  readonly ProductsStateEnum=ProductsStateEnum;
  constructor(private store:Store<any>,private fb:FormBuilder,activatedRoute:ActivatedRoute) {
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.id));
    this.store.subscribe(state=>{
      this.state= state.catalogState;
    });
    this.productFormGroup=this.fb.group({
      id:[this.state?.currentProduct?.id,Validators.required],
      name:[this.state?.currentProduct?.name,Validators.required],
      price:[this.state?.currentProduct?.price,Validators.required],
      quantity:[this.state?.currentProduct?.quantity,Validators.required],
      selected:[this.state?.currentProduct?.selected,Validators.required],
      available:[this.state?.currentProduct?.available,Validators.required]
    });
  }

  onUpdateProduct() {
    console.log(this.state?.currentProduct);
    this.store.dispatch(new UpdateProductAction(this.productFormGroup?.value));
  }
}
