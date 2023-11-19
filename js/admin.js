// Đổi màu khi nhấn vào navigation
var getcontainers=document.querySelectorAll(".container");
for (const getcontainer of getcontainers) {
    getcontainer.addEventListener("click", function () {
        doi_mau_ds(getcontainer);
    });
}
getcontainers[1].addEventListener("click",function (){
    
})
function doi_mau_ds(getcontainer) {
    for(const getcontainer of getcontainers){
        getcontainer.style.color= "#333333";
    }
    getcontainer.style.color = "#428BCA";
}
//Show trang chu
var tmp;
var updateTime=0;
getcontainers[0].addEventListener("click",showHome);
function showHome(){
    var s="";
    s='<div class="home-page">'
    +'<div class="container-home">'
    +'<p>Tổng sản phẩm:</p>'
    +'<div class="total-product">123</div>'
    +'<div class="time-ago" ><i class="ti-reload" id="reload-time" onclick="startTime()"></i> <div id="innerTime">Cập nhật sau 0 phút trước</div></div>'
    +'</div>'
    +'<div class="container-home so2">'
    +'<p>Tổng doanh thu:</p>'
    +'<div class="total-product">123.000</div>'
    +'<div class="time-ago" id="innerTime"><i class="ti-reload" id="reload-time"></i> Cập nhật sau 5 phút trước</div></div>'
    +'<div class="container-home so3">'
    +'<p>Tổng số tài khoản đăng ký:</p>'
    +'<div class="total-product">12</div>'
    +'<div class="time-ago" id="innerTime"><i class="ti-reload" id="reload-time"></i> Cập nhật sau 5 phút trước</div>'
    +'</div>'
    +'</div>';
    document.getElementById("right-content").innerHTML=s;
    console.log(updateTime);
    document.getElementById("innerTime").innerHTML=`<div id="innerTime">Cập nhật sau ${updateTime} giây trước </div>`;
}

function startTime(){
    updateTime=0;
    document.getElementById("innerTime").innerHTML=`<div id="innerTime">Cập nhật sau ${updateTime} phút trước </div>`;
}
//Điếm thời gian sau click reload tổng sản phẩm
setInterval(function() {
    // Đoạn mã hoặc hàm bạn muốn thực hiện
    updateTime+=5;
    if(updateTime<60){
        console.log(updateTime);
        document.getElementById("innerTime").innerHTML=`<div id="innerTime">Cập nhật sau ${updateTime} giây trước </div>`;
    }
    else if(updateTime / 60 >=1 && updateTime / 60 <=60){
        document.getElementById("innerTime").innerHTML=`<div id="innerTime">Cập nhật sau ${(updateTime/60).toFixed()} phút trước </div>`;
    }
    if(updateTime/3200 >=1){
        document.getElementById("innerTime").innerHTML=`<div id="innerTime">Cập nhật sau ${(updateTime/3200).toFixed()} giờ trước </div>`;
    }
  }, 5000);
doi_mau_ds(getcontainers[0])
showHome();
//Show model

var getqlsp=document.getElementsByClassName("container");
    getqlsp[1].addEventListener("click",function (){
        showQLSP()
    })
