
function f(event){
event.preventDefault();
var first_name=document.getElementById("fn");
var last_name=document.getElementById("ln");
var mobile_number=document.getElementById("mn");
var email=document.getElementById("email");
var zip=document.getElementById("zip");
var month=document.getElementById("month");
var day=document.getElementById("day");
var details={
    "first_name":first_name.value,
    "last_name":last_name.value,
    "mobile_number":mobile_number.value,
    "email":email.value,
    "zip":zip.value,
    "month":month.value,
    "day":day.value
}
localStorage.setItem("details",JSON.stringify(details))
}