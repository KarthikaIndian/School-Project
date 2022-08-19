teacher =localStorage.getItem("teacher")?JSON.parse(localStorage.getItem("teacher")):[];
 for (let i = 0; i < teacher.length; i++) {

     let row="<tr><td>"+teacher[i].Name+"</td><td>"+teacher[i].phoneNumber+"</td><td>"+teacher[i].email+
     "</td><td>"+teacher[i].qualification+"</td><td>"+teacher[i].joningDate+"</td></tr>";
 
      $("#tbody").append(row)
 }
