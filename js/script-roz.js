   
    let customLayer = L.geoJson(null, {
      style: function(feature) {
          return { color: '#00660a',
                  weight: 2,
                  opacity: 0.9
                }
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
    });
    omnivore.kml('./kml/roz.kml', null, customLayer).addTo(map);
  
    
    let rudder = L.marker([73.3087871, 54.3546662], {icon: rudderIcon}).bindPopup('Летом 1769, несмотря на потерю большей части людей и крайне плохое состояние судна, Розмыслов добрался до настоящего устья Маточкина Шара, но, за невозможностью плыть далее, должен был вернуться в Архангельск. Результатом его работ была опись Маточкина Шара. Ещё летом 1897 г. английские путешественники открыли следы зимовья Розмыслова в Белужьей губе.').addTo(map);
  
          
    rudder.on('mouseover', function (e) {
      this.openPopup();
    });
    rudder.on('mouseout', function (e) {
      this.closePopup();
    });
    let flag1 = L.marker([64.5528737984116, 40.48908849343494], {icon: flagIcon}).bindPopup('Розмыслов на судне, снаряженном купцом Барминым, с небольшим экипажем 10 июля 1768 г. выехал из Архангельска и 6 августа был у берегов Новой Земли.').addTo(map);
  
    flag1.on('mouseover', function (e) {
      this.openPopup();
    });
    flag1.on('mouseout', function (e) {
      this.closePopup();
    });