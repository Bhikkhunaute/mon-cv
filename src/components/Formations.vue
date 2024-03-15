<template>
  <div class="experience">
    <h2>{{ title }}</h2>
    <div class="timeline" />
    <div 
      v-for="formation in formations" 
      :key="formation.id" 
      class="row align-items-center mb-3"
    >
      <div class="col-md-1">
        <div class="dot" />
      </div>
      <div class="col-md-10">
        <div class="row">
          <h3>{{ formation.title }}</h3>
        </div>
        <div class="row">
          <div class="col-md-4">
            <p>{{ formation.location }}</p>
          </div>
          <div class="col-md-4">
            <p>{{ formation.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'FormationTimeline',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        formations: [
          { id: 1, title: "D.U.T Métier de l’internet et du Multimédia", date: "2014 - 2016", location: "IUT Béziers" },
          { id: 2, title: "Faculté des Sciences spécialité Mathématiques/Informatique", date: "2012 - 2014", location: "Facultés des sciences de Montpellier"},
          { id: 3, title: "Baccalauréat Scientifique, spécialité Physique-Chimie - Avec mention Assez Bien", date: "2012", location: "Lycée Jean Jaurès - Saint Clément de Rivières"},
        ]
      };
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
top: 90px;
left: 1.4rem;
height: calc(100% - 160px);
width: 10px;
background-color: #fff;
}
  </style>
  