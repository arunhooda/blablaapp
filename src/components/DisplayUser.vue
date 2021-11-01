<template>
<div v-if="userdetails">
<p> {{userdetails.name}} </p>

<p> {{userdetails.gender}} </p>
<p> {{userdetails.mobile}} </p>
<p> {{userdetails.joiningdate}} </p>
<p> {{userdetails.ridestaken}} </p>
<p> {{userdetails.ridespublished}} </p>
</div>

<div v-else>Loading... </div>
</template>


<script >


export default{


      beforeMount(){
              
          this.fetchdata()
      },



	data(){


		return{

                        userdetails:null
                        



		}
	},

	methods:{



		async fetchdata(){
			let id=   localStorage.getItem("selectedID")

            console.log("http://localhost:3000/users/"+id)
                 
                      	const fetchdetails = await fetch(
				"http://localhost:3000/users/"+id
			);

			const userdetails = await fetchdetails.json();

               console.log(userdetails)
               this.userdetails=userdetails
		}
	}
}


</script>


<style></style>