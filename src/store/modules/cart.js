import axios from "axios";

const cart = {
  namespaced: true,
  state: {
    cartsData: [],
  },
  getters: {
    getCarts: (state) => state.cartsData,
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
        commit("EDIT_CARTS", response.data);
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



  },

  mutations: {
    SET_CARTS(state, cart) {
      state.cartsData = cart;
    },
      EDIT_CARTS(state, cart){
        state.cartsData = cart
    },
  },
};

export default cart;