const content=document.getElementById("right-content");
function showQLSP(){
    var s="";
    s='<div class="header-right-content">'
            +'<div class="container-header-item"><select name="" id="" onchange="showallQLSP(this.value)">'
                +'<option value="1">Xem tất cả sản phẩm</option>'
                +'<option value="vanhoc">Văn học</option>'
                +'<option value="amthuc">Ẩm thực</option>'
            +'</select>'
            +'</div>'
            +'<div class="add-item container-header-item"><i class="fa-duotone fa-plus icon-plus"></i> Thêm mới</div>'
        +'</div>'
        +'<div class="top-menu">'
                    +'<div class="id">ID</div>'
                    +'<div class="image">Ảnh</div>'
                    +'<div class="ten-sp">Tên Sản Phẩm</div>'
                    +'<div class="so-luong">Số Lượng</div>'
                    +'<div class="gia-sp">Giá Sản Phẩm</div>'
                    +'<div class="modify">Chỉnh Sửa</div>'
                    +'<div class="delette">Xóa</div>'
                +'</div>'
                +'<div id="slide-content">'
                +'</div>';
    content.innerHTML=s;
    showallQLSP("1");
}
let productArr=JSON.parse(localStorage.getItem('productArr'));
function InitProduct(productId, category, subcategory, img, name, price, description,soLuong) {
    this.productId = productId
    this.category = category
    this.subcategory = subcategory
    this.img = img
    this.name = name
    this.price = price
    this.description = description
    this.soLuong=soLuong;
}
// let productArr = [
//     new InitProduct("01", "vanhoc", "", "./image/vanhoc/2f8f1ac443b9f472b5b568738f4584df.jpg.webp", "Hai mươi tư con mắt ", "25.000", "Hai mươi tư con mắt là câu chuyện xoay quanh tuổi trẻ của cô giáo Ooishi đến khi cô già đi và trở lại ngôi trường nơi cô từng gắn bó và tâm huyết từ ngày đầu đến dạy lớp học đầu tiên có 12 học trò. Không gian vùng biển đảo Seto yên bình cùng người dân lao động chăm chỉ và những đứa trẻ thuần khiết trong thoáng chốc bị xáo trộn bởi sự hiện diện của cô giáo - một modern girl theo lời người dân bàn tán. Cô giáo được tụi trẻ đặt cho biệt danh Hòn Đá Nhỏ đã nhanh chóng chiếm được tình cảm của người dân nhờ lòng nhiệt thành và tình yêu thương cao cả dành cho những đứa trẻ phải sống trong hoàn cảnh thiếu thốn. Cuốn sách mang đến giá trị hiện thực và nhân văn sâu sắc về tình cô trò thiêng liêng, trở thành một trong những tiểu thuyết về đề tài phản chiến hay nhất của văn học Nhật.","12"),
//     new InitProduct("02", "vanhoc", "", "./image/vanhoc/780acb45d807395a6c58968f48780215.jpg.webp", "Ngẩng đầu mà đi", "67.000", "Tiến về phía trước đi, thế giới này không quan tâm đến sự yếu đuối của bạn đâu!\nBạn ăn cơm một mình, mỗi lần đều ăn ở cùng một quán, gọi cùng một món ăn.\n Bạn dạo phố một mình, bần thần nhìn một bộ quần áo trong tủ kính rất lâu, nhưng cuối cùng không thử.\nBạn một mình âm thầm làm việc đến bán mạng, bụng đói thì ăn nốt mẩu bánh mì, uống nốt cốc sữa sót lại từ buổi sáng, để rồi sau đó lại một mình dẫm lên cái bóng của chính mình để về nhà.\nNếu bạn nghĩ bản thân mình như vậy là tội nghiệp, là mệt mỏi, là đáng thương đến bật khóc… thì hãy dừng lại và suy nghĩ thử xem.\nỞ cái tuổi vẫn còn gập ghềnh chưa trải đủ sự đời, không nhà, không xe, đi làm vẫn phải chen chúc để kịp chuyến xe bus chật chội, làm việc vẫn phải nhìn sắc mặt của người khác, nói cười chẳng thể theo ý mình… Và tất cả những gì bạn làm được chỉ là khóc thôi sao?!\nThế giới này vốn sẽ không vì nỗi buồn của bất kỳ ai mà dừng lại.\nCuộc sống cũng sẽ không vì ai rơi nước mắt mà sẽ đối xử nhẹ nhàng hơn.\nĐừng cúi đầu nhìn xuống cái bóng dưới chân mình nữa, hãy thử ngẩng đầu lên mà xem!\nBạn ăn cơm một mình … chính là để đợi một người thật lòng muốn dẫn bạn đi ăn mỗi ngày.\nBạn không thể mua những thứ mình thích ngay lúc này… nhưng không có nghĩa là sau này cũng vậy.\nBạn làm việc đến bán mạng… nhưng rồi sẽ có một ngày mọi nỗ lực của bạn được đền đáp mà thôi.\nĐúng vậy, chỉ cần tiếp tục ngẩng đầu kiêu hãnh bước đi, thì trên đời này chẳng có gì có thể làm khó được bạn mãi.\nVẫn là chàng trai Lư Tư Hạo cùng giọng văn nhẹ nhàng nhưng sâu lắng đã chinh phục hàng triệu trái tim trong những tác phẩm trước, “Đừng cúi đầu mà khóc, hãy ngẩng đầu mà đi” dù chẳng thể khiến con đường bạn đang đi bớt gập ghềnh hơn, nhưng sẽ là cuốn sách tuyệt nhất để dẫn đường cho tuổi trẻ của bạn và tôi, những tuổi trẻ đang chênh vênh lạc lối chẳng biết đi về đâu.","17"),
//     new InitProduct("03", "vanhoc", "", "./image/vanhoc/b4495afbfb1db7b8702345dc9ad0ab39.jpg.webp", "Dế mèn phiêu lưu ký", "67.000", "“Biết ước mơ và hành động, Dế mèn của tôi chắc chắn là bạn trung thủy với thế hệ tuổi thơ của bạn.” - Tô Hoài\n“Một con dế đã từ tay ông thả ra chu du thế giới tìm những điều tốt đẹp cho loài người. Và con dế ấy đã mang tên tuổi ông đi cùng trên những chặng đường phiêu lưu đến với cộng đồng những con vật trong văn học thế giới, đến với những xứ sở thiên nhiên và văn hóa của các quốc gia khác. Dế Mèn Tô Hoài đã lại sinh ra Tô Hoài Dế Mèn, một nhà văn trẻ mãi không già trong văn chương...” - Nhà phê bình Phạm Xuân Nguyên.\n“Ông rất hiểu tư duy trẻ thơ, kể với chúng theo cách nghĩ của chúng, lí giải sự vật theo lô gích của trẻ. Hơn thế, với biệt tài miêu tả loài vật, Tô Hoài dựng lên một thế giới gần gũi với trẻ thơ. Khi cần, ông biết đem vào chất du ký khiến cho độc giả nhỏ tuổi vừa hồi hộp theo dõi, vừa thích thú khám phá.” - TS. Nguyễn Đăng Điệp.","13"),
//     new InitProduct("04", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/8c96ae330e030fd8f0a71123b1cf45ff.jpg.webp", "Tam quốc diễn nghĩa 1", "64.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích.","12"),
//     new InitProduct("05", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/7529808cf692ee843c7f98d36099f1eb.jpg.webp", "Tam quốc diễn nghĩa 2", "69.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích.","20"),
//     new InitProduct("06", "vanhoc", "", "./image/vanhoc/tamquocdiennghia/a3410287170ec8aff2dbee52d33bae72.jpg.webp", "Tam quốc diễn nghĩa 3", "69.000", "Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau.\nĐông A đã tái bản nhiều lần bản dịch Tam quốc diễn nghĩa của Phan Kế Bính, Bùi Kỷ hiệu đính, dựa trên ấn bản của nhà xuất bản Phổ thông năm 1959. Bộ Tam Quốc diễn nghĩa 6 tập có thêm nhiều điều mới mẻ về cả hình ảnh lẫn thông tin mà vẫn tôn trọng bản dịch đã được nhiều người yêu thích.,","23"),
//     new InitProduct("07", "amthuc", "", "./image/amthuc-nauan/3a4be908133c374e0de3555a3580fc04.jpg.webp", "Khởi sự ăn chay", "89.000", "“Khởi sự ăn chay” không chỉ là một cuốn sách hướng dẫn nấu ăn, càng không phải đơn thuần là tuyển tập các món chay. Cuốn sách là sự dẫn dắt đầy cảm hứng, sáng tỏ và khoa học dành cho bạn, từ tác giả Đức Nguyễn - một người ăn chay văn minh và khoẻ mạnh. Bạn có thể tìm thấy trong cuốn sách này lời giải đáp cho những băn khoăn cơ bản nhất khi bắt đầu ăn chay. Bạn cũng có thể ồ lên thích thú khi phát hiện ra ăn chay quả là một nghệ thuật, thứ nghệ thuật giờ đây được sáng tỏ dưới góc nhìn khoa học dinh dưỡng. Và rồi bạn háo hứng khám phá những món chay ngon, lành, đẹp như một bài thơ. Bạn sẽ thấy hành trình ăn chay thật vui và thú vị!\n“Đó là hành trình tìm đến sự cân bằng và bình yên giữa ẩm thực và cuộc sống, giữa những lựa chọn cá nhân đến những mục tiêu bền vững hơn cho chính bạn, cho môi trường hay cho Trái Đất. Dù thế nào đi nữa, hãy thử lần giở bất cứ trang sách nào, hẳn bạn sẽ đồng ý với tôi, rằng mỗi trang sách đều là một pho tâm huyết của tác giả - với trọn vẹn tấm lòng, tri thức và tình yêu của anh ấy, là dành cho bạn!” - Food Blogger Phan Anh (Esheep)\n“Trái với “Về Nhà Ăn Cơm” là tập hợp những món ăn chay thuần Việt đậm chất mâm cơm gia đình thì “Khởi Sự Ăn Chay” tập trung vào các món chay đơn giản, nguyên liệu dễ tìm và thời gian nấu nhanh gọn giúp những người mới tìm hiểu về việc ăn chay cũng có thể dễ dàng vào bếp chế biến chỉ trong tích tắc. Đặc biệt hơn nữa Đức áp dụng đúng nguyên lý 14 ngày để xây dựng một thói quen mới để đưa ra thực đơn giúp độc giả làm quen được với việc ăn chay lành mạnh hơn chỉ trong hai tuần. Cuốn sách thực sự phù hợp cho những ai đang tìm hiểu về ăn chay, đang bối rối không nên bắt đầu từ đâu hay chỉ đơn giản muốn bổ sung cho thực đơn hằng ngày những món ăn lành mạnh.” - Nguyễn Quỳnh Nga - tác giả cuốn sách Best Seller “Eat Clean - Thực Đơn 14 Ngày Thanh Lọc Cơ Thể Và Giảm Cân”.","5"),
//     new InitProduct("08", "amthuc", "", "./image/amthuc-nauan/7b686c6565d66e41c0c8333a0a6d60a7.jpg.webp", "Những món chay ngon và dinh dưỡng", "75.000", "Giờ đây nhu cầu ăn chay là một phần không thể thiếu trong cuộc sống của nhiều người. Hàng tháng, vào những ngày rằm hay lễ lớn, việc ăn chay càng trở nên phổ biến. Trong những dịp như vậy, chúng ta có thể tổ chức tiệc chay với những món ăn được chế biến đa dạng, cầu kỳ và nhiều dinh dưỡng hơn. Món ăn chay hiện nay không đơn thuần là những món ăn đơn giản với những nguyên liệu chủ yếu từ rau củ, đậu nành, đậu hũ lặp đi lặp lại như trước nữa. Với những nguyên liệu mới, phong phú và cách chế biến đa dạng, món chay đã trở thành món ăn cao cấp, sang trọng với hương vị mới mẻ và được trình bày đẹp mắt.\nCuốn sách này giới thiệu với các bạn các món chay mới, ngon và dễ làm. Bạn có thể chế biến các món này cho các bữa tiệc chay, buffet chay hay làm món ăn chơi đều thích hợp.","2")
// ]
// localStorage.setItem('productArr',JSON.stringify(productArr));

