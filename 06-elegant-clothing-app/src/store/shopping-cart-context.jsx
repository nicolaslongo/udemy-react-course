import { createContext, useReducer } from "react";

import { DUMMY_PRODUCTS } from '../dummy-products.js';


export const CartContext = createContext({
  // We complete this props just for IDE's automcompletion purposes
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {}
});

// It's defined outside, because it should not be re-run every time the component gets re-executed
function shoppingCartReducer(state, action) {
  if (action.type == "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.payload === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // This is for more complex data structures
      items: updatedItems,
    };
  }

  if (action.type == "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  // In here we deleted useState and instead we are using useReducer
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {items: []});

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    })
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    })
  }

  const contextValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  }

  // value prop is required! and we store there references to the state and functions to manage it
  return <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
}