<template>
  <div class="home-page">
    <main>
      <Hero />
    </main>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'

export default {
  name: 'Home',
  components: {  Hero }
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}
nav {
  width: 100%;
}
main {
  flex: 1;
}
</style>