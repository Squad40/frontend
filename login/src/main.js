var state = false;

function toggle(){
    if(state){
        document.getElementById("inp-password").setAttribute("type","password");
        document.getElementById("eye").style.color='#A9A9A9';
        state = false;
    }else{
        document.getElementById("inp-password").setAttribute("type","text");
        document.getElementById("eye").style.color='#FE4400';
        state = true;
    }
}