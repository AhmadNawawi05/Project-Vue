<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <div v-if="items.length === 0" class="empty-cart">
      Your cart is empty. Start shopping!
    </div>
    <div v-else>
      <div v-for="(item, index) in items" :key="item.id" class="cart-item">
        <div class="item-info">
          <img :src="item.image" alt="Product Image" />
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p class="price">Price: ${{ item.price }}</p>
          </div>
        </div>
        <div class="actions">
          <div class="quantity-actions">
            <button class="quantity-button" @click="decrementQuantity(item)">-</button>
            {{ item.quantity }}
            <button class="quantity-button" @click="incrementQuantity(item)">+</button>
          </div>
          <button class="remove-button" @click="removeItem(index)">Remove</button>
          <button class="checkout-button" @click="checkout">Proceed to Checkout</button>
        </div>
      </div>
      <div class="total">Total: ${{ calculateTotal() }}</div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItemView.vue";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXnfRCkalZ_JdNXFSoROwcQgbpC-Ls-R_9A&usqp=CAU";

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      items: [
        { id: 1, name: "Product 1", price: 10, image: img, quantity: 1 },
        { id: 2, name: "Product 2", price: 20, image: img, quantity: 1 },
      ],
    };
  },
  methods: {
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    incrementQuantity(item) {
      item.quantity++;
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    checkout() {
      // Implement your checkout logic here
      alert("Proceeding to checkout!");
    },
  },
};
</script>

<style scoped>
.cart {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart h1 {
  text-align: center;
  margin-bottom: 20px;
}

.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  margin: 20px 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-info img {
  max-width: 120px;
  height: auto;
  margin-right: 20px;
}

.item-details {
  flex: 1;
}

.price {
  font-weight: bold;
}

.quantity {
  display: flex;
  align-items: center;
}

.quantity-button {
  background-color: #f0f0f0;
  border: none;
  color: #444;
  font-size: 1.2rem;
  padding: 5px 10px;
  cursor: pointer;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.remove-button,
.checkout-button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}

.remove-button {
  background-color: #ff5733;
  color: white;
  border: none;
}

.checkout-button {
  background-color: #4caf50;
  color: white;
  border: none;
}
</style>
