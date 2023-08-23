import axios from "axios";

const brands = {
  namespaced: true,
  state: {
    brandsData  : [],
  },
    getters:{
        getBrands: (state) => state.brandsData,
  
    },
    actions: {
        async fetchBrands({ commit }){
          try {
              const dataBrands = await axios.get(
                "https://ecommerce.olipiskandar.com/api/v1/all-brands")
              commit('SET_BRANDS', dataBrands.data.data.slice(0, 10))
          } catch (error) {
              alert('Ada Error')
              console.log(error)
          }
      },

  },
  

    mutations: {
        SET_BRANDS(state, brand){
          state.brandsData = brand
      },
    }
}

export default brands;
