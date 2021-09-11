
const closeNavbar = document.getElementById('close-navbar');

closeNavbar.addEventListener('click',function(e) { 
    document.getElementById('left-side-bar').classList.toggle('hiddenClass');
    document.getElementById('content').classList.toggle('main-full');
})



