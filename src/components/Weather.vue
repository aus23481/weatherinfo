<template>
  <div>

    This is from Weather componentffff
    <input type="button" class="btn btn-primary" v-on:click="getWeatherInfo(44418)"  name="Test" value="Test">

    <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Min Temp</th>
                        
                    </tr>
                    </thead>
                    <tbody>

                      <tr >
                            <td >
                                 
                           
                                
                            </td>
                                                   
                        </tr>

                    </tbody>
    </table>

      {{city_data.title}} 
  </div>
</template>

<script>
//http://localhost/weatherinfo/weather.php?command=location&woeid=44418
//https://www.metaweather.com/api/location/search/?query=london
//weather.php?command=search&query=london
//https://www.metaweather.com/api/location/search/?query=london
export default {
  name: 'Weather',
  data: function () {
            return { 
                    weather_data: [],
                    weathers = [],
                    city_data: [],
                    
                   }     
        },
        mounted() {
          var app = this;
          this.$http.get("http://localhost/api/weather.php?command=search&keyword=london")
          .then(response => {
                this.city_data = response.body;
                this.city_data = this.city_data[0];
            }, error => {
                console.error(error);
            });   
           
             
        },
  methods :{
      getWeatherInfo(cityid){
        //alert(this.cityname);
        var app = this;
               
               this.$http.get("http://localhost/api/weather.php?command=location&woeid="+cityid)
          .then(response => {
                this.weathers = response.body;
               
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
