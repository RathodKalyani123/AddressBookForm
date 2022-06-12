class Contact {

  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  //1st validation: User's Name
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Invalid Name..";
    }
  }

  //2nd validation: User's Home Address
  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp("[\w',-\\/.\s]");    //for ex. More than two words including any type of caracters
    if (addressRegex.test(address)) {
      this._address = address;
    } else {
      throw "Invalid Address..";
    }
  }
  
  get city() {
    return this._city;
  }
  set city(city) {
    this._city = city;
  }

  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }


  
  get zipcode() {
    return this._zipcode;
  }
  set zipcode(zipcode) {
    let zipcodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");  
    if (zipcodeRegex.test(pin)){
      this._zipcode = zipcode;
    } else {
      throw "Invalid Pincode."
    }
  }

  get phone(){
    return this._phone;
  }
  set phone(phone){
  let phoneRegex = RegExp("^[0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$");   //for ex. 91 9049331047
  if (phoneRegex.test(phone)){
    this._phone = phone;
  } else {
    throw "Invalid Phone Number";
  }
  }

  //UC  6 User Entries On Clicking sunbmit button
  toString(){
    return "Id = " + this.id +  ",  \nName = " + this.name + ",  \nAddress = " + this.address + ", \nPhone = " + this.phone + ", \nCity = " + this.city + ", \nState = " + this.state + ", \nPin = " + this.pin;
  }

}