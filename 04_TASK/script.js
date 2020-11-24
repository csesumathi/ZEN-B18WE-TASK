var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', 'true')
    request.send()
    request.onload = function () {
        var data = JSON.parse(this.response)
        console.log(data)
    
        // get all the countries from Asian continents using filter
        let asiacountries = data.filter((item) => item.region == 'Asia')
        console.log(asiacountries)

        //population is less than 2 lakhs
        let population = data.filter((item) => item.population < 200000)
        console.log(population)

        //print the details name, capital,flag using forEach function
        data.forEach(element => {
            console.log(`Name:${element.name},
        Capital:${element.capital},
        Flag:${element.flag}`)
        });

        //population of countries using reduce function
        const totalPopulation = data.reduce((result, item) => { return result + item.population }, 0)
        console.log(`TOTAL POPULATION:${totalPopulation}`)

        //total population of countries in Asia continent using reduce and filter function
        const asiapopulation = data.filter((i) => i.region == 'Asia').reduce((result, i) => { return result + i.population }, 0)
        console.log(`ASIA POPULATION:${asiapopulation}`)

        // Print the country which use US Dollars as currency.
        data.forEach(element => {
            element.currencies.forEach(ele => {
                if (ele.code == 'USD')
                    console.log(`COUNTRIES USING USD:${element.name}`)
            });
        
        
        });

    }



