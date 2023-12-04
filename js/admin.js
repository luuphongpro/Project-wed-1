function cook() {
    window.location = "index.html";
}
var checkout = JSON.parse(localStorage.getItem('checkout'));//Lấy checkout
var user = JSON.parse(localStorage.getItem('user'));//Lấy User

// Đổi màu khi nhấn vào navigation
var getcontainers = document.querySelectorAll(".container");
for (const getcontainer of getcontainers) {
    getcontainer.addEventListener("click", function () {
        doi_mau_ds(getcontainer);
    });
}
getcontainers[1].addEventListener("click", function () {

})
function doi_mau_ds(getcontainer) { //Đây là hàm đổi màu nè
    for (const getcontainer of getcontainers) {
        getcontainer.style.color = "#333333";
    }
    getcontainer.style.color = "#428BCA";
}
//Show trang chu
var tmp;
var updateTime1 = 0;
var updateTime2 = 0;
var updateTime3 = 0;
var tongTaiKhoan = 0;
var sumProduct = 0;
var tongDoanhThu = 0;
getcontainers[0].addEventListener("click", showHome);//Sự kiện nhấn vào home

function tinhTongDT() { //Tính tổng doanh thu để hiện vào home nè
    tongDoanhThu=0;
    checkout = JSON.parse(localStorage.getItem('checkout'));
    if(checkout==null){
        return -1;
    }
    checkout.forEach(function (item) {
        item.items.forEach(function (index) {
            tongDoanhThu += index.quantity * index.price;
        })
    })
    tongDoanhThu=(tongDoanhThu*1000).toLocaleString('de-DE');
    showHome();
}
tinhTongDT();//Auto gọi hàm khi chạy AD

function tinhTongUser() { //Tính tổng số TK đã tạo nè
    // showHome();
    return user.length;
}
tongDoanhThu = tongDoanhThu + ' VNĐ'
console.log(sumProduct);
function showHome() {
    var s = "";
    s = `<div class="home-page">
    <div class="container-home">
    <p>Tổng sản phẩm:</p>
    <div class="total-product">${sumProduct}</div>
    <div class="time-ago" ><i class="ti-reload" id="reload-time" onclick="startTime1()"></i> <div id="innerTime1">Cập nhật sau 0 phút trước</div></div>
    </div>
    <div class="container-home so2">
        <p>Tổng doanh thu:</p>
        <div class="total-product">${tongDoanhThu}</div>
        <div class="time-ago"><i class="ti-reload" id="reload-time" onclick="startTime2()"></i> <div id="innerTime2">Cập nhật sau 0 phút trước</div></div>
        </div>
    <div class="container-home so3">
        <p>Tổng số tài khoản đăng ký:</p>
        <div class="total-product">${tinhTongUser()}</div>
        <div class="time-ago" ><i class="ti-reload" id="reload-time" onclick="startTime3()"></i> <div id="innerTime3">Cập nhật sau 0 phút trước</div></div>
        </div>
    </div>`;
    // s='<div class="home-page">'
    // +'<div class="container-home">'
    // +'<p>Tổng sản phẩm:</p>'
    // +'<div class="total-product">0</div>'
    // +'<div class="time-ago" ><i class="ti-reload" id="reload-time" onclick="startTime()"></i> <div id="innerTime">Cập nhật sau 0 phút trước</div></div>'
    // +'</div>'
    // +'<div class="container-home so2">'
    // +'<p>Tổng doanh thu:</p>'
    // +'<div class="total-product">123.000</div>'
    // +'<div class="time-ago" id="innerTime"><i class="ti-reload" id="reload-time"></i> Cập nhật sau 5 phút trước</div></div>'
    // +'<div class="container-home so3">'
    // +'<p>Tổng số tài khoản đăng ký:</p>'
    // +'<div class="total-product">12</div>'
    // +'<div class="time-ago" id="innerTime"><i class="ti-reload" id="reload-time"></i> Cập nhật sau 5 phút trước</div>'
    // +'</div>'
    // +'</div>';
    document.getElementById("right-content").innerHTML = s;
    document.getElementById("innerTime1").innerHTML = `Cập nhật sau ${updateTime1} giây trước`;
    document.getElementById("innerTime2").innerHTML = `Cập nhật sau ${updateTime2} giây trước`;
    document.getElementById("innerTime3").innerHTML = `Cập nhật sau ${updateTime3} giây trước`;
}
function startTime1() {
    updateTime1 = 0;
    document.getElementById("innerTime1").innerHTML = `Cập nhật sau ${updateTime1} giây trước`;
    tinhTongsp();
}
function startTime2() {
    updateTime2 = 0;
    document.getElementById("innerTime2").innerHTML = `Cập nhật sau ${updateTime2} giây trước`;
    tinhTongDT();
}
function startTime3() {
    updateTime3 = 0;
    document.getElementById("innerTime3").innerHTML = `Cập nhật sau ${updateTime3} giây trước`;
    // tinhTongsp();
}
//Lấy tông số sản phẩm hiện có
function tinhTongsp() {
    sumProduct = productArr.length;
    showHome();
}
//Điếm thời gian sau click reload tổng sản phẩm
setInterval(function () {
    updateTime1 += 5;

    const innerTimeElement1 = document.getElementById("innerTime1");
    if (innerTimeElement1 !== null) {
        if (updateTime1 < 60) {
            document.getElementById("innerTime1").innerHTML = `Cập nhật sau ${updateTime1} giây trước`;
        } else if (updateTime1 / 60 >= 1 && updateTime1 / 60 <= 60) {
            const minutes = Math.floor(updateTime1 / 60);
            document.getElementById("innerTime1").innerHTML = `Cập nhật sau ${minutes} phút trước`;
        }
        if (updateTime1 / 3200 >= 1) {
            const hours = Math.floor(updateTime1 / 3600);
            document.getElementById("innerTime1").innerHTML = `Cập nhật sau ${hours} giờ trước`;
        }
    }
}, 5000);
setInterval(function () {
    updateTime2 += 5;

    const innerTimeElement2 = document.getElementById("innerTime2");
    if (innerTimeElement2 !== null) {
        if (updateTime2 < 60) {
            document.getElementById("innerTime2").innerHTML = `Cập nhật sau ${updateTime2} giây trước`;
        } else if (updateTime2 / 60 >= 1 && updateTime2 / 60 <= 60) {
            const minutes = Math.floor(updateTime2 / 60);
            document.getElementById("innerTime2").innerHTML = `Cập nhật sau ${minutes} phút trước`;
        }
        if (updateTime2 / 3200 >= 1) {
            const hours = Math.floor(updateTime2 / 3600);
            document.getElementById("innerTime2").innerHTML = `Cập nhật sau ${hours} giờ trước`;
        }
    }
}, 5000);
setInterval(function () {
    updateTime3 += 5;
    const innerTimeElement3 = document.getElementById("innerTime3");
    if (innerTimeElement3 !== null) {
        if (updateTime3 < 60) {
            document.getElementById("innerTime3").innerHTML = `Cập nhật sau ${updateTime3} giây trước`;
        } else if (updateTime3 / 60 >= 1 && updateTime3 / 60 <= 60) {
            const minutes = Math.floor(updateTime3 / 60);
            document.getElementById("innerTime3").innerHTML = `Cập nhật sau ${minutes} phút trước`;
        }
        if (updateTime3 / 3200 >= 1) {
            const hours = Math.floor(updateTime3 / 3600);
            document.getElementById("innerTime3").innerHTML = `Cập nhật sau ${hours} giờ trước`;
        }
    }
}, 5000);

