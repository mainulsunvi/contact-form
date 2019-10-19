function validation() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if (name.length < 5) {
    text = "plese, Enter a VALID NAME";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 10) {
    text = "plese, Enter a VALID SUBJECT";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 11) {
    text = "plese, Enter a VALID PHONE NUMBER";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 10) {
    text = "plese, Enter a VALID EMAIL ADDRESS";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 140) {
    text = "please, Enter More Then 140 Cherecters ";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully, Please Wait For our Reply! ");
  error_message.style.padding = "0px";
  return true;
}
