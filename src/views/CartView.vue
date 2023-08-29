<template>
  <div>
    <div class="container mx-auto mt-10 py-20 sm:py-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl"> Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          <div v-for="data in getCarts" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <!-- product -->
              <div class="w-20">
                <img class="h-24"
                  src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
                  alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{ data.name }}</span>
                <span class="text-red-500 text-xs">{{ data.brands }}</span>
                <button @click="deleteCarts(data.cart_id)" class="font-semibold hover:text-red-500 text-gray-500 text-xs">
                  Remove
                </button>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <div class="quantity-actions">
                <button class="quantity-button" @click="editCarts({ cart_id: data.cart_id, type: 'minus' })">
                  -
                </button>
                {{ data.qty }}
                <button class="quantity-button" @click="editCarts({ cart_id: data.cart_id, type: 'plus' })">
                  +
                </button>
              </div>

              <!-- <input class="mx-2 border text-center w-8"  > -->
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">{{ formatCurrency(data.regular_price) }}</span>
            <span class="text-center w-1/5 font-semibold text-sm">{{ formatCurrency(data.regular_price  * data.qty) }}</span>
          </div>

          <router-link :to="{ name: 'product' }" class="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </router-link>
        </div>

        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Items {{ calculateItem }}</span>
            <span class="font-semibold text-sm">{{ formatCurrency(calculateTotal) }}</span>
          </div>

          <div class="py-10">
            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
          </div>
          <button
            class="bg-red-500 hover:bg-indigo-600 py-3 px-6 text-sm text-white font-semibold uppercase rounded-lg w-full">
            Apply
          </button>
          <div class="border-t mt-8">

<!-- 
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">

              <span>tax</span>
              <span>$0</span>


            </div> -->

            <div class="flex font-semibold justify-between py-6 text-sm uppercase">

              <span>Total cost</span>
              <span>{{ formatCurrency(calculateTotal) }}</span>
              </div>

                <div>
              <router-link :to="{ name: 'checkout' }" @click="checkout" class="w-full">
                <button
                  class="bg-indigo-500 hover:bg-indigo-600 py-3 px-6 text-sm text-white font-semibold uppercase rounded-lg w-full">
                  Checkout
                </button>
              </router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import swal from 'sweetalert';

export default {
  data() {
    return {
      cek: 1,


    };
  },

  computed: {
    ...mapGetters("cart", ["getCarts", "getAddres"]),

    calculateTotal() {
      return this.getCarts.reduce((total, cartItem) => {
        return total + cartItem.regular_price * cartItem.qty;
      }, 0);
    },

    calculateItem() {
      return this.getCarts.reduce((total, cartItem) => {
        return total + cartItem.qty;
      }, 0);
    },

  },


  methods: {
    ...mapActions("cart", ["fetchCarts", "deleteCarts", "editCarts", "fetchAddres"]),

    formatCurrency(price) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    },

    checkout() {
      // Implement your checkout logic here
      swal("Thank You!", "please proceed to the payment page");
    },





    watch: {
      calculateTotal: {
        immediate: true,
        handler(newValue) {
          this.totalAmount = newValue;
        },
      },
    },

    jum(type) {
      if (type === "plus") {
        this.cek++;
      } else if (type === "minus" && this.cek > 1) {
        this.cek--;
      }
    },
  },
  created() {
    this.fetchCarts();
    this.fetchAddres();
  },
};
</script>
