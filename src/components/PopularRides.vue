<template>
	<div id="popularrides">
		<div>
			<h2>Where do you want to go?</h2>
		</div>
		<div class="popularrides_rides">
			<div class="popularrides_rides_panel">
				<span>
					Delhi
					<i class="fa fa-arrow-right" aria-hidden="true"></i>Shimla
				</span>

				<span> Rs 500</span>

				<span>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</span>
			</div>

			<div class="popularrides_rides_panel">
				<span>
					Delhi
					<i class="fa fa-arrow-right" aria-hidden="true"></i>Shimla
				</span>

				<span> Rs 500</span>

				<span>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</span>
			</div>

			<div class="popularrides_rides_panel">
				<span>
					Delhi
					<i class="fa fa-arrow-right" aria-hidden="true"></i>Shimla
				</span>

				<span> Rs 500</span>

				<span>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</span>
			</div>

			<div class="popularrides_rides_panel" v-if="texttoggle">
				<span>
					Delhi
					<i class="fa fa-arrow-right" aria-hidden="true"></i>Shimla
				</span>

				<span> Rs 500</span>

				<span>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</span>
			</div>

			<div class="popularrides_rides_panel" v-if="texttoggle">
				<span>
					Delhi
					<i class="fa fa-arrow-right" aria-hidden="true"></i>Shimla
				</span>

				<span> Rs 500</span>

				<span>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</span>
			</div>

			<div class="popularrides_rides_panel" v-if="texttoggle">
				<span>
					Delhi
					<i class="fa fa-arrow-right" aria-hidden="true"></i>Shimla
				</span>

				<span> Rs 500</span>

				<span>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</span>
			</div>
		</div>

		<div class="popularrides_optiontext">
			<p @click="textclickhandler" v-if="!texttoggle">
				See our most popular rides
			</p>
		</div>
		<div class="popularrides_optiontext">
			<p @click="textclickhandler" v-if="texttoggle">See fewer rides</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			texttoggle: false,
		};
	},
	methods: {
		textclickhandler() {
			this.texttoggle = !this.texttoggle;
		},
	},
};
</script>

<style>
@import "../css/PopularRides.css";
</style>

