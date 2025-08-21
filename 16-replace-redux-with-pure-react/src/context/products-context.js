import { createContext, useState } from "react";
import { defaultProducts } from "../default-products";

// Using the Context API to replace redux. This approach looks great and works good but it is not the right way of
// managing changes that occur to often. This would be a good approach to handle a session/login or a theme context
export const ProductsContext = createContext({
  // I complete this fields only for IDE's autocompletion purposes. The important thing is to set them
  // as a value when instantiating ProductsContext.Provider at the exported function
  products: [],
  toggleFavorite: (id) => {},
})

export default props => {
  const [productsList, setProductsList] = useState(defaultProducts);

  const toggleFavorite = (productId) => {
    setProductsList(currentProductList => {
      const productIndex = currentProductList.findIndex(
        p => p.id === productId
      );
  
      // changing the status to fav/un-fav
      const newFavoriteStatus = !currentProductList[productIndex].isFavorite;
      const updatedProducts = [...currentProductList];
      updatedProducts[productIndex] = {
        ...currentProductList[productIndex],
        isFavorite: newFavoriteStatus
      };
      return updatedProducts;
   })
  };  

  return (
    <ProductsContext.Provider value={{products: productsList, toggleFavorite: toggleFavorite}}>
      {props.children}
    </ProductsContext.Provider>
  )
}