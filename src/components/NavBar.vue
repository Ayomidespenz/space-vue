<template>
  <header>
    <nav>
      <div class="logo">
        <img src="/assets/shared/logo.svg" alt="Space Tourism Logo">
      </div>
      <div class="text">
        <router-link :to="{name: 'home'}" >00 HOME</router-link>
        <router-link :to="{name:'destination'}">01 DESTINATION</router-link>
        <router-link :to="{name:'crew'}">02 CREW</router-link>
        <router-link :to="{name:'technology'}">03 TECHNOLOGY</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>