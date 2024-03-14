<template>
  <div>
    <div class="rawfor2">
      <div class="SideBarLeft">
        <div class="img-rounded" />
        <SkillsSection title="Technologies" />
        <Competences title="Compétences" />
        <Hobbies title="Hobbies" />
      </div>
      <div class="SideBarRight">
        <HelloWorld msg="Victor Prudhon" />
        <ExperienceTimeline title="Expériences professionnelles" />
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

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SkillsSection,
    ExperienceTimeline,
    Competences,
    Hobbies,
  }
}
</script>
<style>
.rawfor2 {
  display: flex;
}
.SideBarLeft {
  flex: 0 0 30%;
  color: white;
}
.SideBarLeft h2 {
  text-align: left;
  margin-left: 3rem;
}
.SideBarRight {
  flex: 0 0 70%;
}
.home {
  display: flex;
  justify-content: space-between;
}
.img-rounded {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: url('/src/assets/victor.jpg');
  background-size: cover;
  background-position: center;
  border: #01C38D solid;
  margin: auto;
}
</style>
