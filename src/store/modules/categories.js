import axios from "axios";

const categories = {
  namespaced: true,
  state: {
    categoriesData  : [],
  },
    getters:{
        getCategories: (state) => state.categoriesData,
  
    },
    actions: {
        async fetchCategorie({ commit }){
          try {
              const datacategorie = await axios.get(
                "https://ecommerce.olipiskandar.com/api/v1/all-categories")
              commit('SET_CATEGORIES', datacategorie.data.data.slice(0, 10))
          } catch (error) {
              alert('Ada Error')
              console.log(error)
          }
      }  ,
    


  },
  

    mutations: {
        SET_CATEGORIES(state, categories){
          state.categoriesData = categories
      },
    }
}

export default categories;
