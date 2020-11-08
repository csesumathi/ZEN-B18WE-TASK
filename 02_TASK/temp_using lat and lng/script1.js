var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send()
request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data)
    data.forEach(element => {
        
        // var lati = element.latlng[0];
        // var long = element.latlng[1];
        // console.log(element.latlng)
        // console.log(long)
        element.latlng.forEach(ele => {
            var req = new XMLHttpRequest();
        req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat='+element.latlng[0]+'&lon='+element.latlng[1]+'&appid=314c377edcc97e23eac8a6e286d6dab0', 'true')
        req.send()
        req.onload = function() {
            var display_temp = JSON.parse(this.response)
            console.log("temparature:", display_temp.main.temp)
        }
        })
    });
}
