import axios from "axios";
import authHeader from "../../../services/auth-header";

const API_URL = 'https://kafitis.intbel.ru/api/';

const state = {
    cartItems: [],
    deliveryAddress: {
        resieverFullname: '',
        resieverNumber: '',
        resieverEmail: '',
        city: '',
        street: '',
        postalCode: '',
        houseNumber: '',
        apartment: ''
    },
    deliveryMethods: []
}
const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload;
        localStorage.setItem('cart', JSON.stringify(payload))
    },
    updateDeliveryAddress(state, payload) {
        state.deliveryAddress = payload;
        localStorage.setItem('delivery-address', JSON.stringify(payload));
    },
    updateDeliveryMethods(state, payload) {
        state.deliveryMethods = payload
    }
}
const actions = {
    async getDeliveryMethods({commit}) {
        let response = await axios.get(API_URL + 'deliveryMethods/', { headers: authHeader() });
        commit('updateDeliveryMethods', response.data);
    },
    getCartItems({commit}) {
        commit('UPDATE_CART_ITEMS', JSON.parse(localStorage.getItem('cart')))
    },
    addCartItem({commit, state}, cartItem) {
        let cart = state.cartItems;
        if (cart === null)
            cart = []
        if (cart.filter(el => el.id === cartItem.id).length === 0) {
            cartItem.quantity = 1
            cart.push(cartItem);
            commit('UPDATE_CART_ITEMS', cart);
        }
    },
    updateCartItem({commit, state}, cartItem) {
        state.cartItems[state.cartItems.findIndex((el) => el.id === cartItem.id)].quantity = cartItem.quantity
        commit('UPDATE_CART_ITEMS', state.cartItems)
    },
    removeCartItem({commit, state}, cartItem) {
        commit('UPDATE_CART_ITEMS', state.cartItems.filter(item => item.id !== cartItem.id))

        /* axios.delete('/api/cart/delete', cartItem).then((response) => {
             commit('UPDATE_CART_ITEMS', response.data)
         });*/
    },
    removeAllCartItems({commit}) {
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
    cartCount: state => state.cartItems?.length,
    deliveryMethods: state => state.deliveryMethods,
}

const cartModule = {
    state,
    mutations,
    actions,
    getters
}
export default cartModule;