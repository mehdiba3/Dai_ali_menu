// آکاردئون باز/بسته کردن دسته‌ها
const acc = document.getElementsByClassName('accordion-btn');
for(let i=0;i<acc.length;i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if(panel.style.display==='block'){
            panel.style.display='none';
        } else {
            panel.style.display='block';
        }
    });
}
