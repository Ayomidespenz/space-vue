<template>
  <div class="crew-page">
    <!-- <Navbar /> -->
    <div class="main-img">
    <main>
      <h1><span>02</span> Meet your crew</h1>
      <div class="crew-flex">
        <div class="crew-info">
          <div v-if="currentCrew">
            <p>{{ currentCrew.role.toUpperCase() }}</p>
            <h2>{{ currentCrew.name }}</h2>
            <p>{{ currentCrew.bio }}</p>
          </div>
       <div class="crew-buttons">
  <button
    v-for="(member, idx) in crew"
    :key="member.name"
    :class="{ active: idx === currentIndex }"
    @click="currentIndex = idx"
  >
    
  </button>
</div>
        </div>
        <div class="crew-image" v-if="currentCrew">
          <img :src="currentCrew.images.webp" :alt="currentCrew.name">
        </div>
      </div>
    </main>
  </div>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar.vue'
// import Navbar from '../components/Navbar.vue'
import data from '../data.json'

export default {
  name: 'Crew',
  // components: { Navbar },
  data() {
    return {
      crew: data.crew,
      currentIndex: 0
    }
  },
  computed: {
    currentCrew() {
      return this.crew[this.currentIndex];
    }
  }
}
</script>

<style scoped>
.crew-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 2rem;
}
.crew-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.crew-image {
 
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.crew-image img {
  max-width: 100%;
  height: 60vh;
  object-fit: contain;
  border-radius: 10px;
}
.crew-buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
.crew-buttons button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #222;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.crew-buttons button.active,
.crew-buttons button:hover {
  background: #fff;
  color: #222;
  border: 2px solid #222;
}
h1{
  font-size: 25px;
  margin-left: -100px;
}
.crew-page{
   background-image: url('./public/assets/crew/background-crew-desktop.jpg');
   background-repeat: no-repeat;
   background-size: cover;
     min-height: 100vh;
  padding: 150px 165px;
}
</style>