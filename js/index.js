var list = document.getElementById("list");
var li = list.getElementsByTagName("li");

var pic =document.getElementById("pic");
var ul = pic.getElementsByTagName("ul");
var all = document.getElementById("all");

for(var i = 0; i<li.length;i++){
    li[i].onclick = gotocatalog;
}

function gotocatalog(){
    console.log(ul);
    for (var i=0;i<li.length;i++){
        console.log(this.id);
        if(li[i]===this){
            li[i].className="active";
            if(i!=0){
                ul[i-1].className="active"
            }else{
                ul[i].className="active";
            }
            
        }else{
            //ul[i].className="other";
            li[i].className="nav-item";
            if(i!=0){
                ul[i-1].className="other";
                ul[li.length-1].className="other";
            }else{
                ul[i].className="other";
            }
            
        }  
       
    }
    console.log(all===this);

    if(all===this){
        console.log("go");
        for (var i=0;i<li.length;i++){
            ul[i].className="active";
        }
    }
}

function openForm() {
    let emial = prompt("Email:");
    let pas=prompt("Passward:")
    
  }