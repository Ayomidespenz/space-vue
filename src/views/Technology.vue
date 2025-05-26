<template>
  <NavBar/>
  <div id="main">
    <div id="part1">
      <h3 id="meet"><span>03</span> Space launch 101</h3>
      <div class="fles">
        <div class="btn-group">
          <button
            v-for="(item, index) in technology"
            :key="index"
            @click="selectTechnology(index)"
            class="btn rounded-circle d-flex align-items-center justify-content-center"
            :class="currentIndex === index ? 'btn-primary' : 'btn-secondary'"
            style="width: 50px; height: 50px;"
          >
            {{ index + 1 }}
          </button>
        </div>
        <div class="desc">
          <h4>THE TERMINOLOGY</h4>
          <h2 class="display-5 mb-5 ">{{ currentTech.name }}</h2>
          <p class="lead">{{ currentTech.description }}</p>
        </div>
      </div>
    </div>
    <div id="part2">
      <img
        :src="currentTech.images.portrait"
        alt="Technology Image"
        class="img-fluid rounded"
      />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  components: { NavBar },
  data() {
    return {
      technology: [
        {
          name: "Launch vehicle",
          images: {
            portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
            landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
          },
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
          name: "Spaceport",
          images: {
            portrait: "./assets/technology/image-spaceport-portrait.jpg",
            landscape: "./assets/technology/image-spaceport-landscape.jpg",
          },
          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        {
          name: "Space capsule",
          images: {
            portrait: "./assets/technology/image-space-capsule-portrait.jpg",
            landscape: "./assets/technology/image-space-capsule-landscape.jpg",
          },
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentTech() {
      return this.technology[this.currentIndex];
    },
  },
  methods: {
    selectTechnology(index) {
      this.currentIndex = index;
    },
  },
};
</script>


    <style scoped>
button {
    width: 55px !important;
    height:55px !important;
  background-color: #222;
  border-radius: 50%;
  color: white;
  transition: background 0.2s, color 0.2s;
}
.btn-group button:hover {
  background: #fff !important;
  color: #222 !important;
}
a, button {
  cursor: pointer;
  text-decoration: none;
  color: #d0d6f9;
}

#main {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;
     background-image: url('./public/assets/technology/background-technology-desktop.jpg');
 
}

.fles {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  margin-top: 5rem;
  gap: 2rem;
}
h3{
   margin-top: 10rem; 
   margin-left: 30px;
   font-weight: bolder;
}

.desc {
  flex: 1;
  margin-bottom: 30px;
  
}

.btn-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
#part2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; 
}
h2{
    margin-bottom: 10px;
    font-size: 29px;
}

#part2 img {
  height: 85%;
  margin-top: 150px;
  max-width: 100%;
  object-fit: cover;

}
h4{
    font-size: 18px;
    margin-top: 40px;
}
#part1{
    width: 50%; 
}
p{
    font-size: 17.8px;
}
.technology-page{

   background-repeat: no-repeat;
     min-height: 100vh;
  padding: 150px 165px;
}
</style>