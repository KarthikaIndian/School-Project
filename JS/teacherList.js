let worker=[];
  $("#submit").click(function (e) {
    e.preventDefault();
  
    let worker={
       name : $("#firstName").val(),
       lastname : $("#lastName").val(),
       gender : $("input[name:'gender']:checked").val(),
       phonenumber : $("#phoneNumber").val(),
       email : $("#email").val(),
       bloodgroup : $("#bloodGroup").val(),
       age : $("#age").val(),
       experience : $("#experiance").val(),
       jobposition : $("#jobPosition").val(),
       language : $(".language").is(":checked"),
       address : $("#address").val(),
       pincode : $("#pinCode").val(),
       joningdate : $("#joiningDate").val(),
       check : $("#check:checked"),
       type : $("#type").val()
    }
$.ajax({
    url: "https://62ff38cb34344b6431f4c29e.mockapi.io/worker",
    method: "post",
    data: worker,
    dataType: "json",
    success: function (result) {
      addRowtoTable(result);
    },
    error: function (error) {
      console.log(error);
    },
  });
  });
  
