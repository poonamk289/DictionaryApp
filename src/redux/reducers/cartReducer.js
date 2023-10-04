// reducers/cartReducer.js

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':

            const existingProduct = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (existingProduct) {
                return state;
            }
                return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                };

    case 'REMOVE_FROM_CART':
      // Remove the item from the cart based on itemId
            const updatedCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
            return {
                ...state,
                cartItems: updatedCartItems,
            };
    case 'CLEAR_CART':
            // Clear the entire cart
            return {
                ...state,
                cartItems: [],
            };
    default:
            return state;
    }
  };
  
  export default cartReducer;
  