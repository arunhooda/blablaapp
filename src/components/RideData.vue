<template>
	<div class="finalridedata">
		<h2>{{ $store.state.selectedRide.tripdate }}</h2>

		<div>
			<div class="finalridedata_timedes">
				<span class="firstspan">18:00hrs</span>
				<span>{{ $store.state.selectedRide.fullorigin }}</span>
			</div>

			<div class="finalridedata_timedes">
				<span class="firstspan">18:00hrs</span>
				<span>{{
					$store.state.selectedRide.fulldestination
				}}</span>
			</div>

			<div class="divbreak"></div>

			<div class="ridedata_datacontainer">
				<p>Total fare for one passenger is</p>
				<p>{{ $store.state.selectedRide.fare }}</p>
			</div>

			<div class="divbreak"></div>

			<div class="ridedata_datacontainer">
				<div>
					<p>{{ $store.state.selectedRide.driver }}</p>
					<p>{{ $store.state.selectedRide.rating }}</p>
				</div>
				<div>
					
                             <div class="ridedata_datacontainer_pic"><i class="fab fa-mandalorian"></i></div>

				</div>
			</div>
                 <div class="divbreak"></div>

			<p v-if="$store.state.selectedRide.smoke"><i class="fas fa-smoking"></i>    Smoking friendly</p>
			<p v-else><i class="fas fa-smoking-ban"></i>    Smoking is not allowed</p>

                  <p v-if="$store.state.selectedRide.pet"> <i class="fas fa-dog"></i>    Pet friendly</p>
			<p v-else><i class="fas fa-dog"></i>    Pets not allowed</p>


                 


                   <div class="ridedata_datacontainer">
				<div>
					  <p><i class="fas fa-car"></i>    {{ $store.state.selectedRide.car }}</p>
				</div>
				<div>
					
                            

				</div>
			</div>
                <div class="divbreak"></div>

         <div class="ridedata_datacontainer1">
				<p>Co passengers :</p>
				<div v-for="singlePassenger in  $store.state.selectedRide.passengerList"
				 @click="userclickhandler(singlePassenger.id)">

					<p>{{ singlePassenger.name }}</p>

				</div>
			</div>


		</div>
		<button class="bookridebutton" @click="bookridehandler">Book Ride </button>
	</div>
</template>

<script>
export default {
	props: [],
	data() {
		return {
}
	},
	methods:{

         async userclickhandler(id){

                
			   localStorage.setItem("selectedID",id)

             
         
               this.$router.push({name:'DisplayUser'})
         },


		 async bookridehandler(){



		 	let nop=Number(this.$store.state.selectedRide.passengers)-1
		 	let riderId={name:localStorage.getItem("storedName"),id:localStorage.getItem("storedID"),gender:localStorage.getItem("storedGender")}
		 	console.log(riderId)
		 	let tempList=this.$store.state.selectedRide.passengerList
		 	let updatedlist=[...tempList,riderId]

			if(this.$store.state.isAuthenticated) {

           const response1 = await fetch(
				"http://localhost:3000/rides/" +  this.$store.state.selectedRide.id,
				{
					// Adding method type
					method: "PATCH",

					// Adding body or contents to send
					body: JSON.stringify({
						passengers:Number(nop),
						passengerList:updatedlist
						
					}),

					// Adding headers to the request
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			);

			const movies = await response1.json();
             

			}

			else{
               
              this.$router.push({name:'login'})

			}
		}
	},

	mounted() {},
};
</script>

<style scoped>
@import "../css/RideData.css";
</style>
