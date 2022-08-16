$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    let uname = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let conformPassword = $("#conformPassword").val();
    let checkBox = $("#checkbox").is(":checked");
    $(".error").remove();
    if (uname.length < 1) {
      $("#name").after('<span class="error">This Field is Required</span>');
    }
    if (email.length < 1) {
      $("#email").after(
        '<span class="error"> This is field is required</span>'
      );
      return;
    }
    let regEx =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let validEmail = regEx.test(email);
    if (!validEmail) {
      $("#email").after(
        '<span class="error">Enter a valid email address</span>'
      );
      return;
    }
    if (password.length == "") {
      $("#password").after('<span class="error">This field is required</span>');
      return;
    }
    if (password.length < 8) {
      $("#password").after(
        '<span class="error">Password must contain 8 characters</span>'
      );
      return;
    }
    if (password != conformPassword) {
      $("#cpassword").after('<span class="error">Repeat password</span>');
    }
    if (!checkBox) {
      $("#sbox").after('<div class="error">This field is required</div>');
      valid = false;
    } else {
      valid = true;
    }
    let result = { uname, email, password, conformPassword, checkBox };
    console.log(result);
    let testObject = {
      uname: uname,
      email: email,
      password: password,
      conformPassword: conformPassword,
    };
    localStorage.setItem("testObject", JSON.stringify(testObject));
    if (valid) {
      debugger;
      window.location.href = "signin.html";
    }
  });
});