// alert(productArr[0].name);
// productArr[].soLuong

//In ra danh sach san pham
function showallQLSP(content){
    var s="";
    if(content=="1"){
        for(i=0;i<productArr.length;i++){
            s+=`<div class="container-content">
            <div class="id">${productArr[i].productId}</div>
            <div class="image">
                <img src="${productArr[i].img}" alt="">
            </div>
            <div class="ten-sp">${productArr[i].name}</div>
            <div class="so-luong">${productArr[i].soLuong}
            </div>
            <div class="gia-sp">${productArr[i].price}</div>
            <div class="modify"><i class="ti-pencil-alt icon-modify"></i> </div>
            <div class="delette"><i class="fa-sharp fa-regular fa-circle-xmark icon-close"></i> </div>
        </div>`;
        }
        document.getElementById("slide-content").innerHTML=s;
    }
    else {
        for(i=0;i<productArr.length;i++){
        var tmp=productArr[i].category;
        if(content==tmp){
            s+=`<div class="container-content">
            <div class="id">${productArr[i].productId}</div>
            <div class="image">
                <img src="${productArr[i].img}" alt="">
            </div>
            <div class="ten-sp">${productArr[i].name}</div>
            <div class="so-luong">${productArr[i].soLuong}
            </div>
            <div class="gia-sp">${productArr[i].price}</div>
            <div class="modify"><i class="ti-pencil-alt icon-modify"></i> </div>
            <div class="delette"><i class="fa-sharp fa-regular fa-circle-xmark icon-close"></i> </div>
        </div>`;
        }
        document.getElementById("slide-content").innerHTML=s;
        }
    }
}
// function showFilterProduct(){
// showallQLSP('1');
// }


// function locsp(){
//     var tmp=document.getElementsByTagName("select");
//     if(tmp[0].value ==1){
//         showallQLSP(tmp[0].value);
//     }
//     // else if()

// }



