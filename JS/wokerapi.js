let workers = [];

$(document).ready(function () {
  let searchParams = new URLSearchParams(window.location.search)
let param = searchParams.get('id');
if(param!=null){
  getEdit(param);
}
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
    let address = $("#address").val();
    let pincode = $("#pinCode").val();
    let joningdate = $("#joiningDate").val();
    let id = $("#newid").val();


    let workerList = {
      id: id,
      name: name,
      lastname: lastname,
      gender: gender,
      phonenumber: phonenumber,
      email: email,
      age: age,
    address:address,
    pincode:pincode,
      experience: experience,
      jobposition: jobposition,
      joningdate: joningdate,
      bloodgroup: bloodgroup,
    };

    if(id!=""){
      update(workerList);
    }else{
    $.ajax({
      url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker",
      method: "post",
      data: workerList,
      dataType: "json",
      success: function (result) {
        workers.push(result);
        onloadApi(workers);
        window.location.href="/HTML/worker_list.html"
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  
  });

  onloadApi(workers);

});


function onloadApi(workers) {
  $.ajax({
    url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker",
    method: "get",
    dataType: "json",
    success: function (result) {
      // workers = result;
      updateTable(result);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function deleteRow(index, worker_id) {
  $.ajax({
    url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker/" + worker_id,
    method: "delete",
    dataType: "json",
    success: function (result) {
      workers.splice(index, 1);
      onloadApi(workers);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function updateTable(workers) {
  $("#tbody").html("");

  let j = 1;
  for (let i = 0; i < workers.length; i++) {
    let date = workers[i].joningdate;
    var dateAr = date.split("-");
    var date_string = dateAr[2] + "-" + dateAr[1] + "-" + dateAr[0];
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
      date_string +
      "</td><td><button type='button' class=' text-white btn btn-warning' onclick='getEditWin(" +
      i +
      "," +
      workers[i].id +
      ")'>Edit</button></td><td><button type='button' class='btn btn-danger' onclick='deleteRow(" +
      i +
      "," +
      workers[i].id +
      ")'>Delete</button></td></tr>";

    $("#tbody").append(row);

  }
}
function getEdit(id){

$.ajax({
  url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker/" + id, 
  method: "get",
  dataType: "json",
  success: function (result) {
    $("#newid").val(result.id);
    $("#firstName").val(result.name);
     $("#lastName").val(result.lastname);
     $("#phoneNumber").val(result.phonenumber);
  $("#email").val(result.email);
   $("#bloodGroup").val(result.bloodgroup);
     $("#age").val(result.age);
   $("#experiance").val(result.experience);
    $("#jobPosition").val(result.jobposition);
   $("#address").val(result.address);
    $("#pinCode").val(result.pincode);
  $("#joiningDate").val(result.joningdate);
  alert
  if (result.gender == "Male") {
    $(".gender").prop("checked", true);
  } else {
    $(".gender").prop("checked", true);
  }
   alert(result.id);
  },

  error: function (error) {
    console.log(error);
  },
});
}
function getEditWin(index,id){
  window.location.href= "create_worker.html?id="+id;
}
function update(workersList){
 
  $.ajax({
    url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker/" + workersList.id, 
    method: "put",
    data: workersList,
    dataType: "json",
    success: function (result) {
      workers.push(result);
      onloadApi(workers);
      window.location.href="/HTML/worker_list.html"
    },
    error: function (error) {
      console.log(error);
    },
  });
}