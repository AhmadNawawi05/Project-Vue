<template>
    <div class="not-found-animation">
      <img class="animated-image" src="https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png" alt="404 Error" />
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFoundAnimation",
  };
  </script>
  
  <style scoped>
  .not-found-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .animated-image {
    width: 300px;
    animation: shake 2s infinite;
  }
  
  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    75% {
      transform: translateX(-10px);
    }
  }
  </style>
  