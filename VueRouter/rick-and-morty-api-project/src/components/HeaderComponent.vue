<script setup>
defineProps(["titleApp", "description"]);
</script>

<template>
  <header>
    <section class="title-section">
      <h1>{{ titleApp }}</h1>
      <p>{{ description }}</p>
    </section>
    <nav class="nav-section">
      <ul class="style-links">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/characters"> Characters </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  color: white;
  background-color: var(--container-cards-color);
  text-align: center;
}

.title-section {
  padding: 1.5rem;
}

.nav-section {
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  background-color: var(--container-cards-color);
  border-top: 0.3rem solid var(--hover-color);
  border-bottom: 0.1rem solid var(--hover-color);
}
.style-links {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
  padding: 1.2rem;
}
.style-links li a {
  padding: 1.2rem;
  color: white;
  text-decoration: none;
  margin: 0px;
}
.style-links li a:hover {
  background-color: #5c65c0;
}
</style>
