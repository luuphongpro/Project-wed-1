function taomenu() {
    var theloai = ["Kinh dị", "Trinh thám","Hài hước","Kinh doanh","Xã hội","Giáo dục"];
    var s="";
    for(i=0; i<theloai.length; i++) {
        var a='<a href="#"><li id=' + i + 'onClick="hienthi1(this);">' + theloai[i] + '</li></a>';
        s+=a;
    }
    s='<ul>' + s + '</ul>';
    document.getElementById("top-menu").innerHTML=s;
};