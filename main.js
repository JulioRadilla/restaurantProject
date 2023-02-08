const toggleButton = document.querySelector('.toggle-button');
const navBarLinks = document.querySelector('.headerList');

toggleButton.addEventListener('click',() =>{
    navBarLinks.classList.toggle('active')
})

/*GOOGLE MAPS */
//AIzaSyBtpuoLjdapdvFGMph_ogB-Eq4iGZjRLNM
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.847060, lng: -87.948630},
      zoom: 8
    });
}
window.onload = initMap; 
/*GOOGLE MAPS */