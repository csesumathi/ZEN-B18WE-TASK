
var object={name:"RajiniKanth",age:33,hasPets:false};
/*01_Parsing an JSON Object values
 Write a function called “printAllValues” which returns
an newArray of all the input object’s values.*/
function PrintAllValues(obj)
{
console.log(Object.values(obj))
}
PrintAllValues(object)

/*02_Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]*/

function printAllKeys(obj)
{
    console.log(Object.keys(obj))
}
printAllKeys(object)

/*03_Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]*/

var obj={name:"ISRO",age:35,role:"Scientist"};
function convertObjectToList(obj)
{
    console.log(Object.entries(obj))
}
convertObjectToList(obj)

/*04_Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}*/

var arr=["GUVI","I","am","a geek"]
function transformFirstAndLast(arr)
{
    var newObject={};
    newObject[arr[0]]=arr[arr.length-1];
    return newObject;
}
console.log(transformFirstAndLast(arr))

/*05_Parsing a list of lists and convert into a JSON object:
Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}*/
var array=[["make","Ford"],["model","mustang"],["year",1964]]
function fromListToObject(arr)
{
    var newObject={}
   newObject=Object.fromEntries(arr)
   console.log(newObject)
}
fromListToObject(array)

/*06_Parsing a list of lists and convert into a JSON object:*/

var array=[[["firstName","Vasanth"],["lastName","Raja"],["age",24],["role","JSWizard"]],[["firstName","sri"],["lastName","Devi"],["age",28],["role","coder"]]];

function transformEmployeeData(arr)
{
    var transformEmolyeeList=[];
    for(var i=0;i<array.length;i++)
    {
        var newObj=Object.fromEntries(array[i]);
        transformEmolyeeList.push(newObj);
    }
    
    return transformEmolyeeList;
}
console.log(transformEmployeeData(array))

/*07_Parsing two JSON objects and Compare:
Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().*/

var expected={foo:5,bar:6};
var actual={foo:5,bar:6};
var expected1={foo:6,bar:5};
//var actual={foo:5,bar:6};
function assertObjectsEqual(actual,expected,testName)
{
    if(JSON.stringify(expected)===JSON.stringify(actual))
    {
        console.log('Passed')
    }
    else{
        console.log('Failed')
    }

}
assertObjectsEqual(actual,expected,'detects that two objects are equal')
//assertObjectsEqual(actual,expected1,'detects that two objects are equal')

var status;
        for (var i in securityQuestions) {
          if (
            securityQuestions[i]["question"] == ques &&
            securityQuestions[i]["expectedAnswer"] == ans
          ) {
            status = true;
            break;
          } else {
            status = false;
          }
        }
        console.log(status);
      }
      chksecurityQuestions(securityQuestions, ques, ans);


      function returnMinors(arr) {
        let list = [];
        arr.map((obj) => {
            if (obj.age < 20)
                list.push(obj);
        })
        return list;
    }
    console.log(returnMinors(students));
    