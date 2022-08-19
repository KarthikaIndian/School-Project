
$(document).ready(function(){
  worker =localStorage.getItem("worker")?JSON.parse(localStorage.getItem("worker")):[];
  let j=1;
  for (let i = 0; i < worker.length; i++) {
 
      let row="<tr><td>"+j++ +"</td><td>"+worker[i].Name+"</td><td>"+worker[i].age+"</td><td>"+worker[i].phoneNumber+"</td><td>"+worker[i].email+
      "</td><td>"+worker[i].jobPosition+"</td><td>"+worker[i].joningDate+"</td></tr>";
  
       $("#tbody").append(row)
  }
  $('#submit').click(function(e){
    e.preventDefault();
  let uname=$('#firstName').val();
  let lastName=$('#lastName').val();
  var gender = $("input[name='gender']:checked").val(); 
let phoneNumber=$('#phoneNumber').val();
let email=$('#email').val();
let bloodGroup=$('#bloodGroup').val();
let age=$('#age').val();
let experience=$('#experiance').val();
let jobPosition=$('#jobPosition').val();
let language = $(".language").is(":checked");
let address=$('#address').val();
let pinCode=$('#pinCode').val();
let joningDate=$('#joiningDate').val();
let check=$("#check:checked");
 let flag=false;
 let regEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;;
  let validEmail = regEx.test(email);
$('.error').remove();

if(uname.length<1){
  $('#firstName').after('<span class="error">This field is required</span>');
  flag=false
  
}else{
  flag=true;
}
if(lastName.length<1){
  $('#lastName').after('<span class="error">This field is required</span>');
  flag=false
  
}
else{
  flag=true;
}
if(email.length<1){
  $('#email').after('<span class="error">This field is required</span>')
  flag=false
}else   if(!validEmail){
  $("#email").after('<span class="error">Enter a valid email address</span>');
flag=false
} 
else{
  flag=true;
}
if(phoneNumber.length<1){
  $('#phoneNumber').after('<span class="error">This field is required</span>')
  flag=false
}else if(phoneNumber.length<10){
  $('#phoneNumber').after('<span class="error">Phone number must be 10 digit</span>')
  flag=false
}else{
  flag=true

} 
if(bloodGroup==''){
  $('#bloodGroup').after('<span class="error">This field is required</span>')
  flag=false;
}
else{
  flag=true;
}
if(age.length<1){
  $('#age').after('<span class="error">This field is required</span>');
  flag=false;
}else if(age<21){
  $('#age').after('<span class="error">age should be above 21</span>')
  flag =false;
}else{
  flag=true
}
if(experience==''){
  $('#experiance').after('<span class="error">This field is required</span>')
  flag=false;
}else{
  flag=true
}
if(!gender){
  $('#genderErrorId').after('<span class="error gendererror">This field is required</span>')
  flag=false;
}else{
  flag=true
}
if(jobPosition==""){
  $('#jobPosition').after('<span class="error">This field is required</span>')
  flag;
}else{
  flag=true
}
if(language==""){
  $('#language').after('<span class="error">This field is required</span>')
flag=false;
}else{
  flag=true
}
if(address.length<1){
  $('#address').after('<span class="error">This field is required</span>')
  flag=false;
}else{
  flag=true
}
if(pinCode<1){
  $('#pinCode').after('<span class="error">This field is required</span>')
  flag=false;
}else if(pinCode<6){
  $('#pinCode').after('<span class="error">Pincode  must be 6 digit</span>')
  flag=false;
}else
{
  flag=true
}
if(joningDate.length<1){
  $('#joiningDate').after('<span class="error">This field is required</span>')
  flag=false;
}else{
  flag=true
  
}
if (check.length == 0) {
  $("#tick").after('<div class="error">This field is required</div>');
  flag = false;
} else {
  flag = true;
  
}
let Address={address,pinCode}
let result={uname,phoneNumber,email,bloodGroup,age,experience,gender,Address,joningDate};
  console.log(result)
  if(flag){
  let workerList={'Name':uname,'lastName':lastName,'gender':gender,'phoneNumber':phoneNumber,
  'email':email,'age':age,'Address':Address,'experience':experience,'jobPosition':jobPosition,
 'joningDate':joningDate,'bloodGroup':bloodGroup};
 worker.push(workerList)

  localStorage.setItem('worker', JSON.stringify(worker));
  

  debugger
  window.location.href="worker_list.html"
}

  })


});