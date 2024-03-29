(function(){"use strict";var e={834:function(e,t,n){var o=n(751),i=n(641);const r={class:"container-fluid"},l={class:"app"},s={class:"row"},a={class:"col-12"};function c(e,t){const n=(0,i.g2)("router-link"),o=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",l,[(0,i.Lk)("div",s,[(0,i.Lk)("nav",a,[(0,i.bF)(n,{to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)(" Home ")])),_:1}),(0,i.bF)(n,{to:"/about"},{default:(0,i.k6)((()=>[(0,i.eW)(" Portfolio ")])),_:1})])]),(0,i.bF)(o)])])}var u=n(262);const d={},m=(0,u.A)(d,[["render",c]]);var p=m,f=n(220),v=n(21);const b={class:"row align-items-end"},h=(0,i.Lk)("div",{class:"col-10 col-md-2 col-xl-2 offset-1"},[(0,i.Lk)("img",{src:v,class:"img-fluid pictured"})],-1),g={class:"col-10 col-md-7 col-xl-7 offset-1"},k={class:"row"},L={class:"col-10 col-md-2 offset-1 left"},y={class:"col-10 col-md-7 offset-1 right"};function E(e,t,n,o,r,l){const s=(0,i.g2)("HelloWorld"),a=(0,i.g2)("AboutMe"),c=(0,i.g2)("SkillsSection"),u=(0,i.g2)("Competences"),d=(0,i.g2)("SavoirEtre"),m=(0,i.g2)("Hobbies"),p=(0,i.g2)("ExperienceTimeline");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("div",b,[h,(0,i.Lk)("div",g,[(0,i.bF)(s,{msg:"Victor Prudhon"})])]),(0,i.Lk)("div",k,[(0,i.Lk)("div",L,[(0,i.bF)(a,{title:"Contact"}),(0,i.bF)(c,{title:"Technologies"}),(0,i.bF)(u,{title:"Compétences"}),(0,i.bF)(d,{title:"Savoir être"}),(0,i.bF)(m,{title:"Hobbies"})]),(0,i.Lk)("div",y,[(0,i.bF)(p,{title:"Expériences professionnelles","experiences-data":r.professionnelles},null,8,["experiences-data"]),(0,i.bF)(p,{title:"Formations","experiences-data":r.formations},null,8,["experiences-data"])])])])}var C=n(33);const S=e=>((0,i.Qi)("data-v-4bf8f50c"),e=e(),(0,i.jt)(),e),A={class:"hello"},_=S((()=>(0,i.Lk)("h3",null,"Développeur front-end, 30 ans, Permis B",-1))),w=S((()=>(0,i.Lk)("p",null,[(0,i.eW)(" Actuellement en poste en tant Webmaster au sein de l'Ecole nationale de la magistrature."),(0,i.Lk)("br"),(0,i.eW)(" Passioné par la culture du web, le développement et le design, j'ai su lier technique, graphisme et optimisation."),(0,i.Lk)("br"),(0,i.eW)(" Je suis optimiste, aimant apprendre tous les jours afin de me perfectionner et donner le meilleur de moi-même. ")],-1)));function x(e,t,n,o,r,l){return(0,i.uX)(),(0,i.CE)("div",A,[(0,i.Lk)("h1",null,(0,C.v_)(n.msg),1),_,w])}var F={name:"HelloWorld",props:{msg:{type:String,default:""}}};const M=(0,u.A)(F,[["render",x],["__scopeId","data-v-4bf8f50c"]]);var X=M;const j={class:"skills"},O={class:"icons"};function T(e,t,n,o,r,l){const s=(0,i.g2)("font-awesome-icon");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("h2",null,(0,C.v_)(n.title),1),(0,i.Lk)("div",j,[(0,i.Lk)("div",O,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.technologies,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:"tech"},[(0,i.bF)(s,{icon:e.icon},null,8,["icon"]),(0,i.Lk)("span",null,(0,C.v_)(e.name),1)])))),128))])])])}var P=n(875),W={name:"SkillsSection",props:{title:{type:String,default:""}},computed:{technologies(){return[{name:"HTML5",icon:P.Y5v},{name:"CSS3",icon:P.Yxq},{name:"Sass",icon:P.kyA},{name:"Less",icon:P.btD},{name:"Javascript",icon:P.hz0},{name:"Bootstrap",icon:P.gwm},{name:"Vue.js",icon:P.ltK},{name:"Git",icon:P._gr},{name:"Github",icon:P.Vz1}]}}};const N=(0,u.A)(W,[["render",T]]);var B=N;const D={class:"experience"},I={class:"timeline"},q={class:"timeline-item mb-5"},H={class:"fw-bold"},K={class:"mb-2 fw-bold"},J={class:"mb-2 fw-bold"};function V(e,t,n,o,r,l){return(0,i.uX)(),(0,i.CE)("div",D,[(0,i.Lk)("h2",null,(0,C.v_)(n.title),1),(0,i.Lk)("ul",I,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.processedExperiences,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"row align-items-center mb-5"},[(0,i.Lk)("li",q,[(0,i.Lk)("h5",H,(0,C.v_)(e.title),1),(0,i.Lk)("p",K,(0,C.v_)(e.date),1),(0,i.Lk)("p",J,(0,C.v_)(e.location),1),(0,i.Lk)("p",null,(0,C.v_)(e.description),1)])])))),128))])])}var R={name:"ExperienceTimeline",props:{title:{type:String,default:""},experiencesData:{type:Array,default:()=>[]}},computed:{processedExperiences(){return this.experiencesData.map((e=>({...e})))}}};const z=(0,u.A)(R,[["render",V],["__scopeId","data-v-75d816c6"]]);var U=z;const Y={class:"skills"};function G(e,t,n,o,r,l){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("h2",null,(0,C.v_)(n.title),1),(0,i.Lk)("div",Y,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.technologies,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t},[(0,i.Lk)("span",null,(0,C.v_)(e.name),1)])))),128))])])}var Q={name:"CompetencesSection",props:{title:{type:String,default:""}},computed:{technologies(){return[{name:"Responsive design"},{name:"Webdesign"},{name:"Accessibilité (Norme AAA)"},{name:"Photoshop"},{name:"Environnement VScode"},{name:"SEO"},{name:"Optimisation des performances web"},{name:"Méthodologie Agile"}]}}};const $=(0,u.A)(Q,[["render",G]]);var Z=$;const ee={class:"skills"},te={class:"icons"};function ne(e,t,n,o,r,l){const s=(0,i.g2)("font-awesome-icon");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("h2",null,(0,C.v_)(n.title),1),(0,i.Lk)("div",ee,[(0,i.Lk)("div",te,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.technologies,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:"tech"},[(0,i.bF)(s,{icon:e.icon},null,8,["icon"]),(0,i.Lk)("span",null,(0,C.v_)(e.name),1)])))),128))])])])}var oe=n(188),ie={name:"HobbiesSection",props:{title:{type:String,default:""}},computed:{technologies(){return[{name:"Vélo",icon:oe.N6U},{name:"Jeux vidéo",icon:oe.Rbk},{name:"Jeux de sociétés",icon:oe.Q9c},{name:"Astronomie",icon:oe.KMJ},{name:"Nouvelles technologies",icon:oe.fPr}]}}};const re=(0,u.A)(ie,[["render",ne]]);var le=re;const se={class:"skills"};function ae(e,t,n,o,r,l){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("h2",null,(0,C.v_)(n.title),1),(0,i.Lk)("div",se,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.technologies,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t},[(0,i.Lk)("span",null,(0,C.v_)(e.name),1)])))),128))])])}var ce={name:"SavoirEtre",props:{title:{type:String,default:""}},computed:{technologies(){return[{name:"Autonomie"},{name:"Travail en équipe"},{name:"Bonne humeur"},{name:"Optimiste"},{name:"Dynamique"}]}}};const ue=(0,u.A)(ce,[["render",ae]]);var de=ue;const me={class:"skills"},pe={class:"col-md-4"},fe={class:"col-md-8 alleft"};function ve(e,t,n,o,r,l){return(0,i.uX)(),(0,i.CE)("div",me,[(0,i.Lk)("h2",null,(0,C.v_)(n.title),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.about,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"row"},[(0,i.Lk)("div",pe,[(0,i.Lk)("p",null,[(0,i.Lk)("strong",null,(0,C.v_)(e.title),1)])]),(0,i.Lk)("div",fe,[(0,i.Lk)("p",null,(0,C.v_)(e.txt),1)])])))),128))])}var be={name:"SavoirEtre",props:{title:{type:String,default:""}},data(){return{about:[{id:1,title:"Lieu :",txt:"Bordeaux"},{id:2,title:"Mail :",txt:"prudhon.victor.pro@gmail.com"},{id:2,title:"Tel :",txt:"0600000000"}]}}};const he=(0,u.A)(be,[["render",ve]]);var ge=he,ke={name:"HomeView",components:{HelloWorld:X,SkillsSection:B,ExperienceTimeline:U,Competences:Z,Hobbies:le,SavoirEtre:de,AboutMe:ge},data(){return{professionnelles:[{id:1,title:"Webmaster",date:"Mars 2021 - Mars 2025",location:"Ecole Nationale de la Magistrature",description:"loremp ipsum dolores",missions:"<ul><li>testtst</li></ul>lorem ipsum"},{id:2,title:"Chef de projet Web",date:"Mars 2020 - Septembre 2020",location:"EnjoyMonCSE",description:"loremp ipsum dolores",missions:"lorem ipsum"},{id:3,title:"Freelance - Webdesign/Developpeur",date:"2016 - Décembre 2019",location:"Victor Prudhon",description:"loremp ipsum dolores",missions:"lorem ipsum"},{id:4,title:"Webmaster",date:"Mars 2018 - Mars 2019",location:"Médiathèque Marie Rouanet",description:"loremp ipsum dolores",missions:"lorem ipsum"},{id:5,title:"Developpeur Web",date:"Avril 2016 - Décembre 2016",location:"LIRMM Montpellier",description:"loremp ipsum dolores",missions:"lorem ipsum"}],formations:[{id:1,title:"D.U.T Métier de l’internet et du Multimédia",date:"2014 - 2016",location:"IUT Béziers"},{id:2,title:"Faculté des Sciences spécialité Mathématiques/Informatique",date:"2012 - 2014",location:"Facultés des sciences de Montpellier"},{id:3,title:"Baccalauréat Scientifique, spécialité Physique-Chimie - Avec mention Assez Bien",date:"2012",location:"Lycée Jean Jaurès - Saint Clément de Rivières"}]}}};const Le=(0,u.A)(ke,[["render",E]]);var ye=Le;const Ee=[{path:"/",name:"home",component:ye},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,556))}],Ce=(0,f.aE)({history:(0,f.Bt)(),routes:Ee});var Se=Ce,Ae=n(278),_e=(0,Ae.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),we=n(273),xe=n(107);xe.Yv.add(P.ltK),(0,o.Ef)(p).use(_e).use(Se).component("font-awesome-icon",we.gc).mount("#app")},21:function(e,t,n){e.exports=n.p+"img/victor.0531dd53.jpg"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,a=0;a<o.length;a++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(s=!1,r<l&&(l=r));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.b6ec1a86.js"}}(),function(){n.miniCssF=function(e){return"css/about.636be589.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mon_cv:";n.l=function(o,i,r,l){if(e[o])e[o].push(i);else{var s,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[i];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,i,r){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",n.nc&&(l.nonce=n.nc);var s=function(n){if(l.onerror=l.onload=null,"load"===n.type)i();else{var o=n&&n.type,s=n&&n.target&&n.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+s+")");a.name="ChunkLoadError",a.code="CSS_CHUNK_LOAD_FAILED",a.type=o,a.request=s,l.parentNode&&l.parentNode.removeChild(l),r(a)}};return l.onerror=l.onload=s,l.href=t,o?o.parentNode.insertBefore(l,o.nextSibling):document.head.appendChild(l),l},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var l=n.miniCssF(o),s=n.p+l;if(t(l,s))return i();e(o,s,null,i,r)}))},i={524:0};n.f.miniCss=function(e,t){var n={594:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var l=n.p+n.u(t),s=new Error,a=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",s.name="ChunkLoadError",s.type=r,s.request=l,i[1](s)}};n.l(l,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,l=o[0],s=o[1],a=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(a)var u=a(n)}for(t&&t(o);c<l.length;c++)r=l[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkmon_cv"]=self["webpackChunkmon_cv"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(834)}));o=n.O(o)})();
//# sourceMappingURL=app.030a269f.js.map