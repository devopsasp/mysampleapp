function checkform()
 { 
 
 var formobj=document.getElementById("myform")
alert(formobj.length+" "+formobj.action+" "+formobj.method)

var txt=formobj[0]

var passwrd=formobj[1]

var usertype=formobj[2]

if(txt.value.length<3 || passwrd.value.length<3)
 { 

   var errelement=document.getElementById("errmsg")
   errelement.innerHTML="Text Field or Password  cannot be blank"
   
  }
else
{ 

var info=document.getElementById("userinfo")
info.innerHTML=usertype.options.length + " "+usertype.options.selectedIndex+" "+usertype.value

//   formobj.submit()
 }

 } 

function clearform()
 {
 var formobj=document.getElementById("myform")
formobj.reset()
 
 }




 