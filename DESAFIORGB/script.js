function realtimeclock() {
  var rtclock = new Date();
 
  var hours = rtclock.getHours();
  var minutes = rtclock.getMinutes();
  var month = rtclock.getMonth() + 1;
  var day = rtclock.getDate();
  var year = rtclock.getFullYear();
 
 
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  day = ("0" + day).slice(-2);
  month = ("0" + month).slice(-2);
  
 
  document.getElementById('date').innerHTML =
  day + " / " + month + " / " + year
 
  document.getElementById('clock').innerHTML = 
   hours + " : " + minutes 
   var t = setTimeout(realtimeclock, 500);
 
   var res = document.getElementById("res")
 
   if (hours < 18) {
   document.getElementById("bigretang").style.backgroundColor = "#E5E5E5";
   document.getElementById("retang1").style.backgroundColor = "#F6F6F6";
   document.body.style.backgroundColor = "#FFFFFF";
   document.body.style.color = "#363940";
   document.getElementById("vector").style.visibility = "hidden"
   document.getElementById("vectorpre").style.visibility = "visible"
   document.getElementById("valor").style.backgroundColor = "#E5E5E5";
 
    
 
 }
 
 }
 
 
  function resultcor() {
 
   var vermei = document.getElementById("Rvermei").value;
 
   var verde = document.getElementById("Rverde").value;
 
   var azul = document.getElementById("Razul").value;
 
   var result = 'rgb(' + vermei + ',' + verde + ',' + azul + ')';
 
   document.getElementById('bola').style.backgroundColor = result;
 
   document.getElementById('valor').value = result;
 
  }
 
   document.getElementById('Rvermei').addEventListener('input', resultcor);
   
 
   document.getElementById('Rverde').addEventListener('input', resultcor);
   
 
   document.getElementById('Razul').addEventListener('input', resultcor);
