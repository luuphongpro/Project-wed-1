window.addEventListener('load', function() {
    var images = [
        './image/slide_so1.jpg',
        './image/slide_so2.jpg',
        './image/slide_so3.jpg'
    ];
    
    var currentImage = 0; 
    
    function changeImage() {
        var slideBanner = document.querySelector('.slide-banner1xxl');
        slideBanner.style.backgroundImage = 'url("' + images[currentImage] + '")';
    }
    
    function autoChangeImage() {
        currentImage = (currentImage + 1) % images.length;
        changeImage();
    }
    
    setInterval(autoChangeImage, 5000);
    
    var btnPrev = document.querySelector('.slide-prev');
    var btnNext = document.querySelector('.slide-next');      
    
    changeImage();
    
    btnPrev.addEventListener('click', function() { 
        // alert("prev click");
        currentImage--;          
        if (currentImage < 0) {
            currentImage = images.length - 1;
        }     
        changeImage();
    });       
    
    btnNext.addEventListener('click', function() {    
        // alert("next click");
        currentImage++;          
        if (currentImage >= images.length) {
            currentImage = 0;
        }          
        changeImage(); 
    });
  });