// نمایش/پنهان QR کد
const btn = document.getElementById('toggleQR');
const qrSection = document.getElementById('qrSection');

btn.addEventListener('click', () => {
    if(qrSection.style.display === 'block'){
        qrSection.style.display = 'none';
    } else {
        qrSection.style.display = 'block';
    }
});

// اضافه کردن افکت اسکرول نرم برای اسلایدر (اختیاری)
const slider = document.getElementById('categorySlider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});
