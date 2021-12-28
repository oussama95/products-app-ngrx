import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {NewProductAction, SaveProductAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  state:ProductsState|null=null;
  readonly ProductsStateEnum=ProductsStateEnum;
  constructor(private store:Store<any>,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe(state=>{
      this.state= state.catalogState;
    });
    this.productFormGroup=this.fb.group({
      name:['',Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required]
    });
  }

  onSaveProduct() {
    console.log(this.productFormGroup?.value);
    this.store.dispatch(new SaveProductAction(this.productFormGroup?.value))
  }
}
