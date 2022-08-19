$(document).ready(function () {
//   $('#table').DataTable({
//     pagingType: 'full_numbers',
// });
  teacher =localStorage.getItem("teacher")?JSON.parse(localStorage.getItem("teacher")):[];
  let j=1;
  for (let i = 0; i < teacher.length; i++) {
    let date=teacher[i].joningdate;
    var dateAr = date.split('-');
 var date_string = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];
      let row="<tr><td>"+j++ +"</td><td>"+teacher[i].name+"</td><td>"+teacher[i].phonenumber+"</td><td>"+teacher[i].email+
      "</td><td>"+teacher[i].qualification+"</td><td>"+date_string+"</td></tr>";
  
       $("#tbody").append(row)
  }
 
  $("#submit").click(function (e) {
    e.preventDefault();
    let name = $("#firstName").val();
    let lastname = $("#lastName").val();
    let gender = $("input[name='gender']:checked").val();
    let phonenumber = $("#phoneNumber").val();
    let email = $("#emailId").val();
    let bloodgroup = $("#bloodGroup").val();
    let age = $("#age").val();
    let experience = $("#experiance").val();
    let qualification = $("#qualification").val();
    let state = $("#state").val();
    let country = $("#country").val();
    let language = $(".language").is(":checked");
    let address = $("#address").val();
    let pincode = $("#pincode").val();
    let joningdate = $("#joiningDate").val();
    let check = $("#check:checked");
    let flag = false;
    let regEx =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let validEmail = regEx.test(email);
    $(".error").remove();
    if (language) {
      var languages = [];
      $(".language:checked").each(function (i) {
        language[i] = $(this).val();
      });
    }
    if (name.length < 1) {
      $("#firstName").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (lastname.length < 1) {
      $("#lastName").after('<span class="error">This field is required</span>');
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
      flag = false;
    } else {
      flag = true;
    }
    if (email.length < 1) {
      $("#emailId").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (!validEmail) {
      $("#emailId").after(
        '<span class="error">Enter a valid email address</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (bloodgroup == "select") {
      $("#bloodGroup").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (age.length < 1) {
      $("#age").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (age < 21) {
      $("#age").after('<span class="error">age should be above 21</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (experience == "") {
      $("#experiance").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (qualification.length < 1) {
      $("#qualification").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (!gender) {
      $("#genderErrorId").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (state.length < 1) {
      $("#state").after('<span class="error">This field is required</span>');
      flag;
    } else {
      flag = true;
    }
    if (country.length < 1) {
      $("#country").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (language == " ") {
      $("#language").after('<span class="error">This field is required</span>');
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
    if (pincode < 1) {
      $("#pincode").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (pincode < 6) {
      $("#pincode").after(
        '<span class="error">Pincode  must be 6 digit</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (joningdate.length < 1) {
      $("#joiningDate").after(
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
    // $(".first-tr").after( '<tr><td>'+name+'</td><td>'+phoneNumber+'</td><td>'+email+'</td><td>'
    // +bloodGroup+'</td><td>'+age+'</td><td>'+experience+
    // '</td><td>'+qualification+'</td><td>'+state+'</td><td>'+country+'</td><td>'+language+'</td><td>'
    // +Address+'</td><td>'+DoB+'</td><td>'+jonningDate+'</td></tr>');
    let Address = { address, state, country, pincode };
    let result = {
      name,
      phoneNumber,
      email,
      bloodgroup,
      age,
      experience,
      gender,
      qualification,
      Address,
      languages,
      joningdate,
    };
    console.log(result);
    if (flag) {
    
    let teacherlist = {
      'name': name,
      'lastname': lastname,
      'gender': gender,
      'phonenumber': phonenumber,
     'email': email,
      'age': age,
      'address': Address,
      'experience': experience,
      'qualification': qualification,
      'language': languages,
      'joningdate': joningdate,
      'bloodgroup': bloodgroup,
    };
    teacher.push(teacherlist)

    localStorage.setItem("teacher", JSON.stringify(teacher));

   
      debugger;
      window.location.href = "teacher_list.html";
    }
  });
});
