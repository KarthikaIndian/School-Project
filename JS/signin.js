$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();
    let check = $("#checkbox:checked");
    $(".error").remove();
    if (email.length < 1) {
      $("#errorEmail").after(
        '<span class="error">This field is required</span>'
      );
      return false;
    }
    let regEx =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let validEmail = regEx.test(email);
    if (!validEmail) {
      $("#errorEmail").after('<span class="error">Enter a valid email</span>');
      return false;
    }
    if (password.length == "") {
      $("#errorPassword").after(
        '<span class="error">This field is required</span>'
      );
      return;
    }
    if (password.length < 8) {
      $("#errorPassword").after(
        '<span class="error">Password must contain 8 characters</span>'
      );
    }
    if (check.length == 0) {
      $("#label").after('<div class="error">This field is required</div>');
      valid = false;
    } else {
      valid = true;
    }
    let result = { email, password, valid };
    console.log(result);
    var retrievedObject = localStorage.getItem("testObject");
    var obj = JSON.parse(retrievedObject);
    if (valid) {
      if (obj.email == email && obj.conformPassword == password) {
        debugger;
        window.location.href = "/HTML/home.html";
      } else {
        $("label").after('<div class="error">Please enter registerd email address</div>');
      }
    }
  });
});