doi_mau_ds(getcontainers[0]) //Auto gọi hàm khi chạy
showHome(); //Này cũng thế
//Show model
getcontainers[1].addEventListener("click", function () { //Khi nhấn vào qlsp thì hiện ra modal nè
    showQLSP();
})
const content = document.getElementById("right-content");
function showQLSP() { //Này hiện ra top-menu thôi
    var s = "";
    s = '<div class="header-right-content">'
        + '<div class="container-header-item"><select name="" id="" onchange="showallQLSP(this.value)">'
        + '<option value="1">Xem tất cả sản phẩm</option>'
        + '<option value="vanhoc">Văn học</option>'
        + '<option value="amthuc-nauan">Ẩm thực</option>'
        + '<option value="yhoc-suckhoe">Sức khỏe</option>'
        + '<option value="kientruc-xaydung">Kiến trúc</option>'
        + '<option value="kinhte">Kinh tế</option>'
        + '<option value="ngoaingu">Ngoại ngữ</option>'
        + '<option value="chinhtri-luatphap">Pháp luật</option>'
        + '<option value="banchay">Hót hòn họt</option>'
        + '</select>'
        + '</div>'

        + '<div class="container-search">'
        + '<input type="search" placeholder="Nhập sản phẩm muốn tìm kiếm" class="search-admin" id="search-admin-js" onkeypress="searchItems()" onkeyup="searchItems()">'
        + '<button class="button-search">'
        + '<i class="ti-search item-search"></i>'
        + '</button>'
        + '</div>'
        + '<div class="add-item container-header-item" id="button-add-js" onclick="showBtnAdd()"><i class="fa-duotone fa-plus icon-plus"></i> Thêm mới</div>'
        + '</div>'
        + '<div class="top-menu">'
        + '<div class="id">ID</div>'
        + '<div class="image">Ảnh</div>'
        + '<div class="ten-sp">Tên Sản Phẩm</div>'
        + '<div class="so-luong">Số Lượng</div>'
        + '<div class="gia-sp">Giá Sản Phẩm</div>'
        + '<div class="modify">Chỉnh Sửa</div>'
        + '<div class="delette">Xóa</div>'
        + '</div>'
        + '<div id="slide-content">'
        + '</div>';
    content.innerHTML = s;
    showallQLSP("1"); //Này hiện ra dssp với 1 là ALL
}
//Tìm kiếm sản phẩm để chỉnh sửa
function searchItems() { //Hàm tìm kiếm sản phẩm trong qlsp
    var valueSearch = document.getElementById("search-admin-js");
    var contentSearch = valueSearch.value.toLowerCase();
    s = "";
    productArr.forEach(function (item) {
        var tmp = item.name.toLowerCase();
        var temp = contentSearch.split(/\s+/); // Sử dụng split để tách từ
    
        // Kiểm tra xem từng từ trong mảng searchTerms có tồn tại trong tmp hay không
        var match = temp.every(function (term) {
            return tmp.indexOf(term) !== -1;
        });
    
        if (match) {
            s +=`<div class="container-content">
            <div class="id">${item.productId}</div>
            <div class="image">
                <img src="${item.img}" alt="">
            </div>
            <div class="ten-sp">${item.name}</div>
            <div class="so-luong">${item.sl}
            </div>
            <div class="gia-sp">${item.price}</div>
            <div class="modify"><i class="ti-pencil-alt icon-modify" onclick="getValueModalModify(${item.productId})"></i> </div>
            <div class="delette"><i class="fa-sharp fa-regular fa-circle-xmark icon-close" onclick="deleteProduct(${item.productId})"></i> </div>
        </div>`;
        }
    });
    document.getElementById('slide-content').innerHTML = s;
}
// show management user---------------------------------------------------------------------------
document.getElementsByClassName("container")[2].addEventListener("click", showManagementUser)
function showManagementUser() {
    var s = `<div class="content-user-management">
        <button class="add-User btn-management">Thêm khách hàng</button>
        <button class="add-Admin btn-management">Thêm ADMIN</button>
        <button class="delete btn-management">Xóa một tài khoản hiện hành</button>
        </div>`
    document.getElementById("right-content").innerHTML = s;
}

