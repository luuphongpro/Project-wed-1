window.addEventListener('load', function() {
    document.querySelector(".thong-tin").addEventListener("click",showUserInfo);
    function showUserInfo(){
        var checkout=JSON.parse(localStorage.getItem("checkout"));
        var user=JSON.parse(localStorage.getItem("UserLogin"));
        if(user.right==1){
            document.querySelector(".modal-info-user-container-content-item-username").value="ADMIN";
        }
        else{
            if (user.username=="") document.querySelector(".modal-info-user-container-content-item-username").value="USER";
            else{
                document.querySelector(".modal-info-user-container-content-item-username").value=user.username;
            }
        }
        document.querySelector(".modal-info-user-container-content-item-email").innerText=user.user2;
        document.querySelector(".modal-info-user-container-content-item-phonenumber").innerText=user.user1;
        document.querySelector(".modal-info-user-container-content-item-daycreate").innerText=user.datesignup;
        document.querySelector(".modal-info-user").style.display='flex';
        var d=`<select id="showProductWait" >
                    <option value="">Xem thêm ở đây</option>`
        var s="";
        checkout.forEach(function(item) {
            if(item.userID==user.id){
                item.items.forEach(function(index){
                    if(index.status==1){
                        s+=`<option value="">${index.name}</option>`;
                    }
                })
            }
        });
        if(s==""){
            document.querySelector(".modal-info-user-container-content-item-productWait").innerText="Không có sản phẩm chờ thanh toán"
        }
        else{
            d+=s+`</select>`;
            document.querySelector(".modal-info-user-container-content-item-productWait").innerHTML=d;
        }
    }
    document.querySelector(".close-info").addEventListener("click",()=>{
        document.querySelector(".modal-info-user").style.display="none";
    })
    document.querySelector(".modal-info-user-container-content-item-username").addEventListener("change",()=>{
        var user=JSON.parse(localStorage.getItem("UserLogin"));
        user.username=document.querySelector(".modal-info-user-container-content-item-username").value;
        localStorage.setItem("UserLogin",JSON.stringify(user));
        var UserArray=JSON.parse(localStorage.getItem("user"));
        for(var i=0;i<UserArray.length;i++){
            if(UserArray[i].user1==user.user1&&UserArray[i].user2==user.user2){
                UserArray[i].username=user.username;
                break;
            }
        }
        localStorage.setItem("user",JSON.stringify(UserArray)); 
        window.location.reload();
    })
document.querySelector(".don-mua").addEventListener("click",()=>{
        document.querySelector(".modal-hoadon").style.display="flex";
        document.getElementById("button-close-hoadon").addEventListener("click",()=>{
            document.querySelector(".modal-hoadon").style.display="none";
        })
        var checkout=JSON.parse(localStorage.getItem("checkout"));
        var user=JSON.parse(localStorage.getItem("UserLogin"));
        var s=""
        checkout.forEach(function(item) {
            if(item.userID==user.id){
                item.items.forEach(function(index){
                    if(index.status==2){
                        s+=`<li class="content-giohang-item">
                             <div class="content-giohang-left">
                            <div class="content-giohang-item-img" style="background-image: url('${index.img}')">
                            </div>     
                            </div>
                            <div class="content-giohang-mid">
                            <span class="content-giohang-info">${index.name}</span>
                            </div>
                            <div class="content-giohang-right">
                            <div class="content-giohang-soluong">${index.quantity}</div>
                            <span class="content-giohang-gia">${index.price} VNĐ</span> 
                            </div>
                            </li>`;
                    }
                })
            }
        });
        if(s==""){
            document.querySelector(".none-item").style.display="block";
        }
        else{
            document.querySelector(".modal-hoadon-content-container-list").innerHTML=s;
        }
    })  
    
    
})