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

    checkIfCartIsEmpty();
    let cart = JSON.parse(localStorage.getItem('listCart'));
    let quantityCart = cart ? cart.length : 0;
    let quantityCartElement = document.querySelector('.quantity-giohang');
    quantityCartElement.textContent = quantityCart;
    cart.forEach(function(item) {
    let li = document.createElement('li');
    li.classList.add('content-giohang-item');
    li.innerHTML = `
        <div class="content-giohang-left">
            <div class="tick-giohang">
                <i class="fa-regular fa-square square"></i>
                <i class="fa-regular fa-square-check square-check"></i>
            </div>
            <div class="content-giohang-item-img" style="background-image: url('${item.img}')">
            </div>     
        </div>
        <div class="content-giohang-mid">
            <span class="content-giohang-info">${item.name}</span>
            <span class="content-giohang-infoBonus">${item.price} đ</span>
        </div>
        <div class="content-giohang-right">
            <div class="content-giohang-soluong">
                <i class="fa-solid fa-minus minus-btn"></i>
                <input type="text" name="name" value="${item.quantity}">
                <i class="fa-solid fa-plus plus-btn"></i>
            </div>
            <span class="content-giohang-gia">${(item.price * item.quantity*1000).toLocaleString('de-DE')} </span>
            <i class="fa-regular fa-trash-can content-giohang-trash"></i>
        </div>
    `;

    document.querySelector('.content-giohang-list').appendChild(li);
    // Gán các hàm chức năng cho mỗi mục
    let quantityInput = li.querySelector('.content-giohang-soluong input');
    let minusBtn = li.querySelector('.content-giohang-soluong .minus-btn');
    let plusBtn = li.querySelector('.content-giohang-soluong .plus-btn');
    let priceElement = li.querySelector('.content-giohang-infoBonus');
    let totalElement = li.querySelector('.content-giohang-gia');
    changeQuantity(quantityInput, minusBtn, plusBtn, priceElement, totalElement);

    let trashIcon = li.querySelector('.content-giohang-trash');
    trashIcon.addEventListener('click', function() {
        deleteItem(item.name);
    });
    
});
function changeQuantity(quantityInput, minusBtn, plusBtn, priceElement, totalElement) {
    minusBtn.addEventListener('click', function() {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            updatePrice();
        }
    });

    plusBtn.addEventListener('click', function() {
        quantityInput.value++;
        updatePrice();
    });

    function updatePrice() {
        let price = parseFloat(priceElement.textContent);
        let quantity = parseInt(quantityInput.value);
        totalElement.textContent = (price * quantity*1000).toLocaleString('de-DE') + ' VND';
        updateTotal();
      }

}
function deleteItem(itemName) {
    let confirmDelete = confirm('Bạn có chắc chắn muốn xóa mục này khỏi giỏ hàng không?');
    if (!confirmDelete) {
        return; 
    }
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('listCart', JSON.stringify(cart));
    let itemToDelete = Array.from(document.querySelectorAll('.content-giohang-item')).find(li => li.querySelector('.content-giohang-info').textContent === itemName);
    if (itemToDelete) {
        itemToDelete.remove();
    }
    checkIfCartIsEmpty();
    updateQuantityCart()
}
function checkIfCartIsEmpty() {
    let cart = JSON.parse(localStorage.getItem('listCart')) || [];
    let emptyCartMessage = document.querySelector('.no-item');
    let cartContainer = document.querySelector('.container-giohang');
    let cartTop = document.querySelector('.content-giohang-top');
    let cartList = document.querySelector('.content-giohang-list');

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartTop.style.display = 'none';
        cartList.style.display = 'none';
    } else {
        emptyCartMessage.style.display = 'none';
        cartTop.style.display = 'flex';
        cartList.style.display = 'block';
    }
}

