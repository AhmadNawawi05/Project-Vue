<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 z-10">
      <div
         class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://i.pinimg.com/originals/96/a4/b3/96a4b381957f434937938e66ab1d8559.jpg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >PaluGada</span
          >
        </a>

        

        <div class="flex md:order-3 items-center">
        
          <router-link :to="{name: 'user'}"> <img class="relative mr-5 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/554802fe-c63a-43b8-b1ce-903ae6324422/dd5v2vv-a355be2a-0415-411d-9c7d-d43cf55b8b65.png/v1/fill/w_256,h_256/kasumi_yoshizawa_icon_by_helryu_dd5v2vv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNTU0ODAyZmUtYzYzYS00M2I4LWIxY2UtOTAzYWU2MzI0NDIyXC9kZDV2MnZ2LWEzNTViZTJhLTA0MTUtNDExZC05YzdkLWQ0M2NmNTViOGI2NS5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rwXemV371OFPKFnvpD5ULkry4pE3pDtlXOS7m5ggkXQ" alt="Bordered avatar">

          </router-link>

          <CartBadge />
          

          <div v-if="isAuthenticated">
            <button
              @click="logout"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          </div>
          <div v-else>
            <router-link to="/login">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </router-link>
          </div>

          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
        class="navbar"
          id="navbar-cta"
        >
        <div class="header">
          <div class="menu">

            <ul
          class="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:bg-white md:dark:bg-gray-900 md:border-gray-700"
          >
            <li>
              <router-link
              :to="{ name: 'home' }"
              class="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              active-class="router-link-active"
            >
              Home
            </router-link>
            </li>
            <li>
              <router-link
              :to="{ name: 'product' }"
              class="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              active-class="router-link-active"
            >
              Product
            </router-link>


            </li>
            <li>
              <router-link
              :to="{ name: 'categories' }"
              class="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              active-class="router-link-active"
            >
            Categorie
            </router-link>
            </li>

            <li>
              <router-link
              :to="{ name: 'brands' }"
              class="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              active-class="router-link-active"
            >
            Brand
            </router-link>
            </li>

            <li>
              <router-link
              :to="{ name: 'user' }"
              class="hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              active-class="router-link-active"
            >
            User
            </router-link>
              
             
            </li>
          </ul>

          </div>
        </div>
        </div>
      </div>
    </nav>

    <transition name="sidebar">
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 dark:bg-gray-900 md:hidden"
      >
        <ul class="p-4 space-y-2">
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'product' }">Product</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'categories' }">Categorie</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'brands' }">Brand</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user' }">User</router-link>
        </li>
        <!-- Add more links as needed -->
      </ul>
    </div>
    </transition>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CartBadge from "./CartBadge.vue";

export default {

  data(){
    return{
      isMobileMenuOpen: false,
    }
  },

  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),

    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },  

  },
  components: { CartBadge },
};
</script>

<style>

/* Sidebar animation styles */
.sidebar-enter-active, .sidebar-leave-active {
  transition: all 0.3s ease-in-out;
}
.sidebar-enter, .sidebar-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Add an animation for the initial appearance */
.sidebar-appear-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.sidebar-appear {
  transform: translateX(0);
  opacity: 1;
}

/* Sidebar link styles */
.sidebar-link {
  display: block;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease-in-out;
  color: #333; /* Link color */
  text-decoration: none;
}

.sidebar-link:hover {
  background-color: #f0f0f0;
}




</style>
