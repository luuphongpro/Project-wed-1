// SEARCH
function showSearch(){
	document.getElementById('contenSearch').style.display = 'block';
    document.getElementsByClassName("container-search-js")[0].style.display="block";
	showProduct();
}
var getContainerModalSearch=document.getElementsByClassName("container-search-js");
function close_modal_search(event){
    getContainerModalSearch[0].style.display="none";
}
function closeModalSearch(event){
    
    event.stopPropagation();
}


function showProduct() {
    let productArr = JSON.parse(localStorage.getItem('productArr'));
    
    var valueSearch = document.getElementById("inputSearch");
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
            s += `<div class="container-search">
                <div class="image-search">
                    <img src="${item.img}" alt="Không lấy được ảnh, kiểm tra lại thể loại">
                </div>
                <div class="ten-sp">${item.name}</div>
            </div>`;
        }
    });
    

    document.getElementById('contenSearch').innerHTML = s;
}

// function showProduct(){
// 	var valueSearch=document.getElementById("inputSearch");
// 	var contentSearch;
// 	contentSearch=valueSearch.value.toLowerCase ();
// 	let productArr=JSON.parse(localStorage.getItem('product'));
// 	s="";
// 	productArr.forEach(function count(index) {
// 		var tmp=index.name.toLowerCase();
// 		// console.log(tmp)
// 		if(tmp.indexOf(contentSearch)){
// 			console.log(index.name)
// 			// console.log(index.price)
// 			s+=`<div class="container-search">
// 			<div class="image-search">
// 				<img src="${index.img}" alt="Không lấy được ảnh,kiểm tra lại thể loại">
// 				</div>
// 				<div class="ten-sp">${index.name}</div>
// 			</div>`
// 		}
// 	});
// 	document.getElementById('contenSearch').innerHTML=s;
// }