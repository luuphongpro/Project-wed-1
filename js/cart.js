var getGioHang=document.getElementsByClassName("gio-hang");
var getBunttonCloseGio=document.getElementById("button-close");
var getContainerGioHang=document.getElementsByClassName("container-giohang");
getBunttonCloseGio.addEventListener("click",closeGioHang);
getGioHang[0].addEventListener("click",showGioHang);
var modal_giohang=document.getElementById("modal-giohang");
function showGioHang(){
    modal_giohang.classList.add('open-giohang');
}
modal_giohang.addEventListener("click",closeGioHang);
getContainerGioHang[0].addEventListener("click",function (event){
event.stopPropagation()
});
function closeGioHang(){
    var modal_giohang=document.getElementById("modal-giohang");
    modal_giohang.classList.remove('open-giohang');
}
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
taomenu();