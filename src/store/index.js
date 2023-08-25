import { createStore } from "vuex";
import auth from "./modules/auth";
import product from "./modules/product"
import categories from "./modules/categories"
import brand from "./modules/brand"
import user from "./modules/user";
import cart from "./modules/cart"

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    product,
    categories,
    brand,
    user,
    cart
  },
});

export default store;