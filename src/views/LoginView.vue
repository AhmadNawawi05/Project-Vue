<template>
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Flowbite    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form id="" class="mb-4" @submit.prevent="performLogin">

                
                <div class="mb-4">
                            <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email
                                or Username</label>
                            <input type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="email" v-model="email" placeholder="Enter your email " autofocus="" />
                        </div>

                        <div class="mb-4">
                            <div class="flex justify-between">
                                <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                                    for="password">Password</label>
                                <a href="auth-forgot-password-basic.html"
                                    class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                                    <small class=" ">Forgot Password?</small>
                                </a>
                            </div>
                            <div class="relative flex w-full flex-wrap items-stretch">
                                <input type="password" id="password"
                                    class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                                    v-model="password" placeholder="············" />
                            </div>
                        </div>

                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <br>
                  <div>
                  <button type="submit" class="w-full text-black bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <br>
                  <br>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <router-link class="font-medium text-primary-600 hover:underline dark:text-primary-500" :to="{ name: 'register' }">Sign up</router-link> 
                  </p>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                email: this.email,
                password: this.password,
            };

            const success = await this.login(credentials);

            if (success) {
                // Redirect to the desired route on successful login
                this.$router.push('/');
            } else {
                alert("Login Failed");
            }
        },
    },
};
</script>