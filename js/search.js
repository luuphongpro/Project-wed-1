// SEARCH
var currentPage = 0;
var itemsPerPage = 4;
var filteredProducts = []; 

window.onload = function() {
    document.getElementsByClassName('nextSearch')[0].addEventListener('click', function(event){
        currentPage++;
        showProduct();
    });
    document.getElementsByClassName('prevSearch')[0].addEventListener('click', function(event){
        if (currentPage > 0) {
            currentPage--;
        }
        showProduct();
    });
}
var getContainerModalSearch=document.getElementsByClassName("container-search-js");
function close_modal_search(event){
    getContainerModalSearch[0].style.display="none";
}

function closeModalSearch(event){
        event.stopPropagation();
    
}

function showSearch(){
	document.getElementById('contenSearch').style.display = 'block';
    document.getElementsByClassName("container-search-js")[0].style.display="block";
	filterProducts(); 
	showProduct();
}

function filterProducts() {
    let productArr = JSON.parse(localStorage.getItem('productArr'));
    
    var valueSearch = document.getElementById("inputSearch").value.toLowerCase();
    var valuePriceLow = document.getElementById("inputPriceLow").value;
    var valuePriceHigh = document.getElementById("inputPriceHigh").value;
    var valueCategory = document.getElementById("inputCategory").value;
    
    filteredProducts = []; 
    currentPage = 0;
    for (var i = 0; i < productArr.length; i++) {
        var item = productArr[i];
        var tmpName = item.name.toLowerCase();
        var tmpCategory = item.category;
        var tmpPrice = parseInt(item.price.replace('.', '')); 
        var matchName = valueSearch.split(/\s+/).every(term => tmpName.indexOf(term) !== -1);
        var matchCategory = valueCategory ? tmpCategory === valueCategory : true;
        var matchPrice = valuePriceLow && valuePriceHigh ? (tmpPrice >= valuePriceLow && tmpPrice <= valuePriceHigh) : true;    
        if (matchName && matchCategory && matchPrice) {
            filteredProducts.push(item); 
        }
    }
}


function showProduct() {
    s = "";
    for (var i = currentPage * itemsPerPage; i < (currentPage + 1) * itemsPerPage && i < filteredProducts.length; i++) {
        var item = filteredProducts[i]; // Sử dụng danh sách lọc thay vì danh sách sản phẩm gốc
        s += `<div class="container-search" onclick="showModal('myModal-${item.productId}')">
            <div class="image-search">
                <img src="${item.img}" alt="Không lấy được ảnh, kiểm tra lại thể loại">
            </div>
            <div class="ten-sp">${item.name}</div>
        </div>`;
    }
    
    document.getElementById('contenSearch').innerHTML = s;
}

function showModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
  }