let checkoutButton = document.querySelector('.check-out');
checkoutButton.disabled = true;
let checkboxes = document.querySelectorAll('.tick-giohang .fa-square, .tick-giohang .fa-square-check');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        let square = this.parentElement.querySelector('.fa-square');
        let squareCheck = this.parentElement.querySelector('.fa-square-check');

        if (!squareCheck.classList.contains('checkactive')) {
            squareCheck.classList.add('checkactive');
            square.classList.add('checkdisable');
        } else {
            squareCheck.classList.remove('checkactive');
            square.classList.remove('checkdisable');
        }
        updateTotal();

        let checkedItems = document.querySelectorAll('.tick-giohang .fa-square-check.checkactive');
        if (checkedItems.length > 0) {
            checkoutButton.classList.add('highlighted');
            checkoutButton.disabled = false;
        } else {
            checkoutButton.classList.remove('highlighted');
            checkoutButton.disabled = true;
        }

        let allChecked = Array.from(document.querySelectorAll('.tick-giohang .fa-square-check')).every(squareCheck => {
            return squareCheck.classList.contains('checkactive');
        });

        let tickAllCheck = document.querySelector('.tick-all-giohang .fa-square-check');
        let tickAll = document.querySelector('.tick-all-giohang .fa-square');
        if (allChecked) {
            tickAllCheck.classList.add('checkactive');
            tickAll.classList.add('checkdisable');
        } else {
            tickAllCheck.classList.remove('checkactive');
            tickAll.classList.remove('checkdisable');
        }
    });
});

let tickAll = document.querySelector('.tick-all-giohang .fa-square');
let tickAllCheck = tickAll.parentElement.querySelector('.fa-square-check');
let checkboxesall = document.querySelectorAll('.tick-all-giohang .fa-square, .tick-all-giohang .fa-square-check');

checkboxesall.forEach(function(tick) {
    tick.addEventListener('click', function() {
        if (!tickAllCheck.classList.contains('checkactive')) {
            tickAllCheck.classList.add('checkactive');
            tickAll.classList.add('checkdisable');
            checkoutButton.classList.add('highlighted');
            checkoutButton.disabled = false;
        } else {
            tickAllCheck.classList.remove('checkactive');
            tickAll.classList.remove('checkdisable');
            checkoutButton.classList.remove('highlighted');
            checkoutButton.disabled = true;
        }

        let ticks = document.querySelectorAll('.tick-giohang');
        ticks.forEach(function(tick) {
            let square = tick.querySelector('.fa-square');
            let squareCheck = tick.querySelector('.fa-square-check');
            if (tickAllCheck.classList.contains('checkactive')) {
                square.classList.add('checkdisable');
                squareCheck.classList.add('checkactive');
            } else {
                square.classList.remove('checkdisable');
                squareCheck.classList.remove('checkactive');
            }
        });
        updateTotal();
    });
});


function updateTotal() {
    let checkboxes = document.querySelectorAll('.tick-giohang .fa-square-check');
    let total = 0;
    let totalItem=0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.classList.contains('checkactive')) {
            let priceElement = checkbox.closest('.content-giohang-item').querySelector('.content-giohang-gia');
            let price = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ""));
            total += price;
            totalItem ++;
        }
    });
    let totalElement = document.querySelector('.totalpriceCart');
    totalElement.innerHTML = `<span>Tổng cộng:</span> ${(total*1000).toLocaleString('de-DE')} VNĐ`;
    let totalItemElement = document.querySelector('.content-giohang-left span');
    totalItemElement.textContent = 'Chọn tất cả (' + totalItem + ' sản phẩm)';
}
  
function updateQuantityCart() {
    let cart = JSON.parse(localStorage.getItem('listCart'));
    let quantityCart = cart.length;
    let quantityCartElement = document.querySelector('.quantity-giohang');
    quantityCartElement.textContent = quantityCart;
}


checkoutButton.addEventListener('click', function() {
    let checkedItems = document.querySelectorAll('.tick-giohang .fa-square-check.checkactive');
    if (checkedItems.length === 0) {
        checkoutButton.classList.remove('highlighted'); 
    } else {     
        checkoutButton.classList.add('highlighted'); 
    }
    
    
    let cart = JSON.parse(localStorage.getItem('listCart'));
    let newCart = [];

    for (let i = 0; i < cart.length; i++) {
        let found = false;
        for (let j = 0; j < checkedItems.length; j++) {
            if (cart[i].name === checkedItems[j].closest('.content-giohang-item').querySelector('.content-giohang-info').textContent) {
                found = true;
                break;
            }
        }
        if (!found) {
            newCart.push(cart[i]);
        }
    }
    localStorage.setItem('listCart', JSON.stringify(newCart));

    for (let i = 0; i < checkedItems.length; i++) {
        let listItem = checkedItems[i].closest('.content-giohang-item');
        listItem.remove();
    }
    updateTotal();
    
    alert('Bạn đã thanh toán thành công!');
    location.reload();
});




})
