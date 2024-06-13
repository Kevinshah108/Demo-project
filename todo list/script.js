function openinputbox() {               
    var x = document.getElementById("blurebg");
    if (x.style.display == "none") {
    x.style.display = "flex";
    } else {
    x.style.display = "none";
    }
    }
    

    

    function myfunc(){

        var element = document.getElementById("typeheretext").value;
         var a = document.createElement("div");
        document.getElementById("madediv").appendChild(a);
        a.className="createddivs";


         const heading= document.createElement("h2");
         heading.textContent=element
         a.appendChild(heading)
         heading.className="innertext1";
     
        openinputbox()
        hidetext()
      
    }

        function hidetext(){
        var b=document.getElementById("hidethistext");
        
        if (b.style.display == "flex") {
            b.style.display = "none";
            }else{
                b.style.display = "none";
            }
}


        // function design() {
 
        //  var c=document.createElement("div")
        //  var d=document.createElement("div")
        //  var e=document.createElement("div")
        //  var f=document.createElement("div")
        //  var g=document.createElement("div")

         
        //  a.getElementById("madediv").appendChild(c);
        //  a.getElementById("madediv").appendChild(d);
        //  a.getElementById("madediv").appendChild(e);
        //  a.getElementById("madediv").appendChild(f);
        //  a.getElementById("madediv").appendChild(g);

        //  c.className="createddivs1";
        //  d.className="createddivs2";
        //  e.className="createddivs3";
        //  f.className="createddivs4";
        //  g.className="createddivs5";
        // }


       