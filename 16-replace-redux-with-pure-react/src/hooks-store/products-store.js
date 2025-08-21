import { initStore } from "./store";
import { defaultProducts } from "../default-products";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      const productIndex = currentState.products.findIndex(
        p => p.id === productId
      );
  
      // changing the status to fav/un-fav
      const newFavoriteStatus = !currentState.products[productIndex].isFavorite;
      const updatedProducts = [...currentState.products];
      updatedProducts[productIndex] = {
        ...currentState.products[productIndex],
        isFavorite: newFavoriteStatus
      };
      return {products: updatedProducts};
    }
  };

  initStore(actions, {products: defaultProducts})
}

export default configureStore;