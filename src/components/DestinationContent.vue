<template>
  <section class="destination-container">
    <!-- <Navbar /> -->
    <div class="destination-image">
      <picture>
        <source :srcset="selectedDestination.images.webp" type="image/webp">
        <img :src="selectedDestination.images.png" :alt="selectedDestination.name" id="destination-img">
      </picture>
    </div>
    <div class="destination-content">
      <nav class="tabs" role="tablist">
        <button
          v-for="destination in destinations"
          :key="destination.name"
          class="tab"
          :data-name="destination.name"
          role="tab"
          :aria-selected="selectedDestination.name === destination.name"
          @click="selectDestination(destination.name)"
          :class="{ active: selectedDestination.name === destination.name }"
        >
          {{ destination.name }}
        </button>
      </nav>
      <h2 id="destination-name">{{ selectedDestination.name }}</h2>
      <p id="destination-description">{{ selectedDestination.description }}</p>
      <div class="destination-meta">
        <div>
          <h3>Avg. Distance</h3>
          <p id="destination-distance">{{ selectedDestination.distance }}</p>
        </div>
        <div>
          <h3>Est. Travel Time</h3>
          <p id="destination-travel">{{ selectedDestination.travel }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Navbar from './components/Navbar.vue'
import data from '../data.json'
export default {
  // components:{ Navbar },

  name: 'DestinationContent',
  data() {
    return {
      destinations: data.destinations,
      selectedDestination: data.destinations[0] 
    }
  },
  methods: {
    selectDestination(name) {
      this.selectedDestination = this.destinations.find(dest => dest.name === name)
    }
  }
}
</script>