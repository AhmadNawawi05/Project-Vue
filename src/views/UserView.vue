<template>
    <div>
  
        <div class="p-16 py-20 sm:py-100">
<div class="p-8 bg-white shadow mt-24">
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
      <div>
        <p class="font-bold text-gray-700 text-xl">{{getCarts.length}}</p>
        <p class="text-gray-400">Carts</p>
      </div>
      <div>
           <p class="font-bold text-gray-700 text-xl">0</p>
        <p class="text-gray-400">Whistlist</p>
      </div>
          <div>
           <p class="font-bold text-gray-700 text-xl">0</p>
        <p class="text-gray-400">Ordered</p>
      </div>
    </div>

    <div class="relative">
        <div class="w-48 h-48 mx-auto rounded-full bg-indigo-100 shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500 overflow-hidden">
    <img src="https://64.media.tumblr.com/b30a4f0baec32180588de95ad7d20b22/29b8ddfb384e9f67-5b/s540x810/58c86e2deedc986f993deb9690ea63557afb2da9.png" alt="Deskripsi Gambar"  class="h-full">
  </div>
</div>

  </div>

  <div class="mt-20 text-center border-b pb-12">
    <h1 class="text-4xl font-medium text-gray-700">{{ getUsers.name }} <span class="font-light text-gray-500">{{getUsers.id}}</span></h1>
    <p class="font-light text-gray-600 mt-8">{{ getUsers.email }}</p>

    <p class="mt-8 text-gray-500"> Negara - {{ getAddres[0].country }}</p>
    <p class="mt-2 text-gray-500"> Provinsi - {{ getAddres[0].state }} </p>
    <p class="mt-2 text-gray-500"> Kota - {{ getAddres[0].city }}</p>
    <p class="mt-2 text-gray-500"> Alamat - {{ getAddres[0].address }}</p>
    <p class="mt-2 text-gray-500"> kode pos - {{ getAddres[0].postal_code }}</p>

  </div>
<!-- 
  <div class="mt-12 flex flex-col justify-center">
    <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
    <button
  class="text-indigo-500 py-2 px-4  font-medium mt-4"
>
  Show more
</button>
  </div> -->

</div>
</div>

    </div>
  </template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
computed: {
    ...mapGetters('user', ['getUsers']),
    ...mapGetters('cart', ['getCarts', 'getAddres'])

},
methods: {
    ...mapActions('user', ['fetchUsers']),
    ...mapActions("cart", ["fetchCarts", 'fetchAddres']),

},
created() {
    this.fetchUsers();
    this.fetchAddres();
},
}
</script>

<style scoped>



</style>