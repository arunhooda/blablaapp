<template>

		<div id="search_banner2">
		<span>Coronavirus: for more information about the current situation, please read our Help Centre</span>
	</div>
	

	<div class="searchbox">
		<h2>Your pick of rides at low prices</h2>
		<form @submit.prevent="formHandler" class="searchform">
			<input
				type="text"
				v-model="origin"
				name="origin"
				 placeholder="Leaving From..."
				 id="leftinput"
				
				


			/>

			<input
				type="text"
				v-model="destination"
				name="destination"
				placeholder="Going To..."
			/>

			<input
				type="date"
				name="tripdate"
				v-model="tripdate"
				placeholder="Date"
			/>
			<button type="submit"><i class="fas fa-search"></i></button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			origin: "",
			destination: "",
			tripdate: ""
		  
		};
	},
	beforeMount(){
          let refreshcheck=localStorage.getItem("storedEmail");
          let valset=false

          if(refreshcheck)
          	valset=true
          console.log("status check before refresh"+refreshcheck+valset)
            if(refreshcheck)
            	 this.$store.commit('setAuthentication',valset)
               
	},

	methods: {
		async formHandler() {
			this.$store.commit("setLocations", this.origin, this.destination);

			const response = await fetch(
				"http://localhost:3000/rides?origin=" +
					this.origin +
					"&destination=" +
					this.destination
			);

			const movies = await response.json();

			var startDate = new Date(this.tripdate);

			var resultMovies = movies.filter((a) => {
				var date = new Date(a.tripdate);

				return date >= startDate && date <= startDate;
			});

			this.$store.commit("setRidesList", resultMovies);

			this.$router.push({ name: "displayrides" });
		},


		
	},

};
</script>

<style scoped>
@import "../css/Search.css";
</style>
