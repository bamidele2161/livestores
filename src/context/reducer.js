export const actionType = {
    SET_DRUG_ITEMS: 'SET_DRUG_ITEMS',
    SET_CART_SHOW: 'SET_CART_SHOW',
    SET_CARTITEMS: 'SET_CARTITEMS'
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case actionType.SET_DRUG_ITEMS:
            return{
                ...state,
                drugItems: action.drugItems
            };
        case actionType.SET_CART_SHOW:
            return{
                ...state,
                cartShow: action.cartShow
            };
        case actionType.SET_CARTITEMS:
            return{
                ...state,
                cartItems: action.cartItems
            };
            default:
                return state;
    }
}



export default reducer;