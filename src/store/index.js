import { createStore } from 'vuex'

export default createStore({
  state: {
  origin:'',
  org2:'delhi',
  destination:'',
  ridesList:[],
  selectedRide:null,
  isAuthenticated:false
 
  },
  mutations: {

    setLocations(state,org,des){
          state.origin=org 
          state.destination=des  
          
           },

           setRidesList(state,datalist){
             state.ridesList=datalist

           },

           setSelectedRide(state,rideID){
             state.selectedRide=rideID
           },
           setAuthentication(state,val){
             state.isAuthenticated=val
           }

  },
  actions: {
        

  },
  modules: {
  }
})
