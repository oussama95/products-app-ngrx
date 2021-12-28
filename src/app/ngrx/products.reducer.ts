import {Product} from "../model/product.model";
import {ProductActionTypes, ProductsActions} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum{
  LOADING="loading",
  LOADED="Loaded",
  ERROR="Error",
  NEW="New",
  EDIT="Edit",
  INITIAL="Initial"
}
export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductsStateEnum
  currentProduct:Product|null
}
const initState:ProductsState={
  products:[],
  errorMessage:"",
  currentProduct:null,
  dataState:ProductsStateEnum.INITIAL
}
export function productsReducer(state:ProductsState=initState,action:Action):ProductsState{
  switch (action.type){
    case ProductActionTypes.GET_ALL_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_SELECTED_PRODUCTS:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
    case ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.SELECT_PRODUCT:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.SELECT_PRODUCT_SUCCESS:
      let product:Product=(<ProductsActions>action).payload;
      let listProducts:Product[]=[...state.products];
      let data:Product[]=listProducts.map(p=>p.id==product.id?product:p);
      return {...state,dataState:ProductsStateEnum.LOADED,products:data}
    case ProductActionTypes.SELECT_PRODUCT_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.SEARCH_PRODUCT:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.SEARCH_PRODUCT_SUCCESS:
      return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
    case ProductActionTypes.SEARCH_PRODUCT_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.DELETE_PRODUCT:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.DELETE_PRODUCT_SUCCESS:
      let p:Product=(<ProductsActions>action).payload;
      let index=state.products.indexOf(p);
      let listP:Product[]=[...state.products];
      listP.splice(index,1);
      return {...state,dataState:ProductsStateEnum.LOADED,products:listP}
    case ProductActionTypes.DELETE_PRODUCT_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.NEW_PRODUCT:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.NEW_PRODUCT_SUCCESS:
      return {...state,dataState:ProductsStateEnum.NEW}
    case ProductActionTypes.NEW_PRODUCT_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.SAVE_PRODUCT:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.SAVE_PRODUCT_SUCCESS:
      let prods=[...state.products];
      prods.push((<ProductsActions>action).payload);
      return {...state,dataState:ProductsStateEnum.LOADED,products:prods}
    case ProductActionTypes.SAVE_PRODUCT_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.EDIT_PRODUCT:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.EDIT_PRODUCT_SUCCESS:
      return {...state,dataState:ProductsStateEnum.EDIT,currentProduct:(<ProductsActions>action).payload}
    case ProductActionTypes.EDIT_PRODUCT_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    case ProductActionTypes.UPDATE_PRODUCT:
      return {...state,dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.UPDATE_PRODUCT_SUCCESS:
      let updatedProduct=(<ProductsActions>action).payload;
      let listproductsedit=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p);
      console.log(listproductsedit);
      return {...state,dataState:ProductsStateEnum.LOADED,products:listproductsedit}
    case ProductActionTypes.UPDATE_PRODUCT_ERROR:
      return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
    default: return {...state}
  }
}
