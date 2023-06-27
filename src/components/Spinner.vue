<template>
  <div class="spinner-content">
    <span class="spinner"></span>
  </div>
</template>

<style scoped>
.spinner-content {
  display: grid;
  place-items: center;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #3d4c51;
  border-bottom-color: #1f2223;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
