<template>
	<div class="additionaldetailsform">
		<h2>Welcome to LALa cars</h2>
		<h3>Please provide the following details to continue</h3>
		<form class="additionalform" @submit.prevent="formHandler">
			<label for="name">Your Name:</label>
			<input type="text" id="name" v-model="name" required /><br />
			<label for="gender">Your Gender:</label>

			<select v-model="gender" id="gender" required>
				<option value="">Select</option>
				<option value="male">Male</option>
				<option value="female"> Female</option>
			</select>
			<br />
			<label for="name">Mobile:</label>
			<input type="text" id="mobile" v-model="mobile" required /><br />

			<label for="talking">How would you describe yourself:</label>

			<select v-model="talking" id="talking" required>
				<option value="">Select</option>
				<option value="talkative">I'm a chatterbox</option>
				<option value="silent">
					I’m chatty when I feel comfortable</option
				>
			</select>
			<br />

			<button type="submit">Continue</button>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			name: "",
			gender: "",
			mobile: "",
			talking: "",
		};
	},
	beforeMount() {
		console.log("stored email" + localStorage.getItem("storedEmail"));
		console.log("stored id" + localStorage.getItem("storedID"));
	},
	methods: {
		async formHandler() {
			console.log("fomr jas neem submitteed");
			console.log(this.name + this.gender + this.mobile + this.talking);

			let tempid = localStorage.getItem("storedID");
			console.log;
			const response1 = await fetch(
				"http://localhost:3000/users/" + tempid,
				{
					// Adding method type
					method: "PATCH",

					// Adding body or contents to send
					body: JSON.stringify({
						name: this.name,
						gender: this.gender,
						mobile: this.mobile,
						talking: this.talking,
					}),

					// Adding headers to the request
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			);

			const movies = await response1.json();
			this.$router.push({name:'publishride'})
		},
	},
};
</script>
<style>
@import "../css/AdditionalDetails.css";
</style>
