<template>
    <div>
        <section class="bg-center bg-no-repeat bg-[url('https://images.squarespace-cdn.com/content/v1/63d2f33ff10e747a973aca24/1690239522542-I2Q5VL3LHLAUJ3F87QKT/Telluride.png')] bg-gray-700 bg-blend-multiply py-20 sm:py-100">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-12 md:py-24 lg:py-36">
                <h1 class="mb-2 text-2xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">"Cross the Online Shopping Boundary Only at PaluGada!"</h1>
                <p class="mb-4 text-base font-normal text-gray-300 lg:text-lg sm:px-8 md:px-16 lg:px-40">"Palu Struck, Discounts Unleashed! explore Now and Discover All You Desire, Only at PaluGada."</p>
                <div class="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" class="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                    </a>
                    <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-2 focus:ring-gray-400">
                        Learn more
                    </a>  
                </div>
            </div>
        </section>
        
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-8">
                        <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-1">
                            Outdoor 
                        </a>
                        <h2 class="text-gray-900 dark:text-white text-xl font-extrabold mb-2">Outdoor Furniture</h2>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod debitis quos alias? Hic eum quia odio! Inventore natus laboriosam magni.</p>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-base inline-flex items-center">Read more</a>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-8">
                        <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-1">
                            Indoor 
                        </a>
                        <h2 class="text-gray-900 dark:text-white text-xl font-extrabold mb-2">Indoor Furnitures</h2>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur asperiores dolore consequuntur eaque commodi, dolorum quam at maiores ab sed voluptatibus voluptas doloremque eligendi.</p>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-base inline-flex items-center">Read more</a>
                    </div>
                </div>
            </div>
        </section>

        
        <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-5">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Use v-for directive to loop through products -->
            <div v-for="data in getProducts" :key="data.id">

                <div class="mt-6">
    
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4">
            <h3 class="text-sm text-gray-700">
                <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ data.name }}
                </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Black</p>
        </div>
        <div class="flex items-center justify-between mt-2">
            <p class="text-sm font-medium text-gray-900">{{ formatCurrency(data.base_price) }}</p>
            <router-link class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" :to="{ name: 'singleproduct', params: { slug: data.slug } }">Detail</router-link>
        </div>
    </div>


            </div>
        </div>
    </div>
</section>
    </div>





</template>

<script>


import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('product', ['getProducts']),
    },
    methods: {
        ...mapActions('product', ['fetchProducts']),

        formatCurrency(price) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    },




    },
    created() {
        this.fetchProducts();
    },
}
</script>

<style scoped>
/* Your existing styles here */
</style>
