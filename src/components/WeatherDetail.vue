<template>
  <div>
    <h3>City Name: {{city_data.title}}   </h3>
    <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                       <th>State</th><th>Temp</th> <th>Min Temp</th> <th>Max Temp</th><th>Applicable Date</th><th>Icon</th>
                        
                    </tr>
                    </thead>
                    <tbody>

                      <tr v-for="w in weather_data.consolidated_weather" :key="w" >
                            <td>{{w.weather_state_name}}</td>
                            <td >{{w.the_temp}}</td>
                            <td >{{w.min_temp}}</td>
                            <td >{{w.max_temp}}</td>
                            <td >{{w.applicable_date}}</td>
                            <td ><img v-bind:src="'https://www.metaweather.com/static/img/weather/'+w.weather_state_abbr+'.svg'"  style="width:32px"></td>
                        </tr>

                    </tbody>
    </table>

      
  </div>
</template>

<script>
export default {
  name: 'WeatherDetail',
  data: function () {
            return { 
                    weather_data: [],                    
                    city_data: [],
                  
                   }     
        },
        mounted() {
          var app = this;
          
          this.$http.get("http://localhost/api/weather.php?command=search&keyword=london")
          .then(response => {
                this.city_data = response.body;
                this.city_data = this.city_data[0];
                console.log(this.city_data);
            }, error => {
                console.error(error);
            });   
           
            this.getWeatherInfo(this.$route.params.woeid); 
        },
  methods :{
      getWeatherInfo(cityid){
        alert(cityid);
        var app = this;
               
               this.$http.get("http://localhost/api/weather.php?command=location&woeid="+cityid)
          .then(response => {
                this.weather_data = response.body;
                //alert(this.weather_data.time);
               
            }, error => {
                console.error(error);
            });
               
      },
      test2(){
        ///
      }

  }
}
</script>

<style scoped>

</style>
