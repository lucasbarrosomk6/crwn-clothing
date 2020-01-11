export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    //if there is a match, then existingCartItem will exist.
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((
      cartItem //if cart item exists, we apply this function to the cartItems array.
    ) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //if cartItem matches, we change only the current quantity of said item.
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; //if the item added is unique, it is added to the array with a base quantity of 1 .
}; //this function is where we add the quantity prop to our cardItem.
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    //if there is a match, then existingCartItem will exist.
    cartItem => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem) {
    //if the cart item exists, then we filter it out
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems;
};
