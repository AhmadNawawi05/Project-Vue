import axios from "axios";

const cart = {
  namespaced: true,
  state: {
    cartsData: [],
    addresData: [],
    checkoutData: [],
  },
  getters: {
    getCarts: (state) => state.cartsData,
    getAddres: (state) => state.addresData,
    getCheckout: (state) => state.checkoutData,

  },
  actions: {
    async fetchCarts({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const dataCarts = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts",
          {
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //  console.log(dataCarts.data.cart_items.data)
        commit("SET_CARTS", dataCarts.data.cart_items.data);
      } catch (error) {
        alert("Ada Error");
        console.log(error);
      }
    },

    async editCarts({ commit, dispatch }, param) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity",
          {
            temp_user_id: null,
            cart_id: param.cart_id,
            type: param.type
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      
        console.log("response from carts", response.data);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch("cart/fetchCarts", null, { root: true });
      }
    },


    async deleteCarts({ commit, dispatch }, cart_id) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/destroy",
          {
            cart_id : cart_id,
            temp_user_id : null
        },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        commit("EDIT_CARTS", response.data);
        console.log("response from carts", response.data);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch("cart/fetchCarts", null, { root: true });
      }
    },    

    async fetchAddres({commit, dispatch }, ) {
      try {
        const response = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/user/addresses",

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
          
        );
        commit("FETCH_ADDRES", response.data.data);
        console.log("response from carts", response.data.data);
        return response.data
      } catch (error) {
        console.error(error);
      } finally {
        dispatch("cart/fetchCarts", null, { root: true });
      }

    },

    async checkoutCart({ commit, dispatch },
      {
        shippingAddress,
        billingAddress,
        paymentType,
        deliveryType,
        cart_item_ids,
      }
    ) {
      try {
        const response = await axios.post(
          `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
          {
            shipping_address_id: shippingAddress,
            billing_address_id: billingAddress,
            payment_type: paymentType,
            delivery_type: deliveryType,
            cart_item_ids: cart_item_ids,
            transactionId: null,
            receipt: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data.message);
        dispatch("fetchCarts");
        commit('SET_CHECKOUT', response.data);
      } catch (error) {
        alert("Error");
        console.log(error);
      }
    },

    



  },

  mutations: {
    SET_CARTS(state, cart) {
      state.cartsData = cart;
    },
    FETCH_ADDRES(state, addres){
        state.addresData = addres
    },
    SET_CHECKOUT(state, checkout){
      state.checkoutData = checkout
  },
  },
};

export default cart;
