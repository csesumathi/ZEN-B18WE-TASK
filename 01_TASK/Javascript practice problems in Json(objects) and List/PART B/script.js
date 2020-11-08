var mycar={
    make:'Bugatti',
    model:'Bugatti La Voiture Noire',
    year:2019,
    accidents:[
        {
            date:'3/15/2019',
            damage_points:'5000',
            atFaultForAccident:true
        },
        {
            date:'7/4/2022',
            damage_points:'2200',
            atFaultForAccident:true
        },
        {
            date:'6/22/2021',
            damage_points:'7900',
            atFaultForAccident:true
        }

    ]
}
//console.log(mycar.accidents)
//01_Loop over the accidents array change atFaultForAccident from true to false.
mycar.accidents.forEach(updfunc)
function updfunc(ele,index,accidents)
{
    accidents[index].atFaultForAccident="false"
}
console.log(mycar.accidents)


//02_Print the date of my accidents
mycar.accidents.forEach(function(element,i)
{
    console.log(mycar.accidents[i].date)
})
