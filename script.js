function idCard() {
  var firstName = document.getElementById("first").value;
  var lastName = document.getElementById("last").value;
  var address = document.getElementById("address").value;
  document.getElementById("postFullName").innerHTML =
    firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = address;

  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("phone").value);

  var numberArray = [];
  numberArray.push(age, phoneNumber);

  for (var i = 0; i < 2; i++)
    if (numberArray[i] <= 100) {
      document.getElementById("postAge").innerHTML = "Age: " + age;
    } else if (numberArray[i] > 100) {
      document.getElementById("postPhoneNumber").innerHTML =
        "Phone Number: " + phoneNumber;
    }
}
