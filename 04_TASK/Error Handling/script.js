// //try and catch in xmlhttpRequest
var req1 = new XMLHttpRequest()
try {
    req1.open = request.open('GET', 'https://restcountries.eu/rest/v2/all', 'false') 
    req1.send()
    req1.onload = function () {
        if (req1.status != 200)
        {
            alert(`error:${req1.status}:${req1.statusText}`)
        }
        else {
            var data = JSON.parse(this.response)
            // console.log(data)
        }
    
}
}
catch (e)
{
    alert(e.name)
}
