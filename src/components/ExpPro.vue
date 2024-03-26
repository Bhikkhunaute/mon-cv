<template>
  <div class="experience">
    <h2>{{ title }}</h2>
    <div class="timeline" />
    <div 
      v-for="experience in processedExperiences" 
      :key="experience.id" 
      class="row align-items-center mb-5"
    >
      <div class="col-md-1">
        <div class="vertical-ligne" />
        <div class="dot" />
      </div>
      <div class="col-md-10 offset-1">
        <div class="row">
          <h3>{{ experience.title }}</h3>
        </div>
        <div class="row">
          <div class="col-md-4">
            <p>{{ experience.location }}</p>
          </div>
          <div class="col-md-4">
            <p>{{ experience.date }}</p>
          </div>
        </div>
        <div class="row">
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceTimeline',
  props: {
    title: {
      type: String,
      default: '',
    },
    experiencesData: {
      type: Array,
      default: () => [],
    }
  },
    computed: {
    processedExperiences() {
      return this.experiencesData.map(experience => ({
        ...experience,
      }));
    }
  }
};
</script>
<style scoped>
h3 {
  margin: 0;
}
.experience {
  position: relative;
  color: white;
  margin-left: 5rem;
}

.timeline {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
}
.dot {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #fff;
}

.timeline::before {
  content: "";
position: absolute;
top: calc(100% - 86%);
left: 1.4rem;
height: calc(100% - 42.2vh);
width: 10px;
background-color: #fff;
}
.vertical-ligne {
  border-right: 10px solid white;
  height: 100%;
}
</style>
