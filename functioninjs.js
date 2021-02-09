
alert("walcome to ALMOND cafe");
//var name = prompt("what is yourname?");


function userName (){
    var name = prompt("what is yourname?");
   alert(' hello ' +name);

   var greeting = '<img src= "download.png">';
 document.write(greeting);
}

userName();
function Age(){
    var AGE=prompt("how old are you?");
if (AGE>18)
{
    alert('you can order any thing from the menu');
    var menu1='<img src="0057614469891b784d093e5adce14d35.jpg">';
document.write (menu1);
}
else
{
    alert ('this is the menu for underage')
var menu2='<img src="restaurant-cafe-menu-template-design-vector-brochure-vector-hand-drawn-graphic-food-flyer-62206014.jpg">';
document.write (menu2);

}

}
Age();

