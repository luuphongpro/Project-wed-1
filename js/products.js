function InitProduct(productId, category, img, name, price) {
  this.productId = productId
  this.category = category
  this.img = img
  this.name = name
  this.price = price
}

let productArr = [
  new InitProduct("01", "vanhoc", "../image/vanhoc/2f8f1ac443b9f472b5b568738f4584df.jpg.webp", "Hai mươi tư con mắt ", "25.000"),
  new InitProduct("02", "vanhoc", "../image/vanhoc/780acb45d807395a6c58968f48780215.jpg.webp", "Ngẩng đầu mà đi", "67.000"),
  new InitProduct("03", "vanhoc", "../image/vanhoc/b4495afbfb1db7b8702345dc9ad0ab39.jpg.webp", "Dế mèn phiêu lưu ký", "67.000"),
  new InitProduct("04", "vanhoc", "../image/vanhoc/tamquocdiennghia/8c96ae330e030fd8f0a71123b1cf45ff.jpg.webp", "Tam quốc diễn nghĩa 1", "64.000"),
  new InitProduct("05", "vanhoc", "../image/vanhoc/tamquocdiennghia/7529808cf692ee843c7f98d36099f1eb.jpg.webp", "Tam quốc diễn nghĩa 2", "69.000"),
  new InitProduct("06", "vanhoc", "../image/vanhoc/tamquocdiennghia/a3410287170ec8aff2dbee52d33bae72.jpg.webp", "Tam quốc diễn nghĩa 3", "69.000"),
  new InitProduct("07", "amthuc", "../image/amthuc-nauan/b4495afbfb1db7b8702345dc9ad0ab39.jpg.webp", "Nấu ăn tại nhà cùng Gordon Ramsey", "89.000"),
  new InitProduct("08", "amthuc", "../image/amthuc-nauan/3a4be908133c374e0de3555a3580fc04.jpg.webp", "Khởi sự ăn chay", "89.000"),
  new InitProduct("09", "amthuc", "../image/amthuc-nauan/7b686c6565d66e41c0c8333a0a6d60a7.jpg.webp", "Những món chay ngon và dinh dưỡng", "75.000"),
  new InitProduct("09", "amthuc", "../image/amthuc-nauan/8e9a77053eda544cd928e12bfab26620.jpg.webp", "Chất xanh của sự sống", "91.000"),
  new InitProduct("10", "amthuc", "../image/amthuc-nauan/1092b207189a713b51357096746c284e.jpg.webp", "Khóa học nấu ăn tại gia", "105.000"),
  new InitProduct("11", "amthuc", "../image/amthuc-nauan/9466350a1a4eadecaf658ffb101bd116.jpg.webp", "Dinh dưỡng từ rau củ", "43.000"),
  new InitProduct("12", "amthuc", "../image/amthuc-nauan/a9600e6e032a8b98e3c5b0d4eb1aa4cc.jpg.webp", "Ẩm thực truyền thống Việt Nam", "66.000"),
  new InitProduct("13", "amthuc", "../image/amthuc-nauan/c1a91bc8031ee7d2a341204614e9de02.jpg.webp", "Bếp ấm nhà vui", "84.000"),
  new InitProduct("14", "amthuc", "../image/amthuc-nauan/d73fa50b1651556494bb29900d2b4c72.jpg.webp", "Các món cháo ăn dặm", "35.000"),
  new InitProduct("15", "amthuc", "../image/amthuc-nauan/f3d43c5c3bcf3216534599f4e0c923ad.jpg.webp", "Khởi sự ăn chay", "73.000"),
  new InitProduct("15", "amthuc", "../image/amthuc-nauan/f89d8a0ce10e8f43e45ef64a1330f1c3.jpg.webp", "Combo 5 cuốn Dinh dưỡng chữa bệnh", "73.000"),
  new InitProduct("16", "amthuc", "../image/amthuc-nauan/f195a4a9e7dbdc7cd1bb1f685306e0a6.jpg.webp", "Blog ẩm thực - Ngô Thanh Hòa", "156.000"),

]


// let temp1 = localStorage.setItem("listProduct", JSON.stringify(productArr));
// function handleString(string){
//   if(string  === "vanhoc"){
//     return "vanhoc";
//   }else if(string === "amthuc"){
//     return "amthuc";
//   }else if(string.slice(2,) === "OO"){
//     return "OO";
//   }else if(string.slice(2,) === "MO"){
//     return "MO";
//   }else {
//     return -1;
//   }
// }
// function innerProducts(brand, key = "NO"){
//   let list = [];
//   let code = handleString(key);
//   let listTemp = (function a(){
//     for(let i of JSON.parse(localStorage.getItem("listProduct"))){
//       if(i.brand === brand && key === "NO"){
//         list.push(i);
//       }else if(i.brand === brand){
//         if(key.slice(0, 2) == i.productId.slice(2, 4)){
//           if(code == -1){
//             list.push(i);
//           }else if(code === i.productId.slice(4, )){
//             list.push(i);
//           }
//         }
//       }
//     }
//   return list;
// })();
//   let s = "";
//   for(let i = 0;i < list.length;i++){
//     s += `<div class="item-content">
//             <div class="product-top">
//                 <img  class="product-thumb" src="${list[i].img}" alt="">
//                 <a href="">${list[i].name}</a>
//             </div>
//             <div class="product-info">
//               <div class="product-price">${list[i].price} VND</div>
//             </div>
//           </div>
//           `;
//   }
//   document.getElementById("content").innerHTML = s;
// }

function displayCategory(category) {
  const container = document.querySelector('.container-content');
  container.innerHTML = ''; // Clear the container content

  // Filter products based on the given category
  const filteredProducts = productArr.filter(product => product.category === category);

  // Create HTML elements for the filtered products and append them to the container
  filteredProducts.forEach(product => {
    const itemContent = document.createElement('div');
    itemContent.classList.add('item-content');

    const productTop = document.createElement('div');
    productTop.classList.add('product-top');

    const img = document.createElement('img');
    img.classList.add('product-thumb');
    img.src = product.img;
    img.alt = product.name;

    const productName = document.createElement('a');
    productName.href = product.productId;
    productName.textContent = product.name;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.textContent = product.price + ' VND';

    productTop.appendChild(img);
    productTop.appendChild(productName);
    productInfo.appendChild(productPrice);
    itemContent.appendChild(productTop);
    itemContent.appendChild(productInfo);

    container.appendChild(itemContent);

    const temp = document.querySelector(".container-content");
    temp.style = "justify-content: flex-start";
  });
}
