import { createSelector } from "reselect";

const selectCart = state => state.cart; //inputSelector. grabs the specific part of state we need.
export const selectCartItems = createSelector(
  [selectCart], //an array of inputSelectors
  cart => cart.cartItems // function that will return the value we want from the selector
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
