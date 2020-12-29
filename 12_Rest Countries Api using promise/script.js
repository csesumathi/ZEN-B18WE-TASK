// var container = document.createElement('div')
// container.setAttribute('id', 'container')
// container.setAttribute('class', 'container')
var row = document.createElement('div')
row.setAttribute('id', 'row')
row.setAttribute('class', 'row')
fetch("https://restcountries.eu/rest/v2/all")

    .then((resp) => {
    return resp.json()
    })
    .then(function apiData(data)  {
        console.log(data)
        for (var i in data)
        {
            // console.log(data[i])
            let lat = data[i].latlng[0]
            let lng=data[i].latlng[1]
            let apikey="314c377edcc97e23eac8a6e286d6dab0"
            var column = document.createElement('div')
            column.setAttribute('id', 'column')
            column.setAttribute('class','col-lg-4 col-sm-12')
            var card = document.createElement('div')
            card.setAttribute('class', 'card')
            var cardtitle = document.createElement('div')
            cardtitle.setAttribute('class', 'card-header')
            cardtitle.innerHTML = data[i].name
            var cardimg = document.createElement('img')
            cardimg.setAttribute('class', 'card-img-top')
            cardimg.src = data[i].flag
            cardimg.alt = ""
            var cardbody = document.createElement('div')
            cardbody.setAttribute('class', 'card-body')
            var cardtext = document.createElement('p')
            cardtext.setAttribute('class', 'card-text card text-center')
            cardtext.innerHTML = `<b>Capital:</b>${data[i].capital}<br>
                                <b> Region:</b>${data[i].region}
                                <b>Code:</b>${data[i].currencies[0].code}
                                <b>lattitude:</b>${data[i].latlng[0]}
                                <b>longitude:</b>${data[i].latlng[1]}`
            
            var cardbtn = document.createElement('button')
            cardbtn.setAttribute('class', 'btn btn-primary')
            cardbtn.textContent = "Click for Weather"
            cardbtn.setAttribute('id', 'weatherbtn')
            cardbtn.addEventListener('click', function () { 
                    getweather(lat,lng)
                
                })
            
            cardbody.append(cardimg,cardtext,cardbtn)
            card.append(cardtitle,cardbody)
            column.append(card)
            row.append(column)
            // container.append(row)
            
            // document.body.append(container)
            }
        
              
    })
    document.body.append(row)
        .catch((data) => {
            console.log(data)
        })


        function getweather(lat,lng) {
            // let lat = data[i].latlng[0];
            // console.log(lat)
            // let lng = data[i].latlng[1];
            // console.log(lng)
            let apikey = "314c377edcc97e23eac8a6e286d6dab0"
           
            var data1 = fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lng + "&exclude=alerts&appid=" + apikey)
                data1.then((res) => {
                    return res.json()
                })
                    .then((dat) => {
                    console.log(dat)
                        alert(`cuurent Temp:${dat.current.temp}
                                weather:  ${dat.current.weather[0].description}
                                Wind Speed:  ${dat.current.wind_speed}`)
                })
        }  