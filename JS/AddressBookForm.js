 /*uc 4 validations*/
 
 window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      setTextValue(".name-error", "");
      return;
    }
    try {
      new Contact().name = name.value;
      setTextValue(".name-error", "");
    } catch (error) {
      setTextValue(".name-error", error);
    }
  });
  const address = document.querySelector("#address");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      setTextValue(".address-error", "");
      return;
    }
    try {
      new Contact().address = address.value;
      setTextValue(".address-error", "");
    } catch (error) {
      setTextValue(".address-error", error);
    }
  });
  const zip = document.querySelector('#zip');
  zip.addEventListener("input", function () {
    if (zip.value.length == 0){
      setTextValue(".zip-error", " ");
      return;
    }
    try {
      new Contact().zipcode = zipcode.value;
      setTextValue(".zip-error", " ");
    } catch (error) {
      setTextValue(".zip-error", error);
    }
  });
 const phone = document.querySelector("#phone");
  phone.addEventListener("input", function() {
    if (phone.value.length == 0){
      setTextValue(".phone-error", " ");
      return;
    }
    try{
      new Contact().phone = phone.value;
      setTextValue(".phone-error", " ");
    } catch (error) {
      setTextValue(".phone-error", error);
    }
  });
});

/* UC5 Reset button*/
function resetForm() {
alert("The form will reset");
}

/*uc6-on click function - Submit button*/
function save() {

let contact = new Contact();                      
contact.id = new Date().getTime();

try {
  contact.name = getInputValueById("#name");
} catch (error) {
  setTextValue(".name-error", error);
  throw error;
}

try {
  contact.phone = getInputValueById("#phone");
} catch (error) {
  setTextValue(".phone-error", error);
  throw error;
}

try {
  contact.address = getInputValueById("#address");
} catch (error) {
  setTextValue(".address-error", error);
  throw error;
}

let city = getInputValueById("#city");
if (city != "Select City") {
  contact.city = city;
} else {
  throw "Please select city";
}

let state = getInputValueById("#state");
if (state != "Select State") {
  contact.state = state;
} else {
  throw "Please select state";
}

try {
  contact.zip= getInputValueById("#zip");
} catch (error) {
  setTextValue(".zip-error", error);
  throw error;
}

console.log(contact.toString());
alert(contact.toString());         
}
const setTextValue = (id, value) => {
const element = document.querySelector(id);
element.textContent = value;
};

function getInputValueById(property) {
let value = document.querySelector(property).value;
return value;
}