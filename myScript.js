var cost = 640;

function myFunction1() {
  var num1=document.getElementById("first").value;
  var num2=document.getElementById("second").value;
  
  var t=Number(num1)*500
  document.getElementById("out1").innerHTML=t.toString()+"$";
  
  cost=(Number(num1)*500)+(Number(num2)*140);
  
   document.getElementById("sub").innerHTML=cost.toString()+"$";
   document.getElementById("tax").innerHTML=(cost*.20).toString()+"$";
   document.getElementById("total").innerHTML=(cost+(cost*.20)).toString()+"$";
}

function myFunction2() {
  var num1=document.getElementById("first").value;
  var num2=document.getElementById("second").value;
  
  var t=Number(num2)*140
  document.getElementById("out2").innerHTML=t.toString()+"$";
  
  cost=(Number(num1)*500)+(Number(num2)*140);
   document.getElementById("sub").innerHTML=cost.toString()+"$";
   document.getElementById("tax").innerHTML=(cost*.20).toString()+"$";
   document.getElementById("total").innerHTML=(cost+(cost*.20)).toString()+"$";
  
}
