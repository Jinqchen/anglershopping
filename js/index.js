var list = document.getElementById("list");
var li = list.getElementsByTagName("li");

for(var i = 0; i<li.length;i++){
    li[i].onclick = gotocatalog;
}

function gotocatalog(){
    for (var i=0;i<li.length;i++){
        if(li[i]===this){
            li[i].className="active";
        }else{
            li[i].className="nav-item";
        }
    }
}