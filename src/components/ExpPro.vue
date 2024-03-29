<template>
  <div class="experience">
    <h2>{{ title }}</h2>
    <ul class="timeline">
      <div 
        v-for="experience in processedExperiences" 
        :key="experience.id" 
        class="row align-items-center mb-5"
      >
        <li class="timeline-item mb-5">
          <h5 class="fw-bold">
            {{ experience.title }}
          </h5>
          <p class="mb-2 fw-bold"> 
            {{ experience.date }}
          </p>
          <p class="mb-2 fw-bold"> 
            {{ experience.location }}
          </p>
          <p>
            {{ experience.description }}
          </p>
        </li>
      </div>
    </ul>
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
  border-left: 6px solid hsl(0, 0%, 90%);
  position: relative;
  list-style: none;
}

.timeline .timeline-item {
  position: relative;
}

.timeline .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .timeline-item:after {
  background-color: hsl(0, 0%, 90%);
  left: -48px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  content: "";
}
</style>
