<template>
  <div >

      <h3>City Name: <a v-bind:href="'/weather/'+cityid" target="_BLANK"> {{weather_data.title}} </a>  </h3>
    <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                       <th>State</th><th>Temp</th> <th>Min Temp</th> <th>Max Temp</th><th>Applicable Date</th><th>Icon</th>
                        
                    </tr>
                    </thead>
                    <tbody>

                      <tr v-for="(w, index) in weather_data.consolidated_weather" :key="w" v-if="index<=0">
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
  name: 'Weather',
  props: ["city"],
  
  data: function () {
            return { 
                    weather_data: [],                    
                    city_data: [],
                    city : this.city,
                    cityid: this.cityid,
                    cityids:[2344116, 638242, 44418, 565346, 560743, 9807]                     
                   }     
        },
        mounted() {
         
        /* var app = this;
          //alert(this.city);
          this.$http.get("http://localhost/api/weather.php?command=search&keyword=london")
          .then(response => {
                this.city_data = response.body;
                this.city_data = this.city_data[0];
                console.log(this.city_data);
            }, error => {
                console.error(error);
            });   
          */ 
            this.getWeatherInfo(44418); 
        },
  methods :{
      getWeatherInfo(cityid){
        //alert(this.cityname);
        var app = this;
        this.cityid = cityid;
               
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
