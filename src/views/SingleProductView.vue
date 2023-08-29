<template>
  <section class="py-20 sm:py-100">
    <div class="container mx-auto px-4">
      <div v-if="product">
        <!-- Breadcrumb -->
        <nav class="px-4 mb-6 lg:mb-1 lg:px-20 py-20 sm:py-7" aria-label="Breadcrumb">
      <ol class="list-reset py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 flex text-gray-600 dark:text-gray-400">
        <li class="flex items-center">
          <router-link to="/" class="text-blue-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-gray-100">Home</router-link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </li>
        <li class="flex items-center">
          <router-link :to="{name: 'product'}" class="text-blue-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-gray-100">Product</router-link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </li>
        <li class="flex items-center">
          <span class="text-gray-700 dark:text-gray-300">{{ product.name }}</span>
        </li>
      </ol>
    </nav>

       
        <div class="max-w-6xl px-4 py-7 mx-auto lg:py-0 md:px-8">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 md:w-1/2 ">
                    <div class=" top-0 z-50 overflow-hidden ">
                        <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                class="object-cover w-full lg:h-full ">
                        </div>
                        <div class="flex-wrap hidden md:flex ">
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        class="object-cover w-full lg:h-20">
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        class="object-cover w-full lg:h-20">
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        class="object-cover w-full lg:h-20">
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        class="object-cover w-full lg:h-20">
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="lg:pl-20">
                        <div class="mb-8 ">
                            <span class="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                            <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                {{product.name}}</h2>
                            <div class="flex items-center mb-6">
                                <ul class="flex mr-2">
                                   
    <div class="flex items-center">
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
    </div>

                                </ul>
                            </div>
                            <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                            </p>
                            <p class="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                <span>{{ formatCurrency(product.base_price) }}</span>
                                <!-- <span
                                    class="text-base font-normal text-gray-500 line-through dark:text-gray-400">1111</span> -->
                            </p>
                            <p class="text-green-600 dark:text-green-300 ">7 in stock</p>
                        </div>
                        <div class="flex items-center mb-8">
                            <h2 class="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                                Colors:</h2>
                            <div class="flex flex-wrap -mx-2 -mb-2">
                                <button
                                    class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                    <div class="w-6 h-6 bg-cyan-300"></div>
                                </button>
                                <button
                                    class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div class="w-6 h-6 bg-green-300 "></div>
                                </button>
                                <button
                                    class="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div class="w-6 h-6 bg-red-200 "></div>
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center mb-8">
                            <h2 class="w-16 text-xl font-bold dark:text-gray-400">
                                Size:</h2>
                            <div class="flex flex-wrap -mx-2 -mb-2">
                                <button
                                    class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                                </button>
                                <button
                                    class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                                </button>
                                <button
                                    class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                                </button>
                                <button
                                    class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                                </button>
                            </div>
                        </div>
                        <div class="w-32 mb-8 ">
                            <!-- <label for=""
                                class="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div class="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                
                                <button
                                    class="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                    <span class="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number"
                                    class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    placeholder="1">
                                <button
                                    class="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                </button>

                            </div> -->
                        </div>
                        <div class="flex flex-wrap items-center -mx-4 ">
                            <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">

                              <div v-if="token">
                                
                                <button  @click="addCarts(product.id), addCart"
                                    class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to Cart
                                </button>

                              </div>

                              <div v-else>
                              <router-link 
                                    class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300" to="/login">
                                    Add to Cart
                              </router-link>
                            </div>

                            </div>

                            <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                <button
                                    class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rating and Comment Component -->
<div class="flex bg-white-50 dark:bg-white-800  border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 space-x-8">
    <!-- Rating Section -->
    <div class="w-1/2">
        <div class="flex items-center mb-2">
            <!-- Add the star SVG elements here -->
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>

            <!-- ... -->
            <p class="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
        </div>
        
        <!-- Rating details for each star level -->
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
        <div class="flex items-center mt-4">
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 70%"></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
            <!-- ... -->
        </div>
        <div class="flex items-center mt-4">
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 17%"></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
            <!-- ... -->
        </div>
        <div class="flex items-center mt-4">
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 4%"></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
            <!-- ... -->
        </div>
        <div class="flex items-center mt-4">
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 1%"></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
            <!-- ... -->
        </div>
        <div class="flex items-center mt-4">
            <!-- ... -->
        </div>
    </div>
    
    <!-- Comment Section -->
    <div class="w-1/2">
        <div class="flex items-center mb-4 space-x-4">
            <img class="w-10 h-10 rounded-full" src="https://64.media.tumblr.com/b30a4f0baec32180588de95ad7d20b22/29b8ddfb384e9f67-5b/s540x810/58c86e2deedc986f993deb9690ea63557afb2da9.png" alt="">
            <div class="space-y-1 font-medium dark:text-white">
                <p class="text-gray-900 dark:text-white">Kasumi <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                <p class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Thinking to buy another one!</p>
            </div>
        </div>
        
        <!-- Comment details -->
        <footer class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p>
        </footer>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
            This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.
            <!-- ... -->
        </p>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
            <!-- ... -->
        </p>
        <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
        <aside>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
            </div>
        </aside>
    </div>
</div>

      </div>
      <div v-else>Product not found.</div>
    </div>
  </section>


</template>

<script>
import { mapGetters, mapActions } from "vuex";
import swal from 'sweetalert';

export default {

  data(){
    return {
    token: null
    }
  },

  computed: {
    ...mapGetters("product", ["getProductById"]),
    ...mapGetters("cart", ["getCarts"]),
    product() {
      return this.getProductById(this.$route.params.slug);
    },
  },
  methods: {
    ...mapActions("product", ["fetchSingleProduct", "fetchProducts"]),
    ...mapActions("cart", ["fetchCarts"]),
   

    ...mapActions("product", ["addCarts"]),

    formatCurrency(price) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    }, 

        addCart() {
      // Implement your checkout logic here
      swal("Thank You!", "Your Payment have success!", "success");
    },


   
    
  },
  beforeMount() {
    this.fetchProducts()
    this.fetchCarts()

    const cekToken = localStorage.getItem("token")
    this.token = cekToken
  },


};

</script>
