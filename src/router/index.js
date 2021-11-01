import { createRouter, createWebHistory } from 'vue-router'
import DisplayRides from '../components/DisplayRides'
import RideData from '../components/RideData'
import Register from '../components/Register'
import AdditionalDetails from '../components/AdditionalDetails'
import PublishRide from '../components/PublishRide'
import SearchComp from '../components/SearchComp'
import Login from '../components/Login'
import DisplayUser from '../components/DisplayUser'



const routes = [

 {
     name:'searchcomp',
     path:'/',
     component:SearchComp

 },
 {
     name:'displayrides',
     path:'/displayrides',
     component:DisplayRides

 },
 {
   name:'rideData',
   path:'/rideData',
   component:RideData,
   
 },

 {

   name:'register',
   path:'/register',
   component:Register
 },
  {

   name:'register_additionaldetails',
   path:'/register_additionaldetails',
   component:AdditionalDetails,

 },
 {

   name:'publishride',
   path:'/publishride',
   component:PublishRide
 },
  {

   name:'login',
   path:'/login',
   component:Login
 },
  {

   name:'DisplayUser',
   path:'/DisplayUser',
   component:DisplayUser
 }
  
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
