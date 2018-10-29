<template>
  <div >

      <div>
        <input placeholder="ie. London" class="form-control" type="text" v-model="searchcity" >
        <button class="btn btn-primary"   v-on:click="searchData(searchcity)"> Search </button>
      </div>
      <div v-for="cid in cityids" :key="cid">Woeid::{{cid}}
      <h3>City Name: <a v-bind:href="'/weather/'+cid" target="_BLANK">  {{city_names[cid]}} </a>  </h3>
    <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                       <th>State</th><th>Temp</th> <th>Min Temp</th> <th>Max Temp</th><th>Applicable Date</th><th>Icon</th>
                        
                    </tr>
                    </thead>
                    <tbody>

                      <tr v-bind:id="cid" v-for="(w, index) in weather_data.consolidated_weather" :key="w.id" v-if="index<=0">
                            <td>{{w.weather_state_name}} - {{city_names[cid]}}</td>
                            <td >{{w.the_temp}}</td>
                            <td >{{w.min_temp}}</td>
                            <td >{{w.max_temp}}</td>
                            <td >{{w.applicable_date}}</td>
                            <td ><img v-bind:src="'https://www.metaweather.com/static/img/weather/'+w.weather_state_abbr+'.svg'"  style="width:32px"></td>
                        </tr>

                    </tbody>
    </table>

    </div>
     
  </div>
</template>

<script>

export default {
  name: 'Weather',
  props: ["cityName"],
  
  data: function () {
            return { 
                    weather_data: [],                    
                    city_data: [],
                    city_name : this.cityName,
                    cityid: this.cityid,
                    cityids:[2344116, 638242, 44418, 565346, 560743, 9807],
                    city_names : [],
                    search_text : ''                     
                   }     
        },
        mounted() {
         
          this.getWeatherInfo(2344116); 
          this.getWeatherInfo(638242); 
          this.getWeatherInfo(44418); 
          this.getWeatherInfo(565346); 
          this.getWeatherInfo(560743); 
          this.getWeatherInfo(9807);

        },
  methods :{
      getWeatherInfo(cityid){
        var app = this;
        this.cityid = cityid;
               
               this.$http.get("http://localhost/api/weather.php?command=location&woeid="+cityid)
          .then(response => {
                this.weather_data = response.body;
                this.city_names[cityid] = response.body.title;
                console.log(this.weather_data[cityid]);
               
            }, error => {
                console.error(error);
            });
               
      },
      searchData(searchtext) {
        this.city_names.map(function(value, key) {
            var sr = searchtext.toLowerCase();
            var vl = value.toLowerCase();
            if( sr== vl) {
              window.location.href = "/weather/"+key;
            }
        });


        ///
      }

  }
}
</script>

<style scoped>

</style>
