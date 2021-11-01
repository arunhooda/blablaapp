<template>
	<div class="publishride">
         <h2>Become a BlaBlaCar driver and save on travel costs by sharing your ride with passengers. </h2>


		<form class="publishrideform" @submit.prevent="submithandler">
			<label for="city">Enter City: </label>
			<input type="text" id="city" v-model="city" /><br />

			<label for="dcity">Enter Destination City: </label>
			<input type="text" id="dcity" v-model="dcity" /><br />

			<label for="tripdate">Enter Trip Date: </label>
			<input
				type="date"
				name="tripdate"
				v-model="tripdate"
				placeholder="Date"
			/>
			<br />
			<label for="fullocity">Enter Full City: </label>
			<input type="text" id="fullocity" v-model="fullocity" /><br />

			<label for="fulldcity">Enter Full Destination : </label>
			<input type="text" id="fulldcity" v-model="fulldcity" /><br />

			<label for="smoking">Smoking Allowed:</label>

			<select v-model="smoking" id="smoking" required>
				<option value="">Select</option>
				<option value="true">Yes</option>
				<option value="false"> No</option>
			</select>
			<br />

			<label for="pets">Pets Allowed:</label>

			<select v-model="pets" id="pets" required>
				<option value="">Select</option>
				<option value="true">Yes</option>
				<option value="false"> No</option>
			</select>
			<br />

			<label for="fare">Enter Fare: </label>
			<input type="text" id="fare" v-model="fare" /><br />

			<label for="car">Enter car: </label>
			<input type="text" id="car" v-model="car" /><br />

			<label for="Passengers">Passengers Allowed:</label>

			<select v-model="Passengers" id="Passengers" required>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3"> 3</option>
			</select>
			<br />
			<button type="submit">Publish Ride</button>
		</form>






	</div>
	<InfoSectionOne/>
	<PublishReviewComp/>
</template>

<script>

	import InfoSectionOne from "./publishComponents/InfoSectionOne.vue";
	import PublishReviewComp from "./publishComponents/PublishReviewComp.vue";
export default {
	components: { InfoSectionOne,PublishReviewComp },
	data() {
		return {
			city: "",
			dcity: "",
			tripdate: "",
			fullocity: "",
			fulldcity: "",
			smoking: "",
			pets: "",
			fare: "",
			car: "",
			Passengers: "",
		};
	},
	beforeMount() {
		let refreshcheck = localStorage.getItem("storedEmail");
		let valset = false;

		if (refreshcheck) valset = true;
		console.log("status check before refresh" + refreshcheck + valset);
		if (refreshcheck) this.$store.commit("setAuthentication", valset);
	},

	mounted() {
		let checkingAut = this.$store.state.isAuthenticated;
		console.log("chekling...from the store value" + checkingAut);
		console.log(checkingAut === false);
		if (checkingAut === false) {
			console.log(
				"chekling..." + localStorage.getItem("isAuthenticated")
			);
			this.$router.push({ name: "login" });
		}
	},

	methods: {
		async submithandler() {


            let tempid = localStorage.getItem("storedID");
			const response2 = await fetch(
				"http://localhost:3000/users/" + tempid
			);

			const movies2 = await response2.json();
			let temprides=Number(movies2.ridespublished)+1

		
			
			const response3 = await fetch(
				"http://localhost:3000/users/" + tempid,
				{
					// Adding method type
					method: "PATCH",

					// Adding body or contents to send
					body: JSON.stringify({
					ridespublished:temprides
					}),

					// Adding headers to the request
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			);

			const movies3 = await response3.json();









			await fetch("http://localhost:3000/rides", {
				method: "POST",

				body: JSON.stringify({
					origin: this.city,
					destination: this.dcity,
					tripdate: this.tripdate,
					fullorigin: this.fullocity,
					fulldestination: this.fulldcity,
					smoke: this.smoking,
					pet: this.pets,
					fare: "Rs"+this.fare,
					car: this.car,
					passengers: Number(this.Passengers),
					passengerList: [],
					driver:movies3.name,
					rating:"3/5"
				}),

				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				// Converting to JSON
				.then((response) => response.json())

				// Displaying results to console
				.then((json) => console.log(json));



            	
		},
	},
};
</script>

<style>
@import "../css/PublishRide.css";
</style>
