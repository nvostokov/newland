
    let customLayer = L.geoJson(null, {
      style: function(feature) {
          return { color: '#000',
                  weight: 2,
                  opacity: 0.9
                }
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name);
      }
      });
      omnivore.kml('./kml/tsiv.kml', null, customLayer).addTo(map); 

      let img_url = './img/civ_church.jpg';

      let church = L.marker([74.0422098, 55.0049971], {icon: churchIcon}).bindPopup("<img src=" + img_url + "><p>В третий и в последний раз мореплаватель отправился к Новой Земле в 1838 году, встав во главе гидрографической экспедиции на шхунах «Новая Земля» и «Шпицберген». В марте 1839 г. Циволька умер от цинги. Похоронен на Новой земле.</p><p>На фото памятная табличка на могиле А.К. Циволька</p>").addTo(map);

      church.on('mouseover', function (e) {
        this.openPopup();
      });
      church.on('mouseout', function (e) {
        this.closePopup();
      });

      let customLayer2 = L.geoJson(null, {
        style: function(feature) {
            return { color: '#001aff',
                    weight: 2,
                    opacity: 0.9
                  }
        },
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.name);
        }
        });
        omnivore.kml('./kml/pahtusov_2.kml', null, customLayer2).addTo(map); 

        let flag1 = L.marker([64.75651714975085, 39.96217345732051], {icon: flagIcon}).bindPopup('24 июля 1834 г. экспедиция на шхуне "Кротов" и карбасе "Казаков" вышла из Архангельска. На каждом судне было по 7 человек. Пахтусов командовал "Кротовым", а Циволька — "Казаковым".').addTo(map);

        let rudder = L.marker([73.3087871, 54.3546662], {icon: rudderIcon}).bindPopup('Подойдя к Маточкину Шару, они 29 августа отправились в плавание по проливу, но вскоре встретили льды и возвратились к устью р. Чиракина, где расположились на зимовку. <br> В апреле они разделились на два отряда.С Циволькой отправились 6 человек, взяв сани с запасами еды на две недели. Лед местами был оторван от берега и тащить сани было нелегко. По пути открыли залив Незнаемый (Циволька предполагал, что сюда заходил Розмыслов в 1769 г., но не был в этом уверен), залив Медвежий (встретили здесь огромного медведя), мыс Пяти Пальцев (похож на кисть руки). <br> 24 апреля добрались до полуострова Фон-Флотта. Впереди был битый лед, идти дальше нельзя.').addTo(map);

        flag1.on('mouseover', function (e) {
          this.openPopup();
        });
        flag1.on('mouseout', function (e) {
          this.closePopup();
        });
        
        rudder.on('mouseover', function (e) {
          this.openPopup();
        });
        rudder.on('mouseout', function (e) {
          this.closePopup();
        });
