<template>

 <div id="nav">


    <div class="hamburgermenu" @click="usermenuclick2"><i class="fas fa-bars"></i></div> 
       
       <div class="hm_menu" :class="{active2:isClicked2}" @click="usermenuclick2" > 

          <router-link :to="{name:'searchcomp'}"><span>Search</span></router-link>
          <router-link :to="{ name: 'publishride' }"><span>Post</span></router-link>

       </div> 

    <div class="nav_logo">



 <router-link to="/"><span>BlaBlaCars</span></router-link>

    </div>



    <div class="nav_menu">

      <div class="nav_menu_firstmenu">  

       <router-link :to="{name:'searchcomp'}"><span>Search</span></router-link>
      <router-link :to="{ name: 'publishride' }"><span>Post</span></router-link>

       </div>
     
      <div>  <span @click="usermenuclick"><i class="fas fa-user-minus"></i></span>

      </div>
    

     <div class="usermenu" :class="{active:isClicked}" @click="usermenuclick" > 

         <router-link :to="{ name: 'login' }"><span>Login</span></router-link>
         <router-link :to="{ name: 'register' }"><span>REgister</span></router-link>
         <span v-if="$store.state.isAuthenticated===true" @click="logouthandler"> Logout</span>

       </div> 


    </div>

    
  </div>

  
  <router-view />
  <InfoSection v-if="['searchcomp'].includes($route.name)"/>
  <BookingInfoSection v-if="['searchcomp'].includes($route.name)"/>
  <PopularRides v-if="['searchcomp'].includes($route.name)"/>
  <FooterOne/>
</template>

<script>
import SearchComp from "./components/SearchComp.vue";
import InfoSection from "./components/InfoSection.vue";
import BookingInfoSection from "./components/BookingInfoSection.vue";
import PopularRides from "./components/PopularRides.vue";
import FooterOne from "./components/FooterOne.vue";

export default {
  components: { SearchComp,InfoSection,BookingInfoSection,PopularRides,FooterOne },
  data() {return{

    isClicked:false,
    isClicked2:false

    
  }},
 beforeMount(){
          let refreshcheck=localStorage.getItem("storedEmail");
          let valset=false

          if(refreshcheck)
            valset=true
          console.log("status check before refresh"+refreshcheck+valset)
            if(refreshcheck)
               this.$store.commit('setAuthentication',valset)
               
  },
  updated(){

  },
  methods:{
 usermenuclick(){
  this.isClicked=!this.isClicked

  if(this.isClicked2)
      this.isClicked2=!this.isClicked2

      
},
usermenuclick2(){
  this.isClicked2=!this.isClicked2

   if(this.isClicked)
      this.isClicked=!this.isClicked
     
},
 logouthandler(){

 this.$store.commit('setAuthentication',false)

        localStorage.setItem("storedEmail", '');
        localStorage.setItem("storedID", '');
          localStorage.setItem("storedName", '');

   this.$router.push({ name: "searchcomp" });
               
 }

  }
};
</script>

<style>
@import "./css/App.css";
</style>