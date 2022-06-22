
const fetchCart = () => {
    const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

    return cartInfo ? cartInfo : []
}

const cartInfo = fetchCart();

export const initialState = {
    drugItems: null,
    cartShow: false,
    cartItems: cartInfo,
};