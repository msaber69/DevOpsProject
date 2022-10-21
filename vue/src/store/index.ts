import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  basket: Array<Product>
}

export interface Product {
  name: string,
  image: string,
  price: number,
  currency: string,
  extendedName: string,
  urlId: string,
  url: string,
  description: string,
  category: string
  fiche: Fiche
}

interface Fiche {
  [Key: string] : Feature
}

interface Feature{
  [Key: string] : Array<string> | string
}


// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    basket: []
  },
  getters: {
    getBasket(state){
      return state.basket;
    }
  },
  mutations:{
      addProduct(state, product){
        state.basket.push(product);
      },
      deleteProduct(state, product){
        state.basket=state.basket.filter((el: Product) => el.urlId != product.urlId);
        console.log(state.basket)
      },
      deleteAllProduct (state){
        state.basket=[];
      }
  }
})

export function useStore () {
  return baseUseStore(key)
}