<template>
  <div class="destination-page">
    <main>
      <h1 id="pick"><span>01</span> Pick your destination</h1>
      <DestinationContent />
    </main>
  </div>
</template>

<script>
import DestinationContent from '../components/DestinationContent.vue'

export default {
  name: 'Destination',
  components: {  DestinationContent }
}
</script>