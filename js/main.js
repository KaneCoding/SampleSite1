function initMap() {
    // The location
    var location = {lat: 42.089797, lng: -76.807734};
    // The map, centered at location
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: location});
    // The marker, positioned at location
    var marker = new google.maps.Marker({position: location, map: map});
  }
  // Smooth Scrolling
$('#main-nav a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });