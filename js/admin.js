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
function doi_mau_ds(getcontainer) {
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
getcontainers[0].addEventListener("click", showHome);

function tinhTongDT() {
    checkout.forEach(function (item) {
        item.items.forEach(function (index) {
            tongDoanhThu += index.quantity * index.price;
        })
    })
}
tinhTongDT();
function tinhTongUser() {
    return user.length;
}
tongDoanhThu = tongDoanhThu + '.000 VNĐ'
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
// Đoạn mã hoặc hàm bạn muốn thực hiện
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
// Đoạn mã hoặc hàm bạn muốn thực hiện
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

doi_mau_ds(getcontainers[0])
showHome();
//Show model
var getqlsp = document.getElementsByClassName("container");
getqlsp[1].addEventListener("click", function () {
    showQLSP()
})
const content = document.getElementById("right-content");
function showQLSP() {
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
        + '<input type="search" placeholder="Nhập sản phẩm muốn tìm kiếm" class="search-admin">'
        + '<button class="button-search">'
        + '<i class="ti-search item-search"></i>'
        + '</button>'
        + '</div>'
        + '<div class="add-item container-header-item" id="button-add-js" onclick="showModalAddReal()"><i class="fa-duotone fa-plus icon-plus"></i> Thêm mới</div>'
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
    showallQLSP("1");
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
                          <button type="" class="btn btn-close"><span>Trở lại</span></button>
                          <button type="" class="btn btn-default" id="btn-delete"><span>Xóa</span></button>
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
function InitProduct(productId, category, subcategory, img, name, price, description, sl) {
    this.productId = productId
    this.category = category
    this.subcategory = subcategory
    this.img = img
    this.name = name
    this.price = price
    this.description = description
    this.sl = sl;
}
// let productArr = [
//     new InitProduct("01", "vanhoc", "", "./image/vanhoc/2f8f1ac443b9f472b5b568738f4584df.jpg.webp", "Hai mươi tư con mắt ", "25.000", "Hai mươi tư con mắt là câu chuyện xoay quanh tuổi trẻ của cô giáo Ooishi đến khi cô già đi và trở lại ngôi trường nơi cô từng gắn bó và tâm huyết từ ngày đầu đến dạy lớp học đầu tiên có 12 học trò. Không gian vùng biển đảo Seto yên bình cùng người dân lao động chăm chỉ và những đứa trẻ thuần khiết trong thoáng chốc bị xáo trộn bởi sự hiện diện của cô giáo - một modern girl theo lời người dân bàn tán. Cô giáo được tụi trẻ đặt cho biệt danh Hòn Đá Nhỏ đã nhanh chóng chiếm được tình cảm của người dân nhờ lòng nhiệt thành và tình yêu thương cao cả dành cho những đứa trẻ phải sống trong hoàn cảnh thiếu thốn. Cuốn sách mang đến giá trị hiện thực và nhân văn sâu sắc về tình cô trò thiêng liêng, trở thành một trong những tiểu thuyết về đề tài phản chiến hay nhất của văn học Nhật.","12"),
//     new InitProduct("02", "vanhoc", "", "./image/vanhoc/780acb45d807395a6c58968f48780215.jpg.webp", "Ngẩng đầu mà đi", "67.000", "Tiến về phía trước đi, thế giới này không quan tâm đến sự yếu đuối của bạn đâu!\nBạn ăn cơm một mình, mỗi lần đều ăn ở cùng một quán, gọi cùng một món ăn.\n Bạn dạo phố một mình, bần thần nhìn một bộ quần áo trong tủ kính rất lâu, nhưng cuối cùng không thử.\nBạn một mình âm thầm làm việc đến bán mạng, bụng đói thì ăn nốt mẩu bánh mì, uống nốt cốc sữa sót lại từ buổi sáng, để rồi sau đó lại một mình dẫm lên cái bóng của chính mình để về nhà.\nNếu bạn nghĩ bản thân mình như vậy là tội nghiệp, là mệt mỏi, là đáng thương đến bật khóc… thì hãy dừng lại và suy nghĩ thử xem.\nỞ cái tuổi vẫn còn gập ghềnh chưa trải đủ sự đời, không nhà, không xe, đi làm vẫn phải chen chúc để kịp chuyến xe bus chật chội, làm việc vẫn phải nhìn sắc mặt của người khác, nói cười chẳng thể theo ý mình… Và tất cả những gì bạn làm được chỉ là khóc thôi sao?!\nThế giới này vốn sẽ không vì nỗi buồn của bất kỳ ai mà dừng lại.\nCuộc sống cũng sẽ không vì ai rơi nước mắt mà sẽ đối xử nhẹ nhàng hơn.\nĐừng cúi đầu nhìn xuống cái bóng dưới chân mình nữa, hãy thử ngẩng đầu lên mà xem!\nBạn ăn cơm một mình … chính là để đợi một người thật lòng muốn dẫn bạn đi ăn mỗi ngày.\nBạn không thể mua những thứ mình thích ngay lúc này… nhưng không có nghĩa là sau này cũng vậy.\nBạn làm việc đến bán mạng… nhưng rồi sẽ có một ngày mọi nỗ lực của bạn được đền đáp mà thôi.\nĐúng vậy, chỉ cần tiếp tục ngẩng đầu kiêu hãnh bước đi, thì trên đời này chẳng có gì có thể làm khó được bạn mãi.\nVẫn là chàng trai Lư Tư Hạo cùng giọng văn nhẹ nhàng nhưng sâu lắng đã chinh phục hàng triệu trái tim trong những tác phẩm trước, “Đừng cúi đầu mà khóc, hãy ngẩng đầu mà đi” dù chẳng thể khiến con đường bạn đang đi bớt gập ghềnh hơn, nhưng sẽ là cuốn sách tuyệt nhất để dẫn đường cho tuổi trẻ của bạn và tôi, những tuổi trẻ đang chênh vênh lạc lối chẳng biết đi về đâu.","17"),
//     new InitProduct("03", "vanhoc", "", "./image/vanhoc/b4495afbfb1db7b8702345dc9ad0ab39.jpg.webp", "Dế mèn phiêu lưu ký", "67.000", "“Biết ước mơ và hành động, Dế mèn của tôi chắc chắn là bạn trung thủy với thế hệ tuổi thơ của bạn.” - Tô Hoài\n“Một con dế đã từ tay ông thả ra chu du thế giới tìm những điều tốt đẹp cho loài người. Và con dế ấy đã mang tên tuổi ông đi cùng trên những chặng đường phiêu lưu đến với cộng đồng những con vật trong văn học thế giới, đến với những xứ sở thiên nhiên và văn hóa của các quốc gia khác. Dế Mèn Tô Hoài đã lại sinh ra Tô Hoài Dế Mèn, một nhà văn trẻ mãi không già trong văn chương...” - Nhà phê bình Phạm Xuân Nguyên.\n“Ông rất hiểu tư duy trẻ thơ, kể với chúng theo cách nghĩ của chúng, lí giải sự vật theo lô gích của trẻ. Hơn thế, với biệt tài miêu tả loài vật, Tô Hoài dựng lên một thế giới gần gũi với trẻ thơ. Khi cần, ông biết đem vào chất du ký khiến cho độc giả nhỏ tuổi vừa hồi hộp theo dõi, vừa thích thú khám phá.” - TS. Nguyễn Đăng Điệp.","13"),
//     new InitProduct("04", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/8c96ae330e030fd8f0a71123b1cf45ff.jpg.webp", "Tam quốc diễn nghĩa 1", "64.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích.","12"),
//     new InitProduct("05", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/7529808cf692ee843c7f98d36099f1eb.jpg.webp", "Tam quốc diễn nghĩa 2", "69.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích.","20"),
//     new InitProduct("06", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/a3410287170ec8aff2dbee52d33bae72.jpg.webp", "Tam quốc diễn nghĩa 3", "69.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích.,","23"),
//     new InitProduct("07", "amthuc-nauan", "", "./image/amthuc-nauan/3a4be908133c374e0de3555a3580fc04.jpg.webp", "Khởi sự ăn chay", "89.000", "“Khởi sự ăn chay” không chỉ là một cuốn sách hướng dẫn nấu ăn, càng không phải đơn thuần là tuyển tập các món chay. Cuốn sách là sự dẫn dắt đầy cảm hứng, sáng tỏ và khoa học dành cho bạn, từ tác giả Đức Nguyễn - một người ăn chay văn minh và khoẻ mạnh. Bạn có thể tìm thấy trong cuốn sách này lời giải đáp cho những băn khoăn cơ bản nhất khi bắt đầu ăn chay. Bạn cũng có thể ồ lên thích thú khi phát hiện ra ăn chay quả là một nghệ thuật, thứ nghệ thuật giờ đây được sáng tỏ dưới góc nhìn khoa học dinh dưỡng. Và rồi bạn háo hứng khám phá những món chay ngon, lành, đẹp như một bài thơ. Bạn sẽ thấy hành trình ăn chay thật vui và thú vị!\n“Đó là hành trình tìm đến sự cân bằng và bình yên giữa ẩm thực và cuộc sống, giữa những lựa chọn cá nhân đến những mục tiêu bền vững hơn cho chính bạn, cho môi trường hay cho Trái Đất. Dù thế nào đi nữa, hãy thử lần giở bất cứ trang sách nào, hẳn bạn sẽ đồng ý với tôi, rằng mỗi trang sách đều là một pho tâm huyết của tác giả - với trọn vẹn tấm lòng, tri thức và tình yêu của anh ấy, là dành cho bạn!” - Food Blogger Phan Anh (Esheep)\n“Trái với “Về Nhà Ăn Cơm” là tập hợp những món ăn chay thuần Việt đậm chất mâm cơm gia đình thì “Khởi Sự Ăn Chay” tập trung vào các món chay đơn giản, nguyên liệu dễ tìm và thời gian nấu nhanh gọn giúp những người mới tìm hiểu về việc ăn chay cũng có thể dễ dàng vào bếp chế biến chỉ trong tích tắc. Đặc biệt hơn nữa Đức áp dụng đúng nguyên lý 14 ngày để xây dựng một thói quen mới để đưa ra thực đơn giúp độc giả làm quen được với việc ăn chay lành mạnh hơn chỉ trong hai tuần. Cuốn sách thực sự phù hợp cho những ai đang tìm hiểu về ăn chay, đang bối rối không nên bắt đầu từ đâu hay chỉ đơn giản muốn bổ sung cho thực đơn hằng ngày những món ăn lành mạnh.” - Nguyễn Quỳnh Nga - tác giả cuốn sách Best Seller “Eat Clean - Thực Đơn 14 Ngày Thanh Lọc Cơ Thể Và Giảm Cân”.","5"),
//     new InitProduct("08", "amthuc-nauan", "", "./image/amthuc-nauan/7b686c6565d66e41c0c8333a0a6d60a7.jpg.webp", "Những món chay ngon và dinh dưỡng", "75.000", "Giờ đây nhu cầu ăn chay là một phần không thể thiếu trong cuộc sống của nhiều người. Hàng tháng, vào những ngày rằm hay lễ lớn, việc ăn chay càng trở nên phổ biến. Trong những dịp như vậy, chúng ta có thể tổ chức tiệc chay với những món ăn được chế biến đa dạng, cầu kỳ và nhiều dinh dưỡng hơn. Món ăn chay hiện nay không đơn thuần là những món ăn đơn giản với những nguyên liệu chủ yếu từ rau củ, đậu nành, đậu hũ lặp đi lặp lại như trước nữa. Với những nguyên liệu mới, phong phú và cách chế biến đa dạng, món chay đã trở thành món ăn cao cấp, sang trọng với hương vị mới mẻ và được trình bày đẹp mắt.\nCuốn sách này giới thiệu với các bạn các món chay mới, ngon và dễ làm. Bạn có thể chế biến các món này cho các bữa tiệc chay, buffet chay hay làm món ăn chơi đều thích hợp.","2")
// ]


//In ra danh sach san pham
function showallQLSP(content) {
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
            <div class="modify"><i class="ti-pencil-alt icon-modify" onclick="fcModify(${productArr[i].productId})"></i> </div>
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
            <div class="modify"><i class="ti-pencil-alt icon-modify" onclick="fcModify(${productArr[i].productId})"></i> </div>
            <div class="delette"><i class="fa-sharp fa-regular fa-circle-xmark icon-close" onclick="deleteProduct(${i})"></i> </div>
        </div>`;
            }
            document.getElementById("slide-content").innerHTML = s;
        }
    }
    BtnAdd = document.getElementById("button-add-js");
}
//Thêm sản phẩm
var BtnAdd;

function showModalAdd() {
    var getModalAdd = document.getElementsByClassName("modal-add-product");
    getModalAdd[0].style.display = "block";
}
function addProduct(e) {
    var valueName = document.getElementById("product-name-js");
    var valueGia = document.getElementById("product-price-js");
    var valueDetails = document.getElementById("product-details-js");
    var fileInput = document.getElementById("inputfile")
    var valueSL = document.getElementById("product-sl-js");
    var valueSelect = document.getElementById("select-category")
    var tmp = '/' + valueSelect.value;
    var valueID = productArr.length + 1;
    if (valueID < 10) {
        valueID = "0" + valueID;
    }
    var contentAdd = new InitProduct(valueID, valueSelect, "", `./image${tmp}/${fileInput.files[0].name}`, valueName.value, valueGia.value, valueDetails.value, valueSL.value)
    productArr.push(contentAdd);
    alert("them thanh cong")
    closeModal()
    showallQLSP(1);
    localStorage.setItem('productArr', JSON.stringify(productArr));//xxx

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
            var valueDetails = document.getElementById("product-details-js");
            var fileInput = document.getElementById("inputfile")
            var valueSelect = document.getElementById("select-category")
            var tmp = '/' + valueSelect.value;
            index.name = valueName.value;
            index.productId = eString;
            index.price = valueGia.value;
            index.description = valueDetails.value;
            index.img = `./image${tmp}/${fileInput.files[0].name}`
            closeModal()
            showallQLSP(1)
        }
    });
    localStorage.setItem('productArr', JSON.stringify(productArr));//xxx
}
function Preview() {
    var valueName = document.getElementById("product-name-js");
    var valueGia = document.getElementById("product-price-js");
    var valueDetails = document.getElementById("product-details-js");
    var fileInput = document.getElementById("inputfile")
    var valueSelect = document.getElementById("select-category")
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
function showModalAddReal() {
    showModalAdd();
    var s = "";
    s = '<input type="submit" value="Lưu" onclick="addProduct()">'
        + '<div class="close-modal" onclick="closeModal()">Thoát</div>'
        + '<input type="reset" value="Reset" onclick="resetModal()">';
    document.getElementById("getShowBtn").innerHTML = s;
}
function showModalModify(e) {
    showModalAdd();
    var s = "";
    s = `<input type="submit" value="Lưu" onclick="modifyProduct(${e})">
    <div class="close-modal" onclick="closeModal()">Thoát</div>   
    <input type="reset" value="Reset" onclick="resetModal()">`;
    document.getElementById("getShowBtn").innerHTML = s;
}
function resetModal() {
    document.getElementById("show-product-tmp").innerHTML = " ";
};
function closeModal() {
    var getModalAdd = document.getElementsByClassName("modal-add-product");
    getModalAdd[0].style.display = "none";
};
function fcModify(e) {
    var s = "";
    productArr.forEach(function count(index) {
        if (e == index.productId) {
            showModalModify(e);
            // showModalAdd()
            //Giữ select cũ khi không thay đổi
            var selectElement = document.getElementById("select-category");
            var valueName = document.getElementById("product-name-js");
            var valuePrice = document.getElementById("product-price-js")
            var valueDetails = document.getElementById("product-details-js")
            var valueSL = document.getElementById("product-sl-js");
            for (var i = 0; i < selectElement.options.length; i++) {
                if (selectElement.options[i].value === index.category) {
                    selectElement.selectedIndex = i;//Gán thể loại sách
                    valueName.value = index.name; //Gán tên
                    valuePrice.value = index.price;
                    valueDetails.value = index.description; //Gán chi tiết sản phẩm
                    valueSL.value = index.sl;
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
    Preview();
}
var BtnCloseAdd;
var BtnReset = document.getElementById("reset-modal-add");
var getContainerAdd = document.getElementById("testt");
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
    localStorage.setItem('productArr', JSON.stringify(productArr));//

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
        + '<div id="tong-danh-thu"> Tổng doanh thu:<p id="showDoanhThu">123.00</p></div>'
        + '<div class="header-right-content top-menu">'
        + '<div class="id-kh" style="border: none;">id khách hàng</div>'
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
    checkout.forEach(function (item) {
        if (item.checkoutTime >= valueFromTime && item.checkoutTime <= valueToTime) {
            s += `<div class="container-doanhthu">
                <div class="show-idkh id-kh">${item.userID}
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
    doanhthu = doanhthu + '.000 VNĐ';
    document.getElementById("showDoanhThu").innerHTML = doanhthu;
    document.getElementById("table-doanhthu").innerHTML = s;
}



