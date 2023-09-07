import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESSFUL, FETCH_PRODUCTS_FAILED } from "../constants/product";

export const productListReducer = (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action?.type) {
      case FETCH_PRODUCTS:
        return { ...state, loading: false };
      case FETCH_PRODUCTS_SUCCESSFUL:
        return { loading: false, products: action?.payload };
      case FETCH_PRODUCTS_FAILED:
        return { loading: false, products: action?.payload };
      default:
        return state;
    }
  };