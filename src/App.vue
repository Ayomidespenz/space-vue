<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  name: 'App',

  components: { Navbar }

}
</script>

<style>
@import './assets/style.css';
</style>