document.getElementById("right-content").addEventListener("click", (event) => {
    // Kiểm tra xem phần tử được nhấp chuột có phải là nút "add-User" hay không
    if (event.target.classList.contains("add-User")) {
        var s = `<div class="content-add">
        <form action="" onsubmit="return checkForm()" autocomplete="off" class="form">
            <div class="modal_content-input-box">
                <label for="user1-register">Số điện thoại</label>
                <div>
                <input type="number" placeholder="Nhập số điện thoại" id="user1-register" class="hide-number-spinner">
                <span></span>
                </div>
            </div>
            <div class="modal_content-input-box">
                <label for="user2-register">Email</label>
                <div>
                <input type="text" placeholder="Nhập email" id="user2-register">
                <span></span>
                </div>
            </div>
            <div class="modal_content-input-box">
                <label for="password-register">Mật khẩu</label>
                <div>
                <input type="password" placeholder="Nhập mật khẩu" id="password-register">
                <span></span>
                </div>
            </div>
            <div class="modal_content-input-box">
                <label for="username-register">Tên đăng ký</label>
                <div>
                <input type="text" placeholder="Nhập tên đăng ký" id="username-register">
                <span></span>
                </div>
            </div>
            <div class="modal_content-btn-box">
                <div>
                    <button type="reset" class="btn btn-close"><span>Trở lại</span></button>
                    <button type="submit" class="btn btn-default" id="btn-add-user"><span>Thêm khách hàng</span></button>
                </div>
            </div>
            <div class="div-error-regisrer"><span class="error-register"></span></div> 
        </form>   
    </div>`;
        document.getElementById("right-content").innerHTML = s;
        document.getElementById("btn-add-user").addEventListener("click", function (event) {
            event.preventDefault();
            if (checkForm()) {
                addUser();
                resetForm();
            }
        });
        document.querySelector(".btn-close").addEventListener("click", () => {
            showManagementUser();
        });
    }
});
document.getElementById("right-content").addEventListener("click", (event) => {
    // Kiểm tra xem phần tử được nhấp chuột có phải là nút "add-User" hay không
    if (event.target.classList.contains("add-Admin")) {
        var s = `<div class="content-add">
        <form action="" onsubmit="return checkForm()" autocomplete="off" class="form">
            <div class="modal_content-input-box">
                <label for="user1-register">Số điện thoại</label>
                <div>
                <input type="number" placeholder="Nhập số điện thoại" id="user1-register" class="hide-number-spinner">
                <span></span>
                </div>
            </div>
            <div class="modal_content-input-box">
                <label for="user2-register">Email</label>
                <div>
                <input type="text" placeholder="Nhập email" id="user2-register">
                <span></span>
                </div>
            </div>
            <div class="modal_content-input-box">
                <label for="password-register">Mật khẩu</label>
                <div>
                <input type="password" placeholder="Nhập mật khẩu" id="password-register">
                <span></span>
                </div>
            </div>
            <div class="modal_content-btn-box">
                <div>
                    <button type="reset" class="btn btn-close"><span>Trở lại</span></button>
                    <button type="submit" class="btn btn-default" id="btn-add-admin"><span>Thêm admin</span></button>
                </div>
            </div>
            <div class="div-error-regisrer"><span class="error-register"></span></div> 
        </form>   
    </div>`;
        document.getElementById("right-content").innerHTML = s;
        document.getElementById("btn-add-admin").addEventListener("click", function (event) {
            event.preventDefault();
            if (checkForm()) {
                addAdmin();
                resetForm();
            }
        });
        document.querySelector(".btn-close").addEventListener("click", () => {
            showManagementUser();
        });
    }
});
document.getElementById("right-content").addEventListener("click", (event) => {
    // Kiểm tra xem phần tử được nhấp chuột có phải là nút "add-User" hay không
    if (event.target.classList.contains("delete")) {
        var s = `<div class="content-add">
                <div class="content-delete">
                    <div class="cotent-delete-div">
                        <div>
                          <label for="user-delete">Nhập email hoặc số điện thoại cần xóa</label>
                          <input type="text" placeholder="Nhập ở đây" id="user-delete">
                            <button type="" class="btn btn-default" id="btn-delete"><span>Xóa</span></button>
                          <button type="" class="btn btn-close"><span>Trở lại</span></button>
                          <span class="error-delete"></span>
                        </div>
                    </div>
                </div>
        </div>`;

        document.getElementById("right-content").innerHTML = s;
        document.querySelector(".btn-close").addEventListener("click", () => {
            showManagementUser();
        });
        document.querySelector("#btn-delete").addEventListener("click", () => {
            var userDelete = document.querySelector("#user-delete").value;
            checkErrorDelete(userDelete);
            if (document.querySelector("#user-delete").value !== "") document.querySelector("#user-delete").value = "";
        })
    }
});
function showError(input, text) {
    var obj1 = input;
    obj1.classList.add("error");
    var parent = obj1.parentElement;
    var obj2 = parent.querySelector("span");
    obj2.innerText = text;
    obj2.style.fontSize = "12px";
    obj2.style.color = "#e80d0d";
}
function clearError(input) {
    var obj1 = input
    var parent = obj1.parentElement;
    obj1.classList.remove("error");
    var obj2 = parent.querySelector("span");
    obj2.innerText = "";
}
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
    else {
        clearError(user1)
    }
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(user2.value)) {
        user2.focus();
        showError(user2, "Lỗi Email không phù hợp");
        return false;
    }
    else {
        clearError(user2)
    }
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (!passwordRegex.test(password.value)) {
        password.focus();
        if (password.value == "") showError(password, "Mật khẩu không được để trống");
        else if (!/(?=.*\d)/.test(password.value)) showError(password, "Phải chứa một số từ 0-9");
        else if (!/(?=.*[a-z])/.test(password.value)) showError(password, "Phải chứa một ký tự viết thường");
        else if (!/(?=.*[A-Z])/.test(password.value)) showError(password, "Phải chứa một ký tự viết hoa");
        else if (!/.{8,20}/.test(password.value)) showError(password, "Độ dài ít nhất 8 ký tự và tối đa 20 ký tự");
        return false;
    }
    else {
        clearError(password)
    }

    return true;
}
function resetForm() {
    document.getElementById("user1-register").value = "";
    document.getElementById("user2-register").value = "";
    document.getElementById("password-register").value = "";

    clearError(document.getElementById("user1-register"));
    clearError(document.getElementById("user2-register"));
    clearError(document.getElementById("password-register"));
}
function checkUserExist(user1, user2) {
    var UserArray = JSON.parse(localStorage.getItem('user'));
    return UserArray.some(user => user.user1 === user1 || user.user2 === user2);
}
function addUser() {
    var UserArray = JSON.parse(localStorage.getItem('user'))
    var date = new Date();
    var currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var userAdd = { user1: document.querySelector("#user1-register").value, user2: document.querySelector("#user2-register").value, pass: document.querySelector("#password-register").value, username: document.querySelector("#username-register").value, datesignup: currentDate, right: 0 };
    if (!checkUserExist(userAdd.user1, userAdd.user2)) {
        UserArray.push(userAdd);
        window.onload = function () {
            alert("Bạn đã đăng ký thành công");
        };
        localStorage.setItem("user", JSON.stringify(UserArray));
        location.reload();
    }
    else {
        document.querySelector(".error-register").innerText = "Số điện thoại hoặc email đã tồn tại";
    }
}
function addAdmin() {
    var UserArray = JSON.parse(localStorage.getItem('user'))
    var date = new Date();
    var currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var userAdd = { user1: document.querySelector("#user1-register").value, user2: document.querySelector("#user2-register").value, pass: document.querySelector("#password-register").value, username: "ADMIN", datesignup: currentDate, right: 1 };
    if (!checkUserExist(userAdd.user1, userAdd.user2)) {
        UserArray.push(userAdd);
        window.onload = function () {
            alert("Bạn đã đăng ký thành công");
        };
        localStorage.setItem("user", JSON.stringify(UserArray));
        location.reload();
    }
    else {
        document.querySelector(".error-register").innerText = "Số điện thoại hoặc email đã tồn tại";
    }
}
function deleteuser(usernamedelete) {
    var UserArray = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < UserArray.length; i++) {
        if (UserArray[i].user1 == usernamedelete || UserArray[i].user2 == usernamedelete) {
            if (confirm('Bạn có muốn xóa tài khoản này?')) {
                UserArray.splice(i, 1);
                localStorage.setItem('user', JSON.stringify(UserArray));
                checkout.forEach(function(item){
                    if(item.userID==i){
                        item.items.forEach(function(index){
                            index.status=0;
                        })
                    }
                    else{
                        if(item.userID>i){
                            item.userID=item.userID-1;
                        }
                    }
                })
                // updateData();    q
                localStorage.setItem("checkout",JSON.stringify(checkout));
                return true
            }
        }
    }
    return false
}
function checkErrorDelete(userNeedDelete) {
    if (userNeedDelete !== "") {
        if (!deleteuser(userNeedDelete)) {
            document.querySelector(".error-delete").innerText = "Email hoặc số điện thoại không tồn tại";
        }
    }
    else {
        document.querySelector(".error-delete").innerText = "Nhập email hoặc số điện thoại cần xóa";
    }
}
// end------------------------------------------------------------------------------------- 
let productArr = JSON.parse(localStorage.getItem('productArr')); //Lay dữ liệu từ localStorage
tinhTongsp();
function InitProduct(productId, category, subcategory, img, name, price, description, sl,author) {
    this.productId = productId
    this.category = category
    this.subcategory = subcategory
    this.img = img
    this.name = name
    this.price = price
    this.description = description
    this.sl = sl;
    this.author=author;
}

