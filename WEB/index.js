let img2 = document.querySelectorAll('.prueba');

img2.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('none');
    })
})