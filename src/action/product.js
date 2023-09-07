// import { Axios } from "axios";
import axios from "axios";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESSFUL, FETCH_PRODUCTS_FAILED } from "../constants/product";

export const listProducts = () => async (dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS,
    //   payload: productId,
    });
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products`
      );
      dispatch({
        type: FETCH_PRODUCTS_SUCCESSFUL,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILED,
        
        // payload:
        //   error.response && error.response.data.message
        //     ? error.response.data.message
        //     : error.message,
      });
      console.log(error)
    }
  };
