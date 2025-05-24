document.addEventListener('DOMContentLoaded', function(){
var banner = document.getElementById('banner');
var closeBtn = document.getElementById('clodeBtn');
banner.classList.remove('hidden');
closeBtn.addEventListener('click', function(){
    banner.style.bottom = '-800px';
});

});