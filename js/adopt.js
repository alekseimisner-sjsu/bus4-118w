// adoptAnimal is called when someone clicks the "Adopt NAME" button
// in the animal search results. It gets the ID and Name of the animal
// someone wants to adopt from the button
// it requires a div called adoptionForm in the page that is planning
// on using it
function adoptAnimal(ID, Name) {
  var animalID = arguments[0];
  var animalName = arguments[1];

  // display the adoption form. the animal id and name are passed
  // as hidden fields, but we display the name of the anmial so
  // people know they are trying to addopt the right animal
  var divContainer = document.getElementById("adoptionForm");
  divContainer.innerHTML = "";
  divContainer.innerHTML = "<h3>Adopting " + animalName + "</h3>";
  divContainer.innerHTML += "<img border=2 src='./img/" + animalID + ".jpg'>";
  divContainer.innerHTML += "<p>Thank you for your interest in adopting " + animalName + ". The adoption fee is $100.</p>" 
    divContainer.innerHTML += "<p>Please fill out the form below and we will get back to you regarding the next steps in the adoption process.</p><p><b>ALL FIELDS ARE REQUIRED.</b></p>";
  divContainer.innerHTML += "<form action='./adoptAnimal.html' method='GET'>" +
    "<input type='hidden' id='animalID' name='animalID' value='" + animalID + "'>" +
    "<input type='hidden' id='animalName' name='animalName' value='" + animalName + "'>" +
    "<h4>First name:</h4>" +
    "<input type='text' id='firstname' name='firstname' required>" +
    "<br>" +
    "<h4>Last name:</h4>" +
    "<input type='text' id='lastname' name='lastname' required>" +
    "<br>" +
    "<h4>Email:</h4>" +
    "<input type='text' id='email' name='email' required>" +
    "<br>" +
    "<h4>Phone number:</h4>" +
    "<input type='text' id='phonenumber' name='phonenumber' required>" +
    "<br>" +
    "<input type='submit' onclick='send()' value='Submit'>" +
    "</form>";
  document.getElementById('firstname').focus();
}
