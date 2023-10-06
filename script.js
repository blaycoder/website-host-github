const navLinks = document.querySelectorAll(".nav-link");
const caret = document.querySelector(".caret");

navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', (e)=>{
        e.preventDefault();
        e.target.parentElement.classList.toggle('show')
    })
})
