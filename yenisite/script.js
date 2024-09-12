document.addEventListener('DOMContentLoaded', function () {
    const loading = document.getElementById('loading');
 
    // Sayfa yüklenirken yükleme ekranını gizle
    window.addEventListener('load', function () {
        loading.classList.add('hidden');
    });
 
    // Link tıklama olayını yakala
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Varsayılan davranışı durdur
            loading.classList.remove('hidden');
            
            // 1 saniye bekle ve ardından yönlendirme yap
            setTimeout(() => {
                window.location.href = this.href;
            }, 1000);
        });
    });
 
    // Carousel işlevselliği
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
 
    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }
 
    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        showItem(currentIndex);
    });
 
    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });
 
    showItem(currentIndex);
 });
