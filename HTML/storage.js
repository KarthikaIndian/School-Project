
students =localStorage.getItem("students")?JSON.parse(localStorage.getItem("students")):[];
 for (let i = 0; i < students.length; i++) {

     let row="<tr><td>"+students[i].name+"</td><td>"+students[i].fatherName+"</td><td>"+students[i].age+"</td><td></tr>";
 
      $("#tbody").append(row)
 }

$(document).ready(function(){

    $("#submit").click(function(){
        let name=$("#name").val();
        let fatherName=$("#fatherName").val();
        let age=$("#age").val();
    
       let row="<tr><td>"+name+"</td><td>"+fatherName+"</td><td>"+age+"</td></tr>";

       $("#tbody").append(row)
       let result={name:name,fatherName:fatherName,age:age}
       students.push(result);
       console.log(students)
       localStorage.setItem("students",JSON.stringify(students))
    })

})