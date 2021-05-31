image_array=["grandma animated pic.png","father animated pic.jpeg","mother animated pic.jpeg","sister pic.png","aishu animated pic.jpeg"];
name_array=["lakshmi Tadanki-grandma","Ramakrishna Tadanki-father","Kameswari Tadanki-mother","Amulya Tadanki-sister","Aishwarya Tadanki-me"];
var i=0;
function next(){
   document.getElementById("family").src= image_array[i];
   document.getElementById("label").innerHTML= name_array[i];
   i++;
   if(i==5){
      i=0;
   }
}