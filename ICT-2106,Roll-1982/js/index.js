 var paraId = document.querySelector('#paraId');
function addStyle()
{
    var paraId = document.querySelector('#paraId');
    paraId.style.color = "red";
    paraId.style.fontSize = "3red";
    paraId.style.fontWeight = "bold";
    paraId.style.fontStyle ="italic";

}
function removeStyle(){
  var paraId = document.querySelector('#paraId');
  paraId.style.color = "";
  paraId.style.fontSize = "";
  paraId.style.fontWeight = "";
  paraId.style.fontStyle = "";
}


function addStyle()
{
    paraId.classList.add("para-style");
}
function remoStyle()
{
    paraId.classList=" ";
}
function next()
{
    location.href = "templates/next.html";
}
function back()
{
    // location.href = "/Lab Class 13/index.html";
      location.href = "../index.html";
}


// addEventListener

var button = document.querySelector('#addbutton');
button.addEventListener("click", addStyle );

function addStyle()
{
   var paraId = document.querySelector('#paraId');
   paraId.classList.add("para-style");
}

// Remove style button
var removeBtn = document.querySelector('#removebutton');
removeBtn.addEventListener("click", removeStyle);

function removeStyle() {
  var paraId = document.querySelector('#paraId');
  paraId.classList.remove("para-style");
}

var button = document.querySelector('button');
button.addEventListener("click", toggleStyle);

function toggleStyle() {
  var paraId = document.querySelector('#paraId');
  paraId.classList.toggle("para-style");
}


var button = document.querySelector('#addButton');
 button.addEventListener("click", function(a,b){
    var paraId = document.querySelector('#paraId');
    paraId.innerHTML = (a+b)}(1,3));