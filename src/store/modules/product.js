import axios from "axios";

const product = {
  namespaced: true,
  state: {
    productData: [],
    cartsAdd: [],
  },

  getters: {
    getProducts: (state) => state.productData,

    //   get single product
    getProductById: (state) => (productSlug) => {
      console.log("Fetching single product by ID:", productSlug);
      console.log("ProductData:", state.productData);
      const products = state.productData.find((p) => p.slug == productSlug);
      console.log("Product:", product);
      return products;
    },

  },


  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/latest/8");
        commit("SET_PRODUCTS", data.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    // get single product
    async fetchSingleProduct({ commit }, productSlug) {
      try {
        const response = await axios.get(
          `https://ecommerce.olipiskandar.com/api/v1/product/details/${productSlug}`
        );
        commit("SET_SINGLE_PRODUCT", response.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async addCarts({ commit,  dispatch }, variation_id ) {
      try {
        const response = await axios.post(
          'https://ecommerce.olipiskandar.com/api/v1/carts/add',
          {
            "variation_id": variation_id,
            "qty": 1,
            "temp_user_id": null
        },
        {  headers: {
          'Authorization': `Bearer ${localStorage.getItem ("token")}`
        }
       }
        );
        commit("ADD_CARTS", response.data);
        console.log('response from carts', response.data )

        //benarkan besok di sekolah 

        // router.push(`/product/${this.product.id}`);
          
      } catch (error) {
        console.error(error);
      }

      finally{
          dispatch('cart/fetchCarts', null, {root:true} )
      }
    },

    // async fetchFilterProduct ({ commit }, productCategory){
    //   try {
    //     const response = await axios.get (
    //       `https://fakestoreapi.com/products/${productCategory}`
    //     );
    //     commit("SET_FILTER_CATEGORY", response.data);
    //   }catch (error) {
    //     alert("error");
    //     console.log("error")
    //   }
      
    // }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.productData = products;
    },
    SET_SINGLE_PRODUCT(state, product) {
      state.singleProduct = product;
    },
    ADD_CARTS(state, addCarts) {
      state.cartsAdd = addCarts;
    },
    // RE_CARTS(state, cartsAdd) {
    //   state.cartsAdd = cartsAdd;  
    // }
  },
};

export default product;