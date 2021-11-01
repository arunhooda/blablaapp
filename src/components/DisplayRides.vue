<template>
	<div id="ridedatacontainer">


		<div class="rideheader">
			
          <span> <i class="fas fa-search"></i></span>
           <span>{{$store.state.ridesList[0].origin}}</span>
           <span><i class="fas fa-arrow-right"></i></span>
           <span>{{$store.state.ridesList[0].destination}}</span>

		</div>
        
        <div class="rideheader2">
			
          <span> <i class="fas fa-walking"></i></span>
           <span>
           	
           	<p>Rides close to you</p>
           	<p>Now you see which drivers can pick you up and drop you off nearby.</p>
           </span>

		</div>




		<div
			class="ridedata"
			v-for="(rides, index) in $store.state.ridesList"
			@click="rideclickHandler(rides.id, index)"
		>
			<div class="ridedataleft">
				<div class="ridedataleft_left">
					<span>18:00 hrs</span>
					<span>07:00 hrs</span>
					<div class="ridedataleft_left_pic dbreak"><i class="fas fa-male"></i></div>
				</div>

				<div class="ridedataleft_right">
					<span>{{ rides.origin }}</span>
					<span>{{ rides.destination }}</span>
					<span class="dbreak"> Driver : {{ rides.driver }} </span>
					<span> Rating : {{ rides.rating }} </span>
				</div>
			</div>

			<div class="ridedataright">
				<span> {{ rides.fare }} </span>
				<span> Seats Available:{{ rides.passengers }} </span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			rID: "",
			rideData: null,
		};
	},
	methods: {
		rideclickHandler(rideID, index) {
			if (this.$store.state.ridesList[index].passengers >= 1) {



                

				this.rID = rideID;
				console.log(this.rID);

				var length = this.$store.state.ridesList.length;

				for (var i = 0; i < length; i++) {
					if (rideID === this.$store.state.ridesList[i].id) {
						this.$store.commit(
							"setSelectedRide",
							this.$store.state.ridesList[i]
						);
					}
				}

				this.$router.push({ name: "rideData" });
			} else {
				console.log("no seats available");
			}
		},
	},
	mounted() {},
};
</script>

<style >
@import "../css/Display.css";
</style>
