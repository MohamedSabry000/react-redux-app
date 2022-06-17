import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    products
  }
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    product
  }
}