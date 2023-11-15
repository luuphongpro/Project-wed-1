function taomenu() {
    var theloai = ["Kinh dị", "Trinh thám","Hài hước","Kinh doanh","Xã hội","Giáo dục"];
    var s="";
    for(i=0; i<theloai.length; i++) {
        var a='<div class="container-topmenu" id="menu' + i + '"onClick="hienthi1(this)">' + theloai[i] + '</div>';
        s+=a;
    }
    // s='<ul>' + s + '</ul>';
    document.getElementById("top-menu").innerHTML=s;
};
document.getElementById("top-menu").addEventListener("load",taomenu);