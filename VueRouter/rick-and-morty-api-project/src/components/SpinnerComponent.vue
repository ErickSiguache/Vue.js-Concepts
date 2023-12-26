<template>
  <section>
    <div></div>
    <h3>Loading...</h3>
  </section>
</template>

<style scoped>
div {
  padding: 20px;
  border: 4px solid rgba(0, 0, 0, -1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: var(--text-color);

  animation: spin 1s ease infinite;
}
section {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: var(--text-color);
  padding-top: 30px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
