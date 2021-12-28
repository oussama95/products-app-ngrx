import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  DeleteProductActionError,
  DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess,
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess, NewProductActionSuccess,
  ProductActionTypes,
  ProductsActions, SaveProductActionSuccess,
  SearchProductActionError,
  SearchProductActionSuccess,
  SelectProductActionError,
  SelectProductActionSuccess, UpdateProductActionError, UpdateProductActionSuccess
} from "./products.actions";

@Injectable()
export class ProductsEffects{
  constructor(private productsService:ProductsService,private effectActions:Actions) {
  }
  getAllProductsEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.GET_ALL_PRODUCTS),
      mergeMap((action)=>{return this.productsService.getAllProducts().pipe(
        map((products)=>new GetAllProductsActionSuccess(products)),
        catchError((error)=>of(new GetAllProductsActionError(error.message)))
        )}
      )
    )
  )
  getSelectedProductsEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action)=>{return this.productsService.getSelectedProducts().pipe(
          map((products)=>new GetSelectedProductsActionSuccess(products)),
          catchError((error)=>of(new GetSelectedProductsActionError(error.message)))
        )}
      )
    )
  )
  SelectProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.SELECT_PRODUCT),
      mergeMap((action:ProductsActions)=>{return this.productsService.select(action.payload).pipe(
          map((product)=>
            new SelectProductActionSuccess(product)
          ),
          catchError((error)=>of(new SelectProductActionError(error.message)))
        )}
      )
    )
  )
  SearchProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.SEARCH_PRODUCT),
      mergeMap((action:ProductsActions)=>{return this.productsService.search(action.payload).pipe(
          map((products)=>
            new SearchProductActionSuccess(products)
          ),
          catchError((error)=>of(new SearchProductActionError(error.message)))
        )}
      )
    )
  )
  DeleteProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.DELETE_PRODUCT),
      mergeMap((action:ProductsActions)=>{return this.productsService.delete(action.payload).pipe(
          map((product)=>
            new DeleteProductActionSuccess(action.payload)
          ),
          catchError((error)=>of(new DeleteProductActionError(error.message)))
        )}
      )
    )
  )
  NewProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.NEW_PRODUCT),
          map((action:ProductsActions)=> {
            return new NewProductActionSuccess({});
          })
      )
    )
  SaveProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.SAVE_PRODUCT),
      mergeMap((action:ProductsActions)=>{return this.productsService.save(action.payload).pipe(
          map((product)=>
            new SaveProductActionSuccess(product)
          ),
          catchError((error)=>of(new DeleteProductActionError(error.message)))
        )}
      )
    )
  )
  EditProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.EDIT_PRODUCT),
      mergeMap((action:ProductsActions)=>{return this.productsService.getProduct(action.payload).pipe(
        map((product)=>
          new EditProductActionSuccess(product)
        ),
        catchError((error)=>of(new EditProductActionError(error.message)))
      )}
      )
   )
  )
  UpdateProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.UPDATE_PRODUCT),
      mergeMap((action:ProductsActions)=>{return this.productsService.updateProduct(action.payload).pipe(
          map((product)=>
            new UpdateProductActionSuccess(product)
          ),
          catchError((error)=>of(new UpdateProductActionError(error.message)))
        )}
      )
    )
  )
}
