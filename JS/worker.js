let worker=[];
$(document).ready(function () {

  
  //   function onloadfromAPI() {
  //     $.ajax({
  //       url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker",
  //       method: "get",
  //       dataType: "json",
  //       success: function (result) {
  //         updatetable(result);
  //       },
  //       error: function (error) {
  //         console.log(error);
  //       },
  //     });
  //   }
  //   onloadfromAPI();
  // }

  $("#submit").click(function (e) {
    e.preventDefault();
    let name = $("#firstName").val();
    let lastname = $("#lastName").val();
    var gender = $("input[name='gender']:checked").val();
    let phonenumber = $("#phoneNumber").val();
    let email = $("#email").val();
    let bloodgroup = $("#bloodGroup").val();
    let age = $("#age").val();
    let experience = $("#experiance").val();
    let jobposition = $("#jobPosition").val();
    let language = $(".language").is(":checked");
    let address = $("#address").val();
    let pincode = $("#pinCode").val();
    let joningdate = $("#joiningDate").val();
    let check = $("#check:checked");
    let type = $("#type").val();
    let id = $("#newid").val();

    alert(type);
    let flag = false;
    let regEx =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let validEmail = regEx.test(email);
    $(".error").remove();

    if (name.length < 1) {
      $("#firstName").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (lastName.length < 1) {
      $("#lastName").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (email.length < 1) {
      $("#email").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (!validEmail) {
      $("#email").after(
        '<span class="error">Enter a valid email address</span>'
      );
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
    if (bloodgroup == "") {
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
    if (!gender) {
      $("#genderErrorId").after(
        '<span class="error gendererror">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (jobposition == "") {
      $("#jobPosition").after(
        '<span class="error">This field is required</span>'
      );
      flag;
    } else {
      flag = true;
    }
    if (language == "") {
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
      $("#pinCode").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (pincode < 6) {
      $("#pinCode").after(
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

  
      let workerList = {
        id: id,
        name: name,
        lastname: lastname,
        gender: gender,
        phonenumber: phonenumber,
        email: email,
        age: age,
        workeraddress: { address, pincode },
        experience: experience,
        jobposition: jobposition,
        joningdate: joningdate,
        bloodgroup: bloodgroup,
      };

     

    // if (id != "") {
    //   update(workerList);
    // } else {
      $.ajax({
        url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker",
        method: "post",
        data: workerList,
        dataType: "json",
        success: function (result) {
          workers.push(result);
          onloadApi(workers);
          
        },
        error: function (error) {
          console.log(error);
        },
      });
    // }
  });
  onloadApi(workers) ;
 
});


function onloadApi(workers) {
  $.ajax({
    url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker",
    method: "get",
    dataType: "json",
    success: function (result) {
      workers = result;
      updateTable(result);
    },
    error: function (error) {
      console.log(error);
    },
  });
}
// function deleteRow(index, worker_id) {
//   $.ajax({
//     url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker/" + worker_id,
//     method: "delete",
//     dataType: "json",
//     success: function (result) {
//       workers.splice(index, 1);
//       onloadApi(workers);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// }

function updateTable(workers) {
  // $("#tbody").html("");

  for (let i = 0; i < workers.length; i++) {
    row =
      "<tr><td>" +
      workers[i].id +
      "</td><td>" +
      workers[i].name +
      "</td><td>" +
      workers[i].phonenumber +
      "</td><td>" +
      workers[i].email +
      "</td><td>" +
      workers[i].age +
      "</td><td>" +
      workers[i].jobposition +
      "</td><td>" +
      workers[i].joningdate +
      "</td><td><button type='button' class='  me-2 text-white btn btn-warning' onclick='getEdit(" +
      i +
      "," +
      workers[i].id +
      ")'>Edit</button><button type='button' class='btn btn-danger' onclick='deleteRow(" +
      i +
      "," +
      workers[i].id +
      ")'>Delete</button></td></tr>";

    $("#tbody").append(row);

  }
}
// function getEdit(index,id){

// $.ajax({
//   url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker/" + id, 
//   method: "get",
//   dataType: "json",
//   success: function (result) {
//     $("#newid").val(result.id);
   


//    alert(result.id);
//   },
//   error: function (error) {
//     console.log(error);
//   },
// });
// }
// function update(workersList){
 
//   $.ajax({
//     url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker/" + workersList.id, 
//     method: "put",
//     data: workersList,
//     dataType: "json",
//     success: function (result) {
//       workers.push(result);
//       onloadApi(workers);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// }