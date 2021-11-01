<template>
	<div id="logincomp">
		<h2>Hello, please login to book or publish ride</h2>
		<form class="loginform" @submit.prevent="submithandler">
			<label for="username">Email</label><br />
			<input
				type="text"
				name="username"
				id="username"
				v-model="username"
				@keyup="keypresshandler"
				required
			/>

			<label for="password">Password</label><br />
			<input
				type="password"
				name="password"
				id="password"
				v-model="password"
				required
				@keyup="keypresshandler"
			/><br />
			<p v-if="emailidcheck" class="errorcheck">
				The email & password combination is incorrect or the email id is
				not registered
			</p>
			<button type="submit">Login</button>
		</form>

		<h3>Do not have an account?<router-link :to="{ name: 'register' }">Click to register</router-link></h3>
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

			if (emailval.length <= 0 || emailval[0].password != this.password) {
				this.emailidcheck = true;
			} else {
				

				localStorage.setItem("storedEmail", this.username);
				localStorage.setItem("storedID", emailval[0].id);
					localStorage.setItem("storedName", emailval[0].name);
					localStorage.setItem("storedGender", emailval[0].gender);
						
				 this.$store.commit('setAuthentication')

               
 console.log("the value..."+localStorage.getItem("isAuthenticated"))
				this.$router.push({ name: "searchcomp" });
			}
		},
	},
};
</script>

<style scoped>
@import "../css/Login.css";
</style>
