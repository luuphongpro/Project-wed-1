function InitProduct(productId, category, img, name, price){
    this.productId = productId
    this.category = category
    this.img = img
    this.name = name
    this.price = price
  }

  let productArr = [
    new InitProduct("01", "vanhoc", "../image/ảnh/Sách Văn Học/2f8f1ac443b9f472b5b568738f4584df.jpg.webp", "Hai mươi tư con mắt ", "25.000"),
    new InitProduct("02", "vanhoc", "../image/ảnh/Sách Văn Học/780acb45d807395a6c58968f48780215.jpg.webp", "Ngẩng đầu mà đi","67.000"),
    new InitProduct("03", "vanhoc", "../image/ảnh/Sách Văn Học/tam quốc diễn nghĩa/8c96ae330e030fd8f0a71123b1cf45ff.jpg.webp", "Dế mèn phiêu lưu ký", "56.000"),
    new InitProduct("04", "vanhoc", "../image/ảnh/Sách Văn Học/tam quốc diễn nghĩa/7529808cf692ee843c7f98d36099f1eb.jpg.webp", "Tam quốc diễn nghĩa 1", "64.000"),
    new InitProduct("04", "vanhoc", "..", "Tam quốc diễn nghĩa 2", "69.000"),
    new InitProduct("1012OO", "iphone", "./assests/img/phone/iphone-12-do-new-2-600x600.jpg", "Iphone 12 ", "22.500.000"),
    new InitProduct("1012MO", "iphone", "./assests/img/phone/iphone-12-mini-den-15-600x600.jpg", "Iphone 12 mini", "16.000.000"),
    new InitProduct("1012MO", "iphone", "./assests/img/phone/iphone-12-mini-trang-600x600.jpg", "Iphone 12 mini", "16.000.000"),
    

  ];
  let temp1 = localStorage.setItem("listProduct", JSON.stringify(productArr));

  function innerProducts(brand, key = "NO"){

    let s = "";
    for(let i = 0;i < list.length;i++){
      s += `<div class="product-item">
              <div class="product-top">
                  <img  class="product-thumb" src="${list[i].img}" alt="">
                  <a href="" class="product-name">${list[i].name}</a>
              </div>
              <div class="product-info">
                <div class="product-price">${list[i].price} VND</div>
                <a href="" class="buy-now">Mua ngay</a>
              </div>
            </div>
            `;
    }
    document.querySelector('.product-container').innerHTML = s;
    document.querySelector('.product-container').classList.add('list');
  }
