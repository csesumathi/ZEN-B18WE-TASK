var cat={
    name:'Fluffy',
    activities:['play','eat cat food'],
    catFriends:[
        { 
        name:'bar',
        activities:['be grumpy','eat bread omblet'],
        weight:8,
        furcolor:'white'
        },
        {
            name:'foo',
            activities:['sleep','pre-sleep naps'],
            weight:3

        }
    ]
}
console.log(cat);
//01_Add height and weight to Fluffy
console.log(cat.height=2,cat.weight=3)

//02_Fluffy name is wrong.Update it to Fluffyy
cat.name="Fluffyy"
console.log(cat.name)
//03_list all the activities of fluffyy's catfriends
console.log(cat.catFriends[0].activities,cat.catFriends[1].activities)
//04_print the cat friendsname
console.log(cat.catFriends[0].name,cat.catFriends[1].name)
//05_print the total weight of catFriends

console.log("total weight of catfriends:",parseInt(cat.catFriends[0].weight+cat.catFriends[1].weight))

//06_Print the total activities of all cats

var total=parseInt(cat.activities.length)+parseInt(cat.catFriends[0].activities.length)+parseInt(cat.catFriends[1].activities.length)
console.log(total)
//07_ Add two activities to bar & foo cats
cat.catFriends[0].activities[2]="sleep"
cat.catFriends[0].activities[3]="play"
console.log(cat.catFriends[0].activities)
cat.catFriends[1].activities[2]="eat cat food"
cat.catFriends[1].activities[3]="play"
console.log(cat.catFriends[1].activities)

//08_update the fur color of bar
cat.catFriends[0].furcolor="grey"
console.log(cat.catFriends[0].furcolor)





    

