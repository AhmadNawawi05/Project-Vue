<template>
    <div class="bg-white-50 dark:bg-white-800 border-white-200 dark:border-white-700 rounded-lg p-8 md:p-12 mb-8">
       <div class="grid md:grid-cols-4 gap-8 py-20 sm:py-100">
   
    
           <div v-for="data in getCategories" >

 
            
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.name}}</h5>
        </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet..</p>
          <a href="#" class="inline-flex items-center justify-center px-4 py-2 font-medium text-white bg-gray-700 hover:bg-blue-800 rounded-lg text-sm md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700">
    Explore more
    <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
    </div>
</div>


   
   </div>
           </div>
           </div>
        
   </template>
   
   <script>
       import { mapGetters, mapActions } from 'vuex';
   
   export default {
       computed: {
           ...mapGetters('categories', ['getCategories']),
       },
       methods: {
           ...mapActions('categories', ['fetchCategorie']),
   
       },
       created() {
           this.fetchCategorie();
       },
   }
   </script>

   <style>
     body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .product {
      background-color: #ffffff;
      border: 1px solid #ddd;
      padding: 20px;
      margin-bottom: 20px;
    }

    .product img {
      max-width: 100%;
      height: auto;
    }

    .product h2 {
      font-size: 1.5rem;
      margin: 10px 0;
    }

    .product p {
      font-size: 1.2rem;
      color: #555;
    }
  </style>