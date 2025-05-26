<template>
    <NavBar/>
  <section class="hero">
    <div class="hero-text">
      <h1 id="So">So, you want to travel to <span>Space</span></h1>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and let us take you on a journey you’ll never forget!</p>
    </div>
    <router-link to="/destination" class="explore-btn">Explore</router-link>
  </section>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
    components:{ NavBar},
  name: 'Hero'
}
</script>

