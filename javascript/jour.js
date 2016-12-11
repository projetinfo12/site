var aujourdhui=new Date();
with(aujourdhui){j=getDate();
				 m=getMonth();
				 fy=getFullYear();
				 h=getHours();
				 mn=getMinutes();
				 s=getSeconds();}
document.getElementById("aujourdhui").innerHTML+="nous sommes le : "+j+'/'+(m+1)+'/'+fy+'  il est'+' '+h+':'+mn+':'+s;