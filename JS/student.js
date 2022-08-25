let students = [];
$(document).ready(function () {
  let searchParams=new URLSearchParams(window.location.search)
  let param=searchParams.get('id')
  if(param!=""){
    getEdit(param)
    
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
    let language = $(".language").is(":checked");
    let dob = $("#dob").val();
    let bloodgroup = $("#bloodGroup").val();
    let eightboard = $("#eightBoard").val();
    let eightpercentage = $("#eightPercentage").val();
    let eigthpassing = $("#eigthPassing").val();
    let tenthboard = $("#tenthBoard").val();
    let tenthpercentage = $("#tenthPercentage").val();
    let tenthpassing = $("#tenthPassing").val();
    let check = $("#check:checked");
    let id = $("#newid").val();

    if (language) {
      var languages = [];
      $(".language:checked").each(function (i) {
        languages[i] = $(this).val();
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
      $("#fatherName").after(
        '<span class="error">This field is required</span>'
      );
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
    if (language == " ") {
      $("#language").after(
        '<span class="error">Please choose atleast 2 laguages</span>'
      );
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
    // let eight_Standard = { eightboard, eightpercentage, eigthpassing };
    // let tenth_Standard = { tenthboard, tenthpercentage, tenthpassing };
    // let qualification = { eight_Standard, tenth_Standard };

    let studentList = {
      id: id,
      studentname: studentname,
      fathername: fathername,
      mothername: mothername,
      phonenumber: phonenumber,
      standard: standard,
      dob: dob,
      state:state,
      city:city,
      pincode:pincode,
      bloodgroup: bloodgroup,
      address: address,
      eightboard:eightboard,
      eightpercentage:eightpercentage,
      eigthpassing:eigthpassing,
      tenthboard:tenthboard,
      tenthpercentage:tenthpercentage,
      tenthpassing:tenthpassing
    };
if(id!=""){
  update(studentList)
}else{
    $.ajax({
      url: "https://62ff38cb34344b6431f4c29e.mockapi.io/student",
      method: "post",
      data: studentList,
      dataType: "json",

      success: function (result) {
        students.push(result);

        onloadfromAPI(students);
        window.location.href = "/HTML/student_list.html";
      },

      error: function (error) {
        console.log(error);
      },
    });
  }
  });
  onloadfromAPI(students);
});

function updatetable(students) {
  $("#tbody").html("")
  for (let i = 0; i < students.length; i++) {
    let date = students[i].dob;
    var dateAr = date.split("-");
    var date_string = dateAr[2] + "-" + dateAr[1] + "-" + dateAr[0];
    let row =
      "<tr><td>" +
      students[i].id +
      "</td><td>" +
      students[i].studentname +
      "</td><td>" +
      students[i].fathername +
      "</td><td>" +
      date_string +
      "</td><td>" +
      students[i].standard +
      "</td><td>" +
      students[i].phonenumber +
      "</td><td>" +
      students[i].bloodgroup + 
     
       "</td><td><button type='button' class='  text-white btn btn-warning' onclick='getEditWindow(" +
      i +
      "," +
      students[i].id +
      ")'>Edit</button></td><td><button type='button' class='btn btn-danger' onclick='deleteRow(" +
      i +
      "," +
      students[i].id +
      ")'>Delete</button></td></tr>";

    $("#tbody").append(row);
  }
}

function onloadfromAPI() {
  $.ajax({
    url: "https://62ff38cb34344b6431f4c29e.mockapi.io/student",
    method: "get",
    dataType: "json",
    success: function (result) {
      students=result;
      updatetable(result);
    },
    error: function (error) {
      console.log(error);
    },
  });
}
function deleteRow(index , student_id){
  $.ajax({
    url: "https://62ff38cb34344b6431f4c29e.mockapi.io/student/" +student_id,
    method:"delete",
    dataType:"json",
    success:function(result){
      students.splice(index,1);
      onloadfromAPI(students);
    },
  error: function (error) {
    console.log(error);
  },


    
  })
}
function getEdit(id){
  $.ajax({
     url: "https://62ff38cb34344b6431f4c29e.mockapi.io/student/" +id,
     method:"get",
     dataType:"json",
     success:function(result){
       
   $("#newid").val(result.id);
   $("#name").val(result.studentname);
   $("#fatherName").val(result.fathername);
   $("#motherName").val(result.mothername);
   $("#standard").val(result.standard);
   $("#phoneNumber").val(result.phonenumber);
   $("#address").val(result.address);
  $("#city").val(result.city);
   $("#state").val(result.state);
   $("#pinCode").val(result.pincode);
    $(".language").is(":checked");
  $("#dob").val(result.dob);
    $("#bloodGroup").val(result.bloodgroup);
    $("#eightBoard").val(result.eightboard);
   $("#eightPercentage").val(result.eightpercentage);
   $("#eigthPassing").val(result.eigthpassing);
$("#tenthBoard").val(result.tenthboard);
    $("#tenthPercentage").val(result.tenthpercentage);
   $("#tenthPassing").val(result.tenthpassing);
   if(result.gender=="Male"){
    $("#male").prop("checked", true);
  }else{
    $("#female").prop("checked", true);

  }
   alert(result.id)
 
     },
   error: function (error) {
     console.log(error);
   },
 
 
     
   })
 }
function getEditWindow(index,id){
  window.location.href= "create_student.html?id="+id;

}

function update(studentList){
  $.ajax({
    url: "https://62ff38cb34344b6431f4c29e.mockapi.io/student/" + studentList.id,
    method: "put",
    data: studentList,
    dataType: "json",
    success: function (result) {
      students.push(result);

      onloadfromAPI(students);
      window.location.href = "/HTML/student_list.html";

    },
    error: function (error) {
      console.log(error);
    },
  });
}
