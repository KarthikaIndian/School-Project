$(document).ready(function () {
 student =localStorage.getItem("student")?JSON.parse(localStorage.getItem("student")):[];
  let j=1;
  console.log(student)
  for (let i = 0; i < student.length; i++) {
    let date=student[i].dob;
   var dateAr = date.split('-');
var date_string = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];
        let row="<tr><td>"+j++ +"</td><td>"+student[i].studentname+"</td><td>"+student[i].fathername+"</td><td>"
      +date_string+"</td><td>"+student[i].standard+"</td><td>"+student[i].phonenumber+"</td><td>"+student[i].bloodgroup+"</td></tr>";
  
       $("#tbody").append(row)
  }
  $("#submit").click(function (e) {
    e.preventDefault();
    let studentname = $("#name").val();
    let fathername = $("#fatherName").val();
    let mothername = $("#motherName").val();
    let standard = $("#standard").val();
    let phonenumber = $("#phoneNumber").val();
    let gender = $("input[name='gender']:checked").val();
    let address = $("#address").val();
    let city = $("#city").val();
    let state = $("#state").val();
    let pincode = $("#pinCode").val();
    let language= $(".language").is(":checked");;
    let dob =$("#dob").val();
    let bloodgroup = $("#bloodGroup").val();
    let eightboard = $("#eightBoard").val();
    let eightpercentage = $("#eightPercentage").val();
    let eigthpassing = $("#eigthPassing").val();
    let tenthboard = $("#tenthBoard").val();
    let tenthpercentage = $("#tenthPercentage").val();
    let tenthpassing = $("#tenthPassing").val();
    let check = $("#check:checked");
    if (language) {
      var languages = [];
      $(".language:checked").each(function (i) {
        language[i] = $(this).val();
       
      });
    }
    $(".error").remove();
    let flag = false;
    if (studentname.length < 1) {
      $("#name").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (fathername.length < 1) {
      $("#fatherName").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (mothername.length < 1) {
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
    if (phonenumber.length < 1) {
      $("#phoneNumber").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else if (phonenumber.length < 10) {
      $("#phoneNumber").after(
        '<span class="error">Phone number must be 10 digit</span>'
      );
    } else {
      flag = true;
    }
    if (!gender) {
      $(".genderErrorId").after(
        '<span class="error">Please select any one</span>'
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
    if (pincode.length < 1) {
      $("#pinCode").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if(language==" "){
      $("#language").after('<span class="error">Please choose atleast 2 laguages</span>');
      flag = false;
  } else{
      flag = true;
  }
    if (dob < 1) {
      $("#dob").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (bloodgroup == "") {
      $("#bloodGroup").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (check.length == 0) {
      $("#tick").after('<div class="error">This field is required</div>');
      flag = false;
    } else {
      flag = true;
    }
    let Address = { address, city, state, pincode };
    let Eight_Standard = { eightboard, eightpercentage, eigthpassing };
    let Tenth_Standard = { tenthboard, tenthpercentage, tenthpassing };
    let Qualification = { Eight_Standard, Tenth_Standard };
    let result = { studentname,
      fathername,
      mothername,
      phonenumber,
      standard,
      gender,
      Address,
      language,
      dob,
      bloodgroup,
      Qualification,
    };
    if (flag) {
    let studentList = { studentname:studentname,
      fathername:fathername,
      mothername:mothername,
      phonenumber:phonenumber,
      standard:standard,
      dob:dob,
      bloodgroup:bloodgroup,
      Qualification:Qualification,
      Address:Address
    };
    student.push(studentList)

    localStorage.setItem("student", JSON.stringify(student));

    console.log(result);
 
      debugger;
      window.location.href = "student_list.html";
    }
  });
});

