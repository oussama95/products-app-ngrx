import { Action } from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductActionTypes{
  GET_ALL_PRODUCTS="[Product] Get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Product] Get All products Success",
  GET_ALL_PRODUCTS_ERROR="[Product] Get All products Error",
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Product] Get Selected products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Product] Get Selected products Error",
  SELECT_PRODUCT="[Product] Select product",
  SELECT_PRODUCT_SUCCESS="[Product] Select product Success",
  SELECT_PRODUCT_ERROR="[Product] Select product Error",
  SEARCH_PRODUCT="[Product] Search products",
  SEARCH_PRODUCT_SUCCESS="[Product] Search products Success",
  SEARCH_PRODUCT_ERROR="[Product] Search products Error",
  DELETE_PRODUCT="[Product] Delete products",
  DELETE_PRODUCT_SUCCESS="[Product] Delete products Success",
  DELETE_PRODUCT_ERROR="[Product] Delete products Error",
  NEW_PRODUCT="[Product] New product",
  NEW_PRODUCT_SUCCESS="[Product] New product Success",
  NEW_PRODUCT_ERROR="[Product] New product Error",
  SAVE_PRODUCT="[Product] Save product",
  SAVE_PRODUCT_SUCCESS="[Product] Save product Success",
  SAVE_PRODUCT_ERROR="[Product] Save product Error",
  EDIT_PRODUCT="[Product] Edit product",
  EDIT_PRODUCT_SUCCESS="[Product] Edit product Success",
  EDIT_PRODUCT_ERROR="[Product] Edit product Error",
  UPDATE_PRODUCT="[Product] Update product",
  UPDATE_PRODUCT_SUCCESS="[Product] Update product Success",
  UPDATE_PRODUCT_ERROR="[Product] Update product Error"
}

export class GetAllProductsAction implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetAllProductsActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}
export class GetAllProductsActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}
export class GetSelectedProductsAction implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetSelectedProductsActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}
export class GetSelectedProductsActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}
export class SelectProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.SELECT_PRODUCT;
  constructor(public payload:Product) {
  }
}
export class SelectProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}
export class SelectProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}
export class SearchProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.SEARCH_PRODUCT;
  constructor(public payload:string) {
  }
}
export class SearchProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.SEARCH_PRODUCT_SUCCESS;
  constructor(public payload:any) {
  }
}
export class SearchProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.SEARCH_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}
export class DeleteProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.DELETE_PRODUCT;
  constructor(public payload:Product) {
  }
}
export class DeleteProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}
export class DeleteProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}
export class NewProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.NEW_PRODUCT;
  constructor(public payload:any) {
  }
}
export class NewProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload:any) {
  }
}
export class NewProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.NEW_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}
export class SaveProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.SAVE_PRODUCT;
  constructor(public payload:Product) {
  }
}
export class SaveProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}
export class SaveProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}
export class EditProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.EDIT_PRODUCT;
  constructor(public payload:number) {
  }
}
export class EditProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload:any) {
  }
}
export class EditProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.EDIT_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}
export class UpdateProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.UPDATE_PRODUCT;
  constructor(public payload:any) {
  }
}
export class UpdateProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload:any) {
  }
}
export class UpdateProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}
export type ProductsActions = GetAllProductsAction|GetAllProductsActionSuccess|GetAllProductsActionError
                              |GetSelectedProductsAction|GetSelectedProductsActionSuccess|GetSelectedProductsActionError
                              |SelectProductAction|SelectProductActionSuccess|SelectProductActionError
                              |SearchProductAction|SearchProductActionSuccess|SearchProductActionError
                              |DeleteProductAction|DeleteProductActionSuccess|DeleteProductActionError
                              |NewProductAction|NewProductActionSuccess|NewProductActionError
                              |SaveProductAction|SaveProductActionSuccess|SaveProductActionError
                              |EditProductAction|EditProductActionSuccess|EditProductActionError
                              |UpdateProductAction|UpdateProductActionSuccess|UpdateProductActionError;
