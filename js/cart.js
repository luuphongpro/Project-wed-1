window.addEventListener('load', function() {
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
    ;
})