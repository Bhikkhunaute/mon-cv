<template>
  <div class="experience">
    <div class="timeline">
      <div 
        v-for="experience in experiences" 
        :key="experience.id" 
        class="event"
      >
        <div class="dot" />
        <div class="info">
          <h3>{{ experience.title }}</h3>
          <p>{{ experience.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        { id: 1, title: "Expérience 1", date: "2022 - 2023" },
        { id: 2, title: "Expérience 2", date: "2023 - 2024" },
        // Ajoutez d'autres expériences professionnelles ici
      ]
    };
  }
};
</script>
<style scoped>
.experience {
  position: relative;
}

.timeline {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.event {
  position: relative;
  margin-bottom: 20px; /* Espacement entre les expériences */
}

.dot {
  width: 10px; /* Diamètre du rond */
  height: 10px;
  border-radius: 50%;
  background-color: #ed1c1c; /* Couleur du rond */
  margin-right: 10px; /* Espacement entre les ronds */
}
</style>
