<template>
  <section>
    <h3>The user has not been found</h3>
    <p>The user may not exist or there may be a problem on the server.</p>
    <RouterLink to="/characters"> Return to previous page </RouterLink>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

a {
  font-size: 1rem;
  text-decoration: none;
  background-color: var(--bottoms-color);
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
}

a:hover {
  background-color: var(--hover-color);
}

a:active {
  background-color: var(--bottoms-color);
}
</style>
