<template>
  <div>
    <NavbarComponents   />

    <router-view />

    <footerComponents />

  </div>
</template>

<script > 
// import 'flowbite/dist/flowbite.js'

import NavbarComponents from './components/NavbarComponents.vue';
import footerComponents from './components/FooterComponents.vue'
import { ref } from 'vue'

export default {
    name: 'App',
    components : {
      NavbarComponents,

      footerComponents
    },

    setup()
    {
      const idMenu = ref(1)

      function setMenu(id)
      {
        idMenu.value = id;
      }

      return{
        setMenu,
        idMenu,
      }
    }

  }
</script>