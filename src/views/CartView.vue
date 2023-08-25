<template>
  <div>
    <div v-for="data in getCarts" class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">{{ data.qty }} Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3
              class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Quantity
            </h3>
            <h3
              class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Price
            </h3>
            <h3
              class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Total
            </h3>
          </div>

          <div
            v-for="data in getCarts"
            class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
          >
            <div class="flex w-2/5">
              <!-- product -->
              <div class="w-20">
                <img
                  class="h-24"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{ data.name }}</span>
                <span class="text-red-500 text-xs">{{ data.brands }}</span>
                <button
                  @click="deleteCarts(data.cart_id)"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </button>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <div class="quantity-actions">
                <button
                  class="quantity-button"
                  @click="editCarts({ cart_id: data.cart_id, type: 'minus' })"
                >
                  -
                </button>
                {{ data.qty }}
                <button
                  class="quantity-button"
                  @click="editCarts({ cart_id: data.cart_id, type: 'plus' })"
                >
                  +
                </button>
              </div>

              <!-- <input class="mx-2 border text-center w-8"  > -->
            </div>
            <span class="text-center w-1/5 font-semibold text-sm"
              >${{ data.regular_price }}</span
            >
            <span class="text-center w-1/5 font-semibold text-sm"
              >${{ data.regular_price * data.qty }}</span
            >
          </div>

          <router-link
            :to="{ name: 'product' }"
            class="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              class="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
            Continue Shopping
          </router-link>
        </div>

        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Items 3</span>
            <span class="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase"
              >Shipping</label
            >
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div class="py-10">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
              >Promo Code</label
            >
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
          </div>
          <button
            class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
          >
            Apply
          </button>
          <div class="border-t mt-8">
            <div
              class="flex font-semibold justify-between py-6 text-sm uppercase"
            >
              <span>Total cost</span>
              <span>${{ calculateTotal }}</span>
            </div>
            <button
              class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      cek: 1,
      totalAmount: 0,
    };
  },

  computed: {
    ...mapGetters("cart", ["getCarts"]),

    calculateTotal() {
      return this.getCarts.reduce((total, cartItem) => {
        return total + cartItem.regular_price * cartItem.qty;
      }, 0);
    },
    
  },
  methods: {
    ...mapActions("cart", ["fetchCarts", "deleteCarts", "editCarts"]),

    watch: {
      calculateTotal: {
        immediate: true,
        handler(newValue) {
          this.totalAmount = newValue;
        },
      },
    },

    // jum(type) {
    //   if (type === "plus") {
    //     this.cek++;
    //   } else if (type === "minus" && this.cek > 1) {
    //     this.cek--;
    //   }
    // },
  },
  created() {
    this.fetchCarts();
  },
};
</script>
