window.addEventListener('load', function() {
    createArray();
    checkLoginReload(); 
    // FORM
    const inputLogin=document.querySelector("#Login");
    const inputRegister=document.querySelector("#Register");
    const modalLogin=document.querySelector(".modal_content-login");
    const modalRegister=document.querySelector(".modal_content-register");
    const inputLoginInNavbar=document.querySelector(".dang-nhap");
    const inputRegisterInNavbar=document.querySelector(".dang-ky");
    function InputLogin(){
        document.querySelector(".modal").style.display="flex"
        inputRegister.classList.add("modal_content-header-item-default");
        inputLogin.classList.remove("modal_content-header-item-default");
        modalLogin.style.display="block"
        modalRegister.style.display="none"
    }
    function InputRegister(){
        document.querySelector(".modal").style.display="flex"
        inputLogin.classList.add("modal_content-header-item-default");
        inputRegister.classList.remove("modal_content-header-item-default");
        modalRegister.style.display="block"
        modalLogin.style.display="none"
    }
    for (const check of document.querySelectorAll(".item-taikhoan")){
        if(check==inputLoginInNavbar){
           check.addEventListener("click",InputLogin);
        }
        else{
            if(check==inputRegisterInNavbar){
                check.addEventListener("click",InputRegister);
             }
        }
    }
    
    for(const check of document.querySelectorAll(".modal_content-header-item")){
        if(check==inputLogin){
            check.addEventListener("click",InputLogin);
        }
        else{
            if(check==inputRegister){
            check.addEventListener("click",InputRegister);
            }
        }
    }
    
    document.getElementById("btn-login").disabled = true;
    document.getElementById("btn-register").disabled= true;
    // LOGIC LOGIN
    var checkUserLogin=false;
    var checkPassLogin=false;
    document.getElementById("user-login").addEventListener("change", ()=>{
        // checkUserLogin=true;
        // if(checkUserLogin) successCheckLogin();
        if(document.getElementById("user-login").value!==""){
            checkUserLogin=true;
            successCheckLogin();
        }
        else{
            checkUserLogin=false;
            falseCheckLogin();
        }
    })
    document.getElementById("password-login").addEventListener("change", ()=>{
        // checkPassLogin=true;
        // if(checkPassLogin) successCheckLogin();
        if(document.getElementById("password-login").value!==""){
            checkPassLogin=true;
            successCheckLogin();
        }
        else{
            checkPassLogin=false;
            falseCheckLogin();
        }
    })
    function successCheckLogin(){
        if(checkUserLogin&&checkPassLogin){
            var obj=document.getElementById("btn-login");
            obj.classList.remove("btn-default");
            obj.disabled = false;
        }
    }
    function falseCheckLogin(){
        if(!checkPassLogin||!checkUserLogin){
          var obj=document.getElementById("btn-login");
          obj.classList.add("btn-default");
          obj.disabled=true;
        }
    }
    
    function login(){
        var UserArray=JSON.parse(localStorage.getItem("user"));
        var loginUser=document.querySelector("#user-login");
        var passLoginUser=document.querySelector("#password-login");
        var username;
        var flag=false;
        var admincheck=false;
        var saveLogin;
        for(var i=0;i<UserArray.length;i++){
            if(loginUser.value==UserArray[i].user1||loginUser.value==UserArray[i].user2 &&passLoginUser.value==UserArray[i].pass){
                flag=true;
                username=UserArray[i].username;
                if(UserArray[i].right==1) admincheck=true;
                saveLogin=UserArray[i];
                saveLogin.id=i;
            }
        }
        if(flag==false){
           document.querySelector(".error-login").innerText="Số điện thoại/Email hoặc Mật khẩu sai!";
           return;
        }
        else{
           var obj1=document.querySelector(".error-login");
           obj1.innerText="";
           alert("Đã đăng nhập thành công");
           var obj=document.querySelector(".login");
           if(admincheck){
                document.querySelector(".icon-admin").style.display="block";
                document.querySelector(".modal").style.display="none";
                document.querySelector(".text-taikhoan").innerText="ADMIN"
               
            }
            else{
                document.querySelector(".modal").style.display="none";
                if(username=='')  document.querySelector(".text-taikhoan").innerText="USER";
                else{ document.querySelector(".text-taikhoan").innerText=username}
            }
           
        }
        obj.addEventListener('mouseenter', function() {
            document.querySelector(".open-modal").style.display = 'none';
            document.querySelector('.out-modal').style.setProperty('display', 'block', 'important');
        });
        obj.addEventListener('mouseleave', function() {
            document.querySelector('.out-modal').style.setProperty('display', 'none', 'important');
        });
    
        localStorage.setItem("UserLogin",JSON.stringify(saveLogin));
    }
    function checkLoginReload(){
        var saveLogin=JSON.parse(localStorage.getItem("UserLogin"));
        if(saveLogin){
            if(saveLogin.right==1){
                document.querySelector(".icon-admin").style.display="block";
                document.querySelector(".modal").style.display="none";
                document.querySelector(".text-taikhoan").innerText="ADMIN"
            }
            else{
                document.querySelector(".modal").style.display="none";
                if(saveLogin.username=='')  document.querySelector(".text-taikhoan").innerText="USER";
                else{ document.querySelector(".text-taikhoan").innerText=saveLogin.username}
            }
               var obj=document.querySelector(".login");
        obj.addEventListener('mouseenter', function() {
            document.querySelector(".open-modal").style.display = 'none';
            document.querySelector('.out-modal').style.setProperty('display', 'block', 'important');
        });
        obj.addEventListener('mouseleave', function() {
            document.querySelector('.out-modal').style.setProperty('display', 'none', 'important');
        });
        }
    }
    function checkLogout(){
        localStorage.removeItem("UserLogin");
    }
    document.getElementById("btn-login").addEventListener("click", function(event) {
        event.preventDefault(); 
        if (checkUserLogin&&checkPassLogin) {
            login()
          };
        }
    )
    // LOGIC REGISTER
    var checkUser1Resgister=false;
    var checkUser2Register=false;
    var checkPassResgister=false;
    function showError(input, text) {
        var obj1 = input;
        obj1.classList.add("error");
        var parent = obj1.parentElement;
        var obj2 = parent.querySelector("span");
        obj2.innerText = text;
        obj2.style.fontSize = "12px";
        obj2.style.color = "#e80d0d";
    }
    function clearError (input){
        var obj1=input
        var parent=obj1.parentElement;
        obj1.classList.remove("error");
        var obj2=parent.querySelector("span");
        obj2.innerText="";
    }
    document.getElementById("user1-register").addEventListener("change",()=>{
        if(document.getElementById("user1-register").value!==""){
            checkUser1Resgister=true;
            successCheckRegister();
        }
        else{
            checkUser1Resgister=false;
            falseCheckRegister();
        }
    })
    document.getElementById("user2-register").addEventListener("change",()=>{
        if(document.getElementById("user2-register").value!==""){
            checkUser2Register=true;
            successCheckRegister();
        }
        else{
            checkUser2Register=false;
            falseCheckRegister();
        }
    })
    document.getElementById("password-register").addEventListener("change",()=>{
        if(document.getElementById("password-register").value!==""){
            checkPassResgister=true;
            successCheckRegister();
        }
        else{
            checkPassResgister=false;
            falseCheckRegister();
        }
    })
    function checkForm() {
        var user1 = document.getElementById("user1-register");
        user1.value = user1.value.trim();
        var user2 = document.getElementById("user2-register");
        user2.value = user2.value.trim();
        var password = document.getElementById("password-register");
        password.value = password.value.trim();
    
        if (user1.value.length !== 10) {
            user1.focus();
            showError(user1, "Số điện thoại không phù hợp");
            return false;
        }
        else{
           clearError(user1)
        }
        var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailRegex.test(user2.value)) {
            user2.focus();
            showError(user2, "Lỗi Email không phù hợp");
            return false;
        }
        else{
            clearError(user2)
        }
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if (!passwordRegex.test(password.value)) {
            password.focus();
            if(password.value=="") showError(password, "Mật khẩu không được để trống");
            else if (!/(?=.*\d)/.test(password.value)) showError(password, "Phải chứa một số từ 0-9");
            else if (!/(?=.*[a-z])/.test(password.value)) showError(password, "Phải chứa một ký tự viết thường");
            else if (!/(?=.*[A-Z])/.test(password.value)) showError(password, "Phải chứa một ký tự viết hoa");
            else if (!/.{8,20}/.test(password.value)) showError(password, "Độ dài ít nhất 8 ký tự và tối đa 20 ký tự");
            return false;
        }
        else{
            clearError(password)
        }
    
        return true;
    }
    function successCheckRegister(){
        if(checkUser1Resgister&&checkUser2Register&&checkPassResgister){
            var obj=document.getElementById("btn-register");
            obj.classList.remove("btn-default");
            obj.disabled = false;
       }
    }
    function falseCheckRegister(){
        if(!checkPassResgister||!checkUser1Resgister||!checkUser2Register){
          var obj=document.getElementById("btn-register");
          obj.classList.add("btn-default");
          obj.disabled=true;
        }
    }
    for(const checkClose of document.querySelectorAll(".btn-close")){
        checkClose.addEventListener("click",()=>{
            document.querySelector(".modal").style.display="none";
        })
    }
    
    
    // ARRAY OF USER/ADMIN
    function createArray(){
        var UserArray=[];
        if(localStorage.getItem('user')==null){	
            var admin={user1:"0000000000",user2:"admin@gmail.com",pass:"0123456789aD",username:"admin",datesignup: '12/11/2023',right:1};
            UserArray.push(admin);
            localStorage.setItem('user',JSON.stringify(UserArray));
        }
    }
    function addUser(){
       var UserArray=JSON.parse(localStorage.getItem('user'))
       var date=new Date();
       var currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(); 
       var userAdd={user1:document.querySelector("#user1-register").value,user2:document.querySelector("#user2-register").value,pass:document.querySelector("#password-register").value,username:document.querySelector("#username-register").value,datesignup:currentDate,right:0};
       if(!checkUserExist(userAdd.user1,userAdd.user2)){
        UserArray.push(userAdd);
        window.onload = function() {
            alert("Bạn đã đăng ký thành công");
        };
        localStorage.setItem("user",JSON.stringify(UserArray));
        location.reload();
       }
       else{
         document.querySelector(".error-register").innerText="Số điện thoại hoặc email đã tồn tại";
       }
    }
    function resetForm() {
        document.getElementById("user1-register").value = "";
        document.getElementById("user2-register").value = "";
        document.getElementById("password-register").value = "";
    
        clearError(document.getElementById("user1-register"));
        clearError(document.getElementById("user2-register"));
        clearError(document.getElementById("password-register"));
    
        checkUser1Resgister = false;
        checkUser2Register = false;
        checkPassResgister = false;
        falseCheckRegister();
    }

    function checkUserExist(user1,user2){
        var UserArray=JSON.parse(localStorage.getItem('user'));
        return UserArray.some(user => user.user1 === user1 || user.user2 === user2);
    }
    document.getElementById("btn-register").addEventListener("click", function(event) {
        event.preventDefault(); 
        if (checkForm()) {
            addUser();
            resetForm();
        }
     }
    )
    
    document.querySelector(".icon-admin").addEventListener("click",()=>{
        window.location="admin.html";
    })
    document.querySelector(".dang-xuat").addEventListener("click",()=>{
        checkLogout();
        window.location.reload();
    })
    });
    