$(document).ready(function () {
    $("#submit").click(function (e) {
      e.preventDefault();
    debugger
    var retrievedObject = localStorage.getItem("teacherList");
    var obj = JSON.parse(retrievedObject);
    console.log("retrievedObject: ", obj);
    window.location="/HTML/create_teacher.html"
  });
});


