<template>
	<div id="registercomp">

		<h2>Welcome, please register to start publishing rides</h2>
		<form class="registerform" @submit.prevent="submithandler">
			<label for="username">Email</label><br />
			<input
				type="text"
				name="username"
				id="username"
				v-model="username"
				@keyup="keypresshandler"
				required
			/>
			<p v-if="emailidcheck" class="errorcheck">
				The username already exists
			</p>
			<label for="password">Password</label><br />
			<input
				type="password"
				name="password"
				id="password"
				v-model="password"
				required
			/><br />
			<button type="submit">Register</button>
		</form>
		<h3>Already have an account?<router-link :to="{ name: 'login' }">Click to login</router-link></h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: "",
			tempid: "",
			emailidcheck: false,
		};
	},

	methods: {
		keypresshandler() {
			this.emailidcheck = false;
		},

		async submithandler() {
			const emailcheck = await fetch(
				"http://localhost:3000/users?email=" + this.username
			);

			const emailval = await emailcheck.json();

			if (emailval.length > 0) {
				this.emailidcheck = true;
			} else {
				const d = new Date();
				await fetch("http://localhost:3000/users", {
					method: "POST",

					body: JSON.stringify({
						email: this.username,
						password: this.password,
						ridespublished: 0,
						joiningdate: d,
						ridestaken: 0,
					}),

					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				})
					// Converting to JSON
					.then((response) => response.json())

					// Displaying results to console
					.then((json) => (this.tempid = json.id));

				localStorage.setItem("storedEmail", this.username);
				localStorage.setItem("storedID", this.tempid);
				console.log(this.tempid);

				this.$router.push({ name: "register_additionaldetails" });
			}
		},
	},
};
</script>

<style scoped>
@import "../css/Register.css";
</style>
