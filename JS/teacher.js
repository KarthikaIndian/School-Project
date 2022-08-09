
$(document).ready(function(){
    $('#submit').click(function(e){
      e.preventDefault();
    let uname=$('#name').val();
 let date=$('#date').val();
 let degree=$('#degree').val();
 let standard=$('#standard').val();
   
  $('.error').remove();
  if(uname.length<1){
    $('#name').after('<span class="error">This Field is Required</span>')
  }
  if(date.length<1){
    $('#date').after('<span class="error">This Field is Required</span>')
  }
  if(degree.length<1){
    $('#degree').after('<span class="error">This Field is Required</span>')
  }
  if(standard.length<1){
    $('#standard').after('<span class="error">This Field is Required</span>')
  }
  
  
 
 
  else{
    valid=true;
  }
  if(valid){
    window.location.href="teacher_list.html"
  }
    })
  
  
  });