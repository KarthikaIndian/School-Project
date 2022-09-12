$(document).ready(function () {
 
//   signin =localStorage.getItem("signup")?JSON.parse(localStorage.getItem("signup")):[];
// console.log(signin)
  $("#submit").click(function (e) {
    signin=[];
    e.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();
    let check = $("#checkbox:checked");
    $(".error").remove();
    let id=$("#newid").val();
    
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
    // for (let i = 0; i < signin.length; i++) {
    //   if (signin[i].email == email && signin[i].conformPassword == password) {

    //     window.location.href = "/HTML/home.html";
    // }else {
    //       alert("Please enter registerd email address and password")
    //     }
    //   }

      $.ajax({
        url: "https://62ff38cb34344b6431f4c29e.mockapi.io/user/"+id,
        method: "get",
        dataType: "json",
        success: function (result) {
          console.log(result)
          
          for(let i=0;i<result.length;i++){
            if (result[i].id!="" && result[i].email == email && result[i].conformPassword == password) {
              window.location.href = "/HTML/home.html";
              
          }else {
                alert("Please enter registerd email address and password")
              
              }
          }
        },
        error: function (error) {
          console.log(error);
        },
      });
  });
 
});

