      
    let customLayer = L.geoJson(null, {
      style: function(feature) {
          return { color: '#f00',
                  weight: 2,
                  opacity: 0.9
                }
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
    });
    omnivore.kml('./kml/pahtusov_1.kml', null, customLayer).addTo(map);

    let customLayer2 = L.geoJson(null, {
      style: function(feature) {
          return { color: '#fb00ff',
                  weight: 2,
                  opacity: 0.9
                }
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
    });
    omnivore.kml('./kml/pahtusov_2.kml', null, customLayer2).addTo(map);

    let img_url = './img/krotov.jpg';
    
    let pahtusov = L.marker([73.03260373562658, 56.69991176868952], {icon: rudderIcon}).bindPopup('"должен был идти по прибрежному льду восточного берега Новой Земли, к северу от Маточкина Шара, так далеко, как лед и состояние погоды позволят, рассчитывая обратный путь тою же дорогою; другим отрядом предполагалось описать Маточкин Шар по южному его берегу, и астрономически связать устья сего пролива. Я желал принять на себя исполнение первого из этих назначений, но слабость глаз и просьбы Цивольки, убедили меня уступить ему труднейшую работу"').addTo(map);

    let flag1 = L.marker([64.75651714975085, 39.96217345732051], {icon: flagIcon}).bindPopup('5 августа 1834 года из Архангельска стартовала вторая экспедиция Петра Кузьмича Пахтусова на Новую Землю (1 августа 1832 г. - первая, вышла также из Арханельска). Помощником начальника экспедиции и командиром второго судна, карбаса «Казаков» (назван в честь штурмана Казакова, погибшего на шхуне «Енисей» в первой новоземельской экспедиции), был назначен штурманский кондуктор Август Карлович Циволька.').addTo(map);


    pahtusov.on('mouseover', function (e) {
      this.openPopup();
    });
    pahtusov.on('mouseout', function (e) {
      this.closePopup();
    });

    flag1.on('mouseover', function (e) {
      this.openPopup();
    });
    flag1.on('mouseout', function (e) {
      this.closePopup();
    });

    let schuna = L.marker([66.7764522, 41.9657675], {icon: shipIcon}).bindPopup("<img src=" + img_url + "> <p>«Шхуна „Кротов“ на фоне горы Носилова», рисунок Редера, 1837 год. Шхуна «Кротов» была спущена на воду на Соломбальской верфи в 1834 году, вошла в состав Беломорской флотилии России.</p>").addTo(map);

    schuna.on('mouseover', function (e) {
      this.openPopup();
    });
    schuna.on('mouseout', function (e) {
      this.closePopup();
    });

    let rudder2 = L.marker([73.3087871, 54.3546662], {icon: rudderIcon}).bindPopup('Второй экспедицией был описан южный берег пролива Маточкин Шар, западный берег до мыса Адмиралтейства, восточный берег острова до острова Дальний.').addTo(map);
        
    rudder2.on('mouseover', function (e) {
      this.openPopup();
    });
    rudder2.on('mouseout', function (e) {
      this.closePopup();
    });
  
    let church_img = './img/paht_church.jpg';

    let church = L.marker([64.58229093677183, 40.52982492956619], {icon: churchIcon}).bindPopup("<img src=" + church_img + "> <p>После окончания 2 экспедиции Пахтусов умер. Похоронен в Архангельске. На фото могила Пахтусова П.К. на Соломбальском кладбище</p>").addTo(map);

    church.on('mouseover', function (e) {
      this.openPopup();
    });
    church.on('mouseout', function (e) {
      this.closePopup();
    });
