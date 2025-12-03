const btn = document.getElementById('showQR');
const qrSection = document.getElementById('qrSection');

btn.addEventListener('click', () => {
    qrSection.style.display = qrSection.style.display === 'block' ? 'none' : 'block';
});
