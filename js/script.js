let map = L.map('map').setView([70.473434, 29.019561], 4);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'OpenStreetMap'
}).addTo(map);









let LeafIcon = L.Icon.extend({
  options: {
      iconSize:     [40, 40],
      iconAnchor:   [20, 40],
      popupAnchor:  [0, -40]
  }
});




let shipIcon = new LeafIcon({iconUrl: './img/ship.svg'});

let flagIcon = new LeafIcon({iconUrl: './img/flag1.svg'});

let churchIcon = new LeafIcon({iconUrl: './img/church.svg'});

let rudderIcon = new LeafIcon({iconUrl: './img/rudder.svg'});

let custLayer = L.geoJson(null, {
  style: function(feature) {
      return { color: '#f00',
              weight: 2,
              opacity: 0.1
            }
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.name);
}
});
omnivore.kml('./kml/nz.kml', null, custLayer).addTo(map);



//СЂРµРєРё, РјР°СЂРєРµСЂС‹

//Р‘РџРЈ

