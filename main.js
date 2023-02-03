const toggleButton = document.querySelector('.toggle-button');
const navBarLinks = document.querySelector('.headerList');

toggleButton.addEventListener('click',() =>{
    navBarLinks.classList.toggle('active')
})