var ul = document.getElementById("firstId");
var li = ul.querySelectorAll("li");
var inputs = ul.querySelectorAll("input");

for(var i=0;i<li.length;i++){
    li[i].addEventListener("click", editItem);
}

function editItem(){
    console.log(this);
    console.log("djura");
    this.className = "editor"; 
    var inp = this.querySelectorAll("input");
    inp[0].focus();
}