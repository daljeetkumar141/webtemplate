var conlink = document.getElementById('wrkwthme');
var mypg = document.getElementById('mypg');
var con = document.getElementById('con');
var backbtn = document.getElementById('backbtn');

conlink.onclick = function(){

    mypg.style.display = "none";
    con.style.display = "block";
}

backbtn.onclick = function(){

    con.style.display = "none";
    
    if(con.style.display = "none"){
        mypg.style.display = "block";
    }
}

