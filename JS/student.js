$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    let studentName = $("#name").val();
    let fatherName = $("#fatherName").val();
    let motherName = $("#motherName").val();
    let standard = $("#standard").val();
    let phoneNumber = $("#phoneNumber").val();
    let gender = $("input[name='gender']:checked").val();
    let address = $("#address").val();
    let city = $("#city").val();
    let state = $("#state").val();
    let pinCode = $("#pinCode").val();
    let language = $(".language").is(":checked");
    let dob = $("#dob").val();
    let bloodGroup = $("#bloodGroup").val();
    let eightBoard = $("#eightBoard").val();
    let eightPercentage = $("#eightPercentage").val();
    let eigthPassing = $("#eigthPassing").val();
    let tenthBoard = $("#tenthBoard").val();
    let tenthPercentage = $("#tenthPercentage").val();
    let tenthPassing = $("#tenthPassing").val();
    $(".error").remove();
    let flag = false;
    if (studentName.length < 1) {
      $("#name").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (fatherName.length < 1) {
      $("#fatherName").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (motherName.length < 1) {
      $("#motherName").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (standard.length < 1) {
      $("#standard").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (phoneNumber.length < 1) {
      $("#phoneNumber").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else if (phoneNumber.length < 10) {
      $("#phoneNumber").after(
        '<span class="error">Phone number must be 10 digit</span>'
      );
    } else {
      flag = true;
    }
    if (!gender) {
      $(".genderErrorId").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (address.length < 1) {
      $("#address").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (city.length < 1) {
      $("#city").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (state.length < 1) {
      $("#state").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (pinCode.length < 1) {
      $("#pinCode").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (fatherName.length < 1) {
      $("#fatherName").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (language == "") {
      $("#language").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (dob < 1) {
      $("#dob").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (bloodGroup == "") {
      $("#bloodGroup").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    let Address = { address, city, state, pinCode };
    let Eight_Standard = { eightBoard, eightPercentage, eigthPassing };
    let Tenth_Standard = { tenthBoard, tenthPercentage, tenthPassing };
    let Qualification = { Eight_Standard, Tenth_Standard };
    let result = {
      studentName,
      fatherName,
      motherName,
      phoneNumber,
      standard,
      gender,
      Address,
      language,
      dob,
      bloodGroup,
      Qualification,
    };
    console.log(result);
    if (flag) {
      debugger;
      window.location.href = "student_list.html";
    }
  });
});

