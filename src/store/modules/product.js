import axios from "axios";

const product = {
  namespaced: true,
  state: {
    productData: [],
  },

  getters: {
    getProducts: (state) => state.productData,

    //   get single product
    getProductById: (state) => (productSlug) => {
      console.log("Fetching single product by ID:", productSlug);
      console.log("ProductData:", state.productData);
      const products = state.productData.find((p) => p.id == productSlug);
      console.log("Product:", product);
      return products;
    },

    
    // getProductCategory: (state) => (productCategory) => {
    //   const product = state.productData.filter(
    //     (p) => p.slug == productCategory
    //   );
    //   return product;
    // }
  },


  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/latest/4");
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
    // SET_FILTER_CATEGORY(state, product) {
    //   state.filterProduk = product;
    // }
  },
};

export default product;