$(document).ready(function(){
    $('#submit').click(function(e){
      e.preventDefault();

  let  email=$('#email').val()
  let pwd=$('#password').val();
  
  $('.error').remove();
  if(email.length<1){
    $('#email').after('<span class="error">This Field is Required</span>')
  }
  else{
    let regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
            let validEmail = regEx.test(email);
            if(!validEmail){
                $("#email").after('<span class="error">Enter a valid email address</span>');
            }
          }
          if(pwd.length<8){
            $('#password').after('<span class="error">This Field is Required</span>')
          
          }
          if($('input[type=checkbox]:checked').length==0)
{
  $('label').after('<div class="error">This Field is Required</div>')
 valid=false;
}
else{
  valid=true;
}
if(valid){
  window.location.href="home.html"
}
})


});