function colors(){
    var letters='0123456789ABCDEF'.split("");
    var color='#';
    for(var i=0;i<6;i++)
    {
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
var start=new Date().getTime();
    function shapeappear(){
        var dimen=Math.random()*300 + 30;
        if(Math.random()>0.5){
            document.getElementById("shape").style.borderRadius="50%";
        }
        else{
            document.getElementById("shape").style.borderRadius="0%";
        }
        document.getElementById("shape").style.top=Math.random()*300;
        document.getElementById("shape").style.left=Math.random()*1000;
        document.getElementById("shape").style.width=dimen;
        document.getElementById("shape").style.height=dimen;
        document.getElementById("shape").style.display="block";
        document.getElementById("shape").style.backgroundColor= colors();
        start=new Date().getTime();
    }
    function settimer(){
        setTimeout(shapeappear,Math.random()*2000);
    }
    settimer();

    document.getElementById("shape").onclick=function(){
        document.getElementById("shape").style.display="none";
        var end=new Date().getTime();
        var timetaken=(end-start)/1000;
        document.getElementById("timer").innerHTML=timetaken+"s";
        settimer();
    }