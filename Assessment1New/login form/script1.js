function validate()
{
  var x = document.getElementById("fullname-txt").value
  var y = document.getElementById("AddressLine1-txt").value
  var z = document.getElementById("AddressLine2-txt").value
  var c = document.getElementById("City-txt").value
  var state = document.getElementById("State-txt").value
  var pin = document.getElementById("PostalCode-txt").value
  var email = document.getElementById("Email-txt").value
  var country = document.getElementById("Country-txt").value
  var phone = document.getElementById("PhoneNumber-txt").value
    
    if (x == "" || y == "" || z == "" || c == "" || state == "" || pin == "" || country == "select")
    {
        alert("please fill All the fields")
    
    }
    else if (phone !== "" && phone.length!==10)
    {
        alert("invalid")
      
    }
    else
    {
        alert("Thank You for submitting")
    }
}