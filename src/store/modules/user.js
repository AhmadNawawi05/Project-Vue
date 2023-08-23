import axios from "axios";

const users = {
  namespaced: true,
  state: {
    usersData  : [],
  },
    getters:{
        getUsers: (state) => state.usersData,
  
    },
    actions: {
        async fetchUsers({ commit }){
          try {
            const token = localStorage.getItem("token");
              const dataUsers = await axios.get(
                "https://ecommerce.olipiskandar.com/api/v1/user/info", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log(dataUsers.data)
              commit('SET_USERS', dataUsers.data['user'])
          } catch (error) {
              alert('Ada Error')
              console.log(error)
          }
      },

  },
  

    mutations: {
        SET_USERS(state, user){
          state.usersData = user
      },
    }
}

export default users;
