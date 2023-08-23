import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

function cekToken(to,from, next){
  var isAuthenticated = false;
  if (localStorage.getItem('token'))
  isAuthenticated = true;
else
isAuthenticated =false
if(isAuthenticated){
  next();
}
else{
  next('/login')
}
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/brands",
      name: "brands",
      component: () => import("../views/AllBrandView.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategorieViews.vue"),
    },
    {
      path: "/product:slug",
      name: "singleproduct",
      component: () => import("../views/SingleProductView.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
      beforeEnter : cekToken,
    },





    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component:  () => import("../views/PageNotFoundView.vue"),
    },
  ],
});

export default router;
