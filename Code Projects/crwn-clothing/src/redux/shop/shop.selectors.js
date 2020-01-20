import { createSelector } from "reselect";

//the following 6 lines are a good example of your standard selector

const selectShop = state => state.shop; //refers to the state as it is mentioned in the root-reducer.js "shop: shopReducer"
export const selectCollections = createSelector(
  [selectShop], //refering to the state by the new name we gave it on line 3
  shop => shop.collections //selecting the specific part of the state we need. it happens to be the only part of state we have atm :"collections: SHOP_DATA"
);

//so, there was a problem: when creating our collection page, wanted to dynamically select the proper collection based
//on the collection id. This would be easy if each of our collections Id's where strings that matched the match.path param
//:collectionId. Example: if the Id for the object that held our hats inventory matched the "match.path param: hats".
//Instead the hats inventory has Id of 1. So if we make a quick refrence map (COLLECTION_ID_MAP) and use the find method to
//loop through the refrence map using the match.path parameter to compare to the collection's id
//then we fix the issue and the selector will dynamically select the correct collection based on the match.path param
//this type of coding is known as currying.
export const selectCollectionTheArrayWay = (
  collectionUrlParam
) /* the string value of the match.path parameter*/ =>
  createSelector([selectCollections], collections =>
    collections.find(
      //loops through the COLLECTION_ID_MAP constant
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] //when the id of the collection matches the value of the match.path parameter, it will select that collection to display.
    )
  );

const COLLECTION_ID_MAP = {
  hats: 1, //if the match.path parameter is "hats", the selector will grab the collection with the id of 1.
  sneakers: 2, //if the match.path parameter is "sneakers", the selector will grab the collection with the id of 2.
  jackets: 3, //if the match.path parameter is "jackets", the selector will grab the collection with the id of 3.
  womens: 4, //if the match.path parameter is "womens", the selector will grab the collection with the id of 4.
  mens: 5 //if the match.path parameter is "mens", the selector will grab the collection with the id of 5.
};

//so that was a lot. This is what happens when you store your database as an array rather than an object. The lesson I am currently on is informing me
//to change the inventory to an object to create a much more simple selector that requires less code.
//we will nolonger be using the selector above and will use the one below instead. I have changed the name of the selector to avoid confusion

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam] //instead of creating a .find() function that would take a long time if we had many catagories.
    //We can now select the correct database of inventory by passing the collectionUrlParam as a key in the newly made collections object.
  );
//though the collections object is nice to select items, our collections overview is now recieving a large object instead of an array. BUT collections overview
//is supposed to take an array of objects and map them, if the items are objects, that cant be done. HERE IS THE WORKAROUND we change what collections-overview sees!
//by creating an array of collections "keys" (using Object.keys()) and creating a new array with .map() that assigns each of collection's keys back to the value
export const selectCollectionsForPreveiw = createSelector(
  [selectCollections],
  collections =>
    Object.keys(collections) /*creates an array of keys*/
      .map(key => collections[key]) //re-assigns the keys to the values.
);
