const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { value, prop } = action.payload;

    let cartProduct = {
      id: prop.img,
      name: prop.title,
      amount: value,
      image: prop.img,
      price: prop.prize,
      deatils: prop.text,
      price2: prop.prize2,
    };

    const existingProductIndex = state.cart.findIndex(
      (obj) => obj.id === cartProduct.id
    );
    if (existingProductIndex !== -1) {
      const updatecart = [...state.cart];
    
      value>10-updatecart[existingProductIndex].amount?updatecart[existingProductIndex].amount +=0:updatecart[existingProductIndex].amount +=value ;
      return { ...state, cart: updatecart };
    } else {
      return { ...state, cart: [...state.cart, cartProduct] };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedcart = state.cart.filter((ele) => ele.id !== action.payload);
    return {
      ...state,
      cart: updatedcart,
    };
  }
  return state;
};
export default cartReducer;