//In ra danh sach san pham
function showallQLSP(content) { //Đây là hàm hiện ra dssp nè
    var s = "";
    if (content == "1") {
        for (i = 0; i < productArr.length; i++) {
            s += `<div class="container-content">
            <div class="id">${productArr[i].productId}</div>
            <div class="image">
                <img src="${productArr[i].img}" alt="">
            </div>
            <div class="ten-sp">${productArr[i].name}</div>
            <div class="so-luong">${productArr[i].sl}
            </div>
            <div class="gia-sp">${productArr[i].price}</div>
            <div class="modify"><i class="ti-pencil-alt icon-modify" onclick="getValueModalModify(${productArr[i].productId})"></i> </div>
            <div class="delette"><i class="fa-sharp fa-regular fa-circle-xmark icon-close" onclick="deleteProduct(${i})"></i> </div>
        </div>`;
        }
        document.getElementById("slide-content").innerHTML = s;
    }
    else {
        for (i = 0; i < productArr.length; i++) {
            var tmp = productArr[i].category;
            if (content == tmp) {
                s += `<div class="container-content">
            <div class="id">${productArr[i].productId}</div>
            <div class="image">
                <img src="${productArr[i].img}" alt="">
            </div>
            <div class="ten-sp">${productArr[i].name}</div>
            <div class="so-luong">${productArr[i].sl}
            </div>
            <div class="gia-sp">${productArr[i].price}</div>
            <div class="modify"><i class="ti-pencil-alt icon-modify" onclick="getValueModalModify(${productArr[i].productId})"></i> </div>
            <div class="delette"><i class="fa-sharp fa-regular fa-circle-xmark icon-close" onclick="deleteProduct(${i})"></i> </div>
        </div>`;
            }
            document.getElementById("slide-content").innerHTML = s;
        }
    }
    // BtnAdd = document.getElementById("button-add-js");
}
//Thêm sản phẩm
// var BtnAdd;

