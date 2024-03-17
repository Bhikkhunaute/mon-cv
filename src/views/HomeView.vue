<template>
  <div>
    <div class="row align-items-end">
      <div class="col-10 col-md-2 col-xl-2 offset-1">
        <img 
          src="../assets/victor.jpg" 
          class="img-fluid pictured" 
        >
      </div>
      <div class="col-10 col-md-7 col-xl-7 offset-1">
        <HelloWorld msg="Victor Prudhon" />
      </div>
    </div>
    <div class="row">
      <div class="col-10 col-md-2 offset-1 left">
        <AboutMe title="Contact" />
        <SkillsSection title="Technologies" />
        <Competences title="Compétences" />
        <SavoirEtre title="Savoir être" />
        <Hobbies title="Hobbies" />
      </div>
      <div class="col-10 col-md-7 offset-1 right">
        <ExperienceTimeline title="Expériences professionnelles" />
        <FormationTimeline title="Formations" />
      </div>
    </div>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import SkillsSection from '@/components/Skills.vue'
import ExperienceTimeline from '@/components/ExpPro.vue'
import Competences from '@/components/Competences.vue'
import Hobbies from '@/components/Hobbies.vue'
import FormationTimeline from '@/components/Formations.vue'
import SavoirEtre from '@/components/Savoiretre.vue'
import AboutMe from '@/components/about.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SkillsSection,
    ExperienceTimeline,
    Competences,
    Hobbies,
    FormationTimeline,
    SavoirEtre,
    AboutMe,
  }
}
</script>
<style>
.left {
  text-align: left;
  color: white;
}
.pictured {
  border-radius: 50%;
  border: #01C38D solid;
  margin: auto;
  margin-bottom: 5rem;
}
</style>
