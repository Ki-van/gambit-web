
const state = {
    cartItems: []
}
const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems = payload;
  }
}
const actions = {
    getCartItems ({ commit }) {
        commit('UPDATE_CART_ITEMS', JSON.parse(localStorage.getItem('cart')))
    },
    addCartItem ({ commit }, cartItem) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(cart === null)
            cart = [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        commit('UPDATE_CART_ITEMS', cart);
    },
    removeCartItem ({ commit, state }, cartItem) {
        commit('UPDATE_CART_ITEMS', state.cartItems.filter(item => item.id !== cartItem.id))
       /* axios.delete('/api/cart/delete', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });*/
    },
    removeAllCartItems ({ commit }) {
        localStorage.removeItem('cart');
        commit('UPDATE_CART_ITEMS', []);
        /*axios.delete('/api/cart/delete/all').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });*/
    }
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc;
        }, 0).toFixed(2);
    },
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    },
    cartCount: state => state.cartItems?.length
}

const cartModule = {
    state,
    mutations,
    actions,
    getters
}
export default cartModule;