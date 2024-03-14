<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="skills">
      <div 
        class="icons"
      >
        <div 
          v-for="(tech, index) in technologies" 
          :key="index" 
          class="tech"
        >
          <font-awesome-icon :icon="tech.icon" />
          <span>{{ tech.name }}</span>
        </div>
      </div>    
    </div>
  </div>
</template>
<script>
import { faHtml5, faCss3, faBootstrap, faVuejs, faGithub, faJs, faGit, faSass, faLess, } from '@fortawesome/free-brands-svg-icons';

export default {
  name: 'SkillsSection',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    technologies() {
      return [
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3 },
        { name: 'Sass', icon: faSass },
        { name: 'Less', icon: faLess },
        { name: 'Javascript', icon: faJs },
        { name: 'Bootstrap', icon: faBootstrap },
        { name: 'Vue.js', icon: faVuejs },
        { name: 'Git', icon: faGit },
        { name: 'Github', icon: faGithub },
        // Ajoutez ici d'autres technologies avec leurs icônes
      ];
    }
  }
};
</script>
<style>
.icons {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    flex-wrap: wrap;
}
.tech {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(33.33% - 20px);
}
.tech > svg {
  width: 3rem;
  height: auto;
}
</style>
