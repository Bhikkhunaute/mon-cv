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
        <ExperienceTimeline 
          title="Expériences professionnelles"
          :experiences-data="professionnelles" 
        />
        <ExperienceTimeline 
          title="Formations"
          :experiences-data="formations" 
        />
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
    SavoirEtre,
    AboutMe,
  },
  data() {
    return {
      professionnelles: [
        { id: 1, title: "Webmaster", date: "Mars 2021 - Mars 2025", location: "Ecole Nationale de la Magistrature", description: "loremp ipsum dolores", missions: "<ul><li>testtst</li></ul>lorem ipsum" },
        { id: 2, title: "Chef de projet Web", date: "Mars 2020 - Septembre 2020", location: "EnjoyMonCSE", description: "loremp ipsum dolores", missions: "lorem ipsum" },
        { id: 3, title: "Freelance - Webdesign/Developpeur", date: "2016 - Décembre 2019", location: "Victor Prudhon", description: "loremp ipsum dolores", missions: "lorem ipsum" },
        { id: 4, title: "Webmaster", date: "Mars 2018 - Mars 2019", location: "Médiathèque Marie Rouanet", description: "loremp ipsum dolores", missions: "lorem ipsum" },
        { id: 5, title: "Developpeur Web", date: "Avril 2016 - Décembre 2016", location: "LIRMM Montpellier", description: "loremp ipsum dolores", missions: "lorem ipsum" },
      ],
      formations: [
          { id: 1, title: "D.U.T Métier de l’internet et du Multimédia", date: "2014 - 2016", location: "IUT Béziers" },
          { id: 2, title: "Faculté des Sciences spécialité Mathématiques/Informatique", date: "2012 - 2014", location: "Facultés des sciences de Montpellier"},
          { id: 3, title: "Baccalauréat Scientifique, spécialité Physique-Chimie - Avec mention Assez Bien", date: "2012", location: "Lycée Jean Jaurès - Saint Clément de Rivières"},
        ]
    };
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
