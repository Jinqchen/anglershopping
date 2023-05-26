var list = document.getElementById("list");
var li = list.getElementsByTagName("li");

var pic =document.getElementById("pic");
var ul = pic.getElementsByTagName("ul");

for(var i = 0; i<li.length;i++){
    li[i].onclick = gotocatalog;
}

function gotocatalog(){
    for (var i=0;i<li.length;i++){
        
        if(li[i]===this){
            li[i].className="active";
            ul[i].className="clearfix active";
        }else{
            li[i].className="nav-item";
            ul[i].className="clearfix";
        }
       
    }
}