function showModalAddModify() { //Hiện ra modal thêm sửa sp
    var getModalAdd = document.getElementsByClassName("modal-add-product");
    getModalAdd[0].style.display = "block";
}
function addProduct(e) { //Hàm thêm sản phẩm
    var valueName = document.getElementById("product-name-js");
    var valueGia = document.getElementById("product-price-js");
    if (!isValidMoneyFormat(valueGia.value)) {
        // Nếu giá trị không hợp lệ, hiển thị thông báo hoặc thực hiện các xử lý khác
        alert("Giá tiền không hợp lệ. Vui lòng nhập lại theo định dạng đúng.");
        return;
    }
    var valueDetails = document.getElementById("product-details-js");
    var fileInput = document.getElementById("inputfile")
    var valueSL = document.getElementById("product-sl-js");
    var valueSelect = document.getElementById("select-category");
    var valueTacgia=document.getElementById("product-tacgia-js");
    var tmp = '/' + valueSelect.value;
    var valueID = productArr.length + 1;
    if (valueID < 10) {
        valueID = "0" + valueID;
    }
    var contentAdd = new InitProduct(valueID.toString(), valueSelect.value, "", `./image${tmp}/${fileInput.files[0].name}`, valueName.value, valueGia.value, valueDetails.value, valueSL.value,valueTacgia.value)
    productArr.push(contentAdd);
    alert("Thêm sản phẩm thành công!")
    closeModal()
    showallQLSP(1);
    localStorage.setItem('productArr', JSON.stringify(productArr));
}
function isValidMoneyFormat(value) {
    // Kiểm tra xem giá trị có đúng định dạng giá tiền không
    // Định dạng phải là số và mỗi ba chữ số có thể có một dấu chấm

    // Sử dụng regex để kiểm tra định dạng
    const moneyFormatRegex = /^\d{1,3}(\.\d{3})*$/;

    return moneyFormatRegex.test(value);
}
function modifyProduct(e) {
    //thêm số 0 vào trước id nếu id < 10
    function addLeadingZeros(num, size) {
        let s = String(num);
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    }

    productArr.forEach(function count(index) {
        let eString = addLeadingZeros(e, 2)
        if (index.productId === eString) {
            var valueName = document.getElementById("product-name-js");
            var valueGia = document.getElementById("product-price-js");
            if (!isValidMoneyFormat(valueGia.value)) {
                // Nếu giá trị không hợp lệ, hiển thị thông báo hoặc thực hiện các xử lý khác
                alert("Giá tiền không hợp lệ. Vui lòng nhập lại theo định dạng đúng.");
                return;
            }
            var valueDetails = document.getElementById("product-details-js");
            var fileInput = document.getElementById("inputfile")
            var valueSelect = document.getElementById("select-category")
            var valueTacgia=document.getElementById("product-tacgia-js");
            var tmp = '/' + valueSelect.value;
            index.name = valueName.value;
            index.productId = eString;
            index.price = valueGia.value;
            index.description = valueDetails.value;
            index.author=valueTacgia.value;
            index.img = `./image${tmp}/${fileInput.files[0].name}`
            closeModal()
            showallQLSP(1)
        }
    });
    localStorage.setItem('productArr', JSON.stringify(productArr));//xxx
}
function Preview() { //Hàm lấy dữ liệu từ modal và hiện ra tại modal đó
    var valueName = document.getElementById("product-name-js");
    var valueGia = document.getElementById("product-price-js");
    var valueDetails = document.getElementById("product-details-js");
    var fileInput = document.getElementById("inputfile")
    var valueSelect = document.getElementById("select-category")
    var valueTacgia=document.getElementById("product-tacgia-js");
    var s = "";
    var tmp = '/' + valueSelect.value;
    if (fileInput.files && fileInput.files[0]) {
        s = `<div class="image">
        <img src="./image${tmp}/${fileInput.files[0].name}" alt="Không lấy được ảnh,kiểm tra lại thể loại">
        </div>
        <div class="ten-sp">${valueName.value}</div>
        <div class="gia-sp">${valueGia.value}</div>
        <div class="chi-tiet">${valueDetails.value}</div>`;
        document.getElementById("show-product-tmp").innerHTML = s;
    }
    else {
        s = `<div class="image">
        <img src="#" alt="">
        </div>
        <div class="ten-sp">${valueName.value}</div>
        <div class="gia-sp">${valueGia.value}</div>
        <div class="chi-tiet">${valueDetails.value}</div>`;
        document.getElementById("show-product-tmp").innerHTML = s;
    }
}
function showBtnAdd() {
    showModalAddModify();
    var s = "";
    s = '<input type="submit" value="Lưu" onclick="addProduct()">'
        + '<div class="close-modal" onclick="closeModal()">Thoát</div>'
        + '<input type="reset" value="Reset" onclick="resetModal()">';
    document.getElementById("getShowBtn").innerHTML = s;
}
function showBtnModify(e) {
    showModalAddModify();
    var s = "";
    s = `<input type="submit" value="Lưu" onclick="modifyProduct(${e})">
    <div class="close-modal" onclick="closeModal()">Thoát</div>   
    <input type="reset" value="Reset" onclick="resetModal()">`;
    document.getElementById("getShowBtn").innerHTML = s;
}
function resetModal() { //Làm mới bản xem trước trong modal thêm sửa sp
    document.getElementById("show-product-tmp").innerHTML = " ";
};
function closeModal() { //Đóng modal thêm sửa sp
    var getModalAdd = document.getElementsByClassName("modal-add-product");
    getModalAdd[0].style.display = "none";
};
function getValueModalModify(e) { //Hàm lấy dữ liệu từ producArr và gán lại cho modal
    var s = "";
    productArr.forEach(function count(index) {
        if (e == index.productId) {
            showBtnModify(e);
            // showModalAddModify()
            //Giữ select cũ khi không thay đổi
            var selectElement = document.getElementById("select-category");
            var valueName = document.getElementById("product-name-js");
            var valuePrice = document.getElementById("product-price-js")
            var valueDetails = document.getElementById("product-details-js")
            var valueSL = document.getElementById("product-sl-js");
            var valueTacgia=document.getElementById("product-tacgia-js");
            for (var i = 0; i < selectElement.options.length; i++) {
                if (selectElement.options[i].value === index.category) {
                    selectElement.selectedIndex = i;//Gán thể loại sách
                    valueName.value = index.name; //Gán tên
                    valuePrice.value = index.price;
                    valueDetails.value = index.description; //Gán chi tiết sản phẩm
                    valueSL.value = index.sl;
                    valueTacgia.value=index.author;
                    break;
                }
            }
            //Giữ ảnh cũ khi không thay đổi
            var defaultImage = index.img.split("/");
            var fileInput = document.getElementById("inputfile");
            // Tạo một đối tượng File trực tiếp
            let file = new File([null], defaultImage[3], { type: "image/jpeg", lastModified: new Date().getTime() }, 'utf-8');
            // Tạo một đối tượng FileList chứa file
            let fileList = new DataTransfer();
            fileList.items.add(file);
            // Gán fileList vào thuộc tính files của input
            fileInput.files = fileList.files;
        }
        //
    })
    Preview(); //Hiện ra bản xem thử sản phẩm
}
var getContainerAdd = document.getElementById("testt");//Lấy DOM của form trong modal thêm sửa
getContainerAdd.addEventListener("keydown", function (event) {//Chặn submit bằng phím enter
    if (event.key == "Enter") {
        event.preventDefault();
    }
})
getContainerAdd.addEventListener("submit", function (event) {//Chặn reload trang khi nhấn submit
    event.preventDefault();
})
//Xóa danh sách sản phẩm
function deleteProduct(e) {
    var choice = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")
    if (choice) {
        productArr.splice(e, 1);
        showallQLSP(1);
    }
    localStorage.setItem('productArr', JSON.stringify(productArr));

}
//Thêm chức năng thống kê doanh thu

