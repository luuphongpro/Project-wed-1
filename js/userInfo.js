window.addEventListener('load', function() {
    document.querySelector(".thong-tin").addEventListener("click",showUserInfo);
    function showUserInfo(){
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
})