import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // tells redux persist that we want to use local storage (defaults to local storage)
import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  //possible configurations for redux-persist
  key: "root", // what point do we want to start storing everything which (reducer or subReducer?)
  storage, //what type of storage? (session(expires after window/tab is closed) or local(no expiry/saved in browser))
  whitelist: ["cart"] // names of the subReducers we want to store (we dont store user because firestore stores that for us)
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