getcontainers[3].addEventListener("click", showThongKe);
function showThongKe() {
    // alert("cmm")
    var s = "";
    s = '<div class="content-doanhthu">'
        + '<p>báo cáo doanh thu</p>'
        + '<label for="1">từ ngày:</label>'
        + '<input type="date" name="1" id="from-date">'
        + '<label for="2">đến ngày:</label>'
        + '<input type="date" id="to-date" getTimeDT>'
        + '<button onclick="getTimeDT()"><i class="ti-filter"></i> Lọc </button>'
        + '<div id="tong-danh-thu"> Tổng doanh thu:<p id="showDoanhThu"></p></div>'
        + '<div class="header-right-content top-menu">'
        + '<div class="id-kh" style="border: none;">id kh</div>'
        + '<div class="ten-sp doanhthu">Tên Sản Phẩm</div>'
        + '<div class="so-luong">Số Lượng</div>'
        + '<div class="gia-sp-dt">Đơn giá</div>'
        + '<div class="gia-sp-dt">Thành tiền</div>'
        + '<div>Ngày thanh toán</div>'
        + '</div>'
        + '</div>'
        + '<div id="table-doanhthu">'
        + '</div>'
    document.getElementById("right-content").innerHTML = s;
    timeDefautf();
}
var valueToTime
var valueFromTime
function timeDefautf() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    var year = currentDate.getFullYear();
    valueToTime = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    valueFromTime = year + '-' + (month < 10 ? '0' : '') + (month - 1) + '-' + (day < 10 ? '0' : '') + day;
    document.getElementById("to-date").value = valueToTime;
    document.getElementById("from-date").value = valueFromTime;
    getTimeDT()
}
function getTimeDT() {
    valueToTime = document.getElementById("to-date").value;
    valueFromTime = document.getElementById("from-date").value;
    console.log(valueToTime);
    console.log(valueFromTime);
    showItemThongke();
}
function showItemThongke() {
    var doanhthu = 0;
    var s = "";
    if(checkout==null){
        return -1;
    }
    checkout.forEach(function (item,i) {
        if (item.checkoutTime >= valueFromTime && item.checkoutTime <= valueToTime) {
            s += `<div class="container-doanhthu">
                <div class="show-idkh id-kh"> 
                <div class="cmm">${item.userID}</div>
                <div class="cmm">${i}</div>
                </div>
                <div class="container-thongke-id">`
            item.items.forEach(function (index) {
                var thanhtien = index.price * index.quantity + '.000';
                doanhthu += index.price * index.quantity;
                s += `<div class="item-thongke-id">
                <div class="ten-sp-dt">${index.name}</div>
                <div class="so-luong">${index.quantity}</div>
                <div class="gia-sp-dt">${index.price}</div>
                <div class="gia-sp-dt">${thanhtien}</div>
                <div> ${item.checkoutTime}</div>
                </div>
                `
            });
            s += '</div></div>'
        }
    });
    doanhthu = (doanhthu*1000).toLocaleString('de-DE')+ ' VNĐ';
    document.getElementById("showDoanhThu").innerHTML = doanhthu;
    document.getElementById("table-doanhthu").innerHTML = s;
}
//Quản lý đơn hàng
function timeDefautfDonHang() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    var year = currentDate.getFullYear();
    valueToTime = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    valueFromTime = year + '-' + (month < 10 ? '0' : '') + (month - 1) + '-' + (day < 10 ? '0' : '') + day;
    document.getElementById("to-date-donhang").value = valueToTime;
    document.getElementById("from-date-donhang").value = valueFromTime;
    getTimeDonHang()
}
function getTimeDonHang() {
    valueToTime = document.getElementById("to-date-donhang").value;
    valueFromTime = document.getElementById("from-date-donhang").value;
    console.log(valueToTime);
    console.log(valueFromTime);
    showItemDonHang();
}
getcontainers[4].addEventListener("click",function (){
    var s = "";
    s = '<div class="content-doanhthu">'
        + '<p>Quản lý đơn hàng</p>'
        + '<label for="1">từ ngày:</label>'
        + '<input type="date" name="1" id="from-date-donhang">'
        + '<label for="2">đến ngày:</label>'
        + '<input type="date" id="to-date-donhang" getTimeDT>'
        + '<button onclick="getTimeDonHang()"><i class="ti-filter"></i> Lọc </button>'
        + '<div class="header-right-content top-menu">'
        + '<div class="id-kh-dh" style="border: none;">Mã đơn hàng</div>'
        + '<div class="ten-sp-hd  doanhthu">Tên Sản Phẩm</div>'
        + '<div class="so-luong">Số Lượng</div>'
        + '<div class="gia-sp-dt">Đơn giá</div>'
        +'<div>Ngày thanh toán</div>'
        + '</div>'
        + '</div>'
        + '<div id="table-doanhthu">'
        + '</div>'
    document.getElementById("right-content").innerHTML = s;
    timeDefautfDonHang();
})
function showItemDonHang(){
    var s = "";
    if(checkout==null){
        return -1;
    }
    checkout.forEach(function (item,id) {
        if (item.checkoutTime >= valueFromTime && item.checkoutTime <= valueToTime) {
            s += `<div class="container-doanhthu">
                <div class="show-idkh id-kh">${id}
                </div>
                <div class="container-thongke-id">
                <div class="trang-thai">Trạng thái:
                <input type="checkbox" id="checkXL-${id}" value="1" onchange="daXuLyDH(${id})"> xử lý
                </div>`
            
            item.items.forEach(function (index) {
                s += `<div class="item-thongke-id">
                <div class="image">
                <img src="${index.img}" alt="#">
                </div>
                <div class="ten-sp-hd">${index.name}</div>
                <div class="so-luong">${index.quantity}</div>
                <div class="gia-sp-dt">${index.price}</div>
                <div> ${item.checkoutTime}</div>
                </div>
                `
            });
            s += `</div>
            
            </div>`
        }
    });
    document.getElementById("table-doanhthu").innerHTML = s;
    traValueCheck();
}
function traValueCheck(){
    checkout.forEach(function (item,index){
        var get=document.getElementById(`checkXL-${index}`);
        item.items.forEach(function (subItem){
            console.log(subItem.status)
            if(subItem.status==2){
                get.checked=true;
                var tmp=document.getElementsByClassName("trang-thai");
                tmp[index].style.color='red';
            }
            else {
                var tmp=document.getElementsByClassName("trang-thai");
                tmp[index].style.color='black';
                get.checked=false;
            }
        })
    })
}
function daXuLyDH(e) {
    console.log(e)
    var valuecheck = document.getElementById(`checkXL-${e}`);
    if (valuecheck.checked) {
        checkout.forEach(function (item,id) {
            item.items.forEach(function (index){
                if(id==e){
                    console.log(id);
                    index.status=2;
                }
            })
            
        });
    } 
    else {
        checkout.forEach(function (item,id) {
            item.items.forEach(function (index){
                if(id==e){
                    index.status=1;
                }
            })
        });
    }
    localStorage.setItem('checkout', JSON.stringify(checkout));
    traValueCheck();
}