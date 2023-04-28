      
    let customLayer = L.geoJson(null, {
    style: function(feature) {
        return { color: '#5d6600',
                weight: 2,
                opacity: 0.9
              }
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.name);
    }
    });
    omnivore.kml('./kml/lit1.kml', null, customLayer).addTo(map); 

    let customLayer2 = L.geoJson(null, {
      style: function(feature) {
          return { color: '#995e06',
                  weight: 2,
                  opacity: 0.9
                }
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name);
      }
      });
      omnivore.kml('./kml/lit2.kml', null, customLayer2).addTo(map); 

      let customLayer3 = L.geoJson(null, {
        style: function(feature) {
            return { color: '#990617',
                    weight: 2,
                    opacity: 0.9
                  }
        },
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.name);
        }
        });
        omnivore.kml('./kml/lit3.kml', null, customLayer3).addTo(map); 

        let customLayer4 = L.geoJson(null, {
          style: function(feature) {
              return { color: '#7d7879',
                      weight: 2,
                      opacity: 0.9
                    }
          },
          onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.name);
          }
          });
          omnivore.kml('./kml/lit4.kml', null, customLayer4).addTo(map); 

          let flag1 = L.marker([64.6528737984116, 40.58908849343494], {icon: flagIcon}).bindPopup('В 1821-1824 гг. лейтенант Ф.П.Литке возглавил четыре экспедиции на военном бриге “Новая Земля”.').addTo(map);

          let img_url = './img/newland.png';

          let schuna = L.marker([67.3042542, 43.0718985], {icon: shipIcon}).bindPopup("<img src=" + img_url + "> <p>Шхуна «Новая Земля». Изображение из книги А. А. Чернышёва «Российский парусный флот»</p>").addTo(map);

          let rudder = L.marker([76.536001, 61.457687], {icon: rudderIcon}).bindPopup('Экспедиции под руководством Литке сделали опись западного берега Новой Земли от пролива Карские ворота до мыса Нассау. <br> Пробиться дальше на Север не дали сплоченные льды.').addTo(map);

          let rudder2 = L.marker([73.3087871, 54.3546662], {icon: rudderIcon}).bindPopup('Исследовав Маточкин Шар, Литке подтвердил высокую точность съемки Розмысловым пролива. Впервые был проведен целый комплекс научных наблюдений: метеорологических, геомагнитных и астрономических. Главную задачу — измерить длину Маточкина Шара экспедиция выполнить не смогла').addTo(map);
        
          rudder.on('mouseover', function (e) {
            this.openPopup();
          });
          rudder.on('mouseout', function (e) {
            this.closePopup();
          });
          rudder2.on('mouseover', function (e) {
            this.openPopup();
          });
          rudder2.on('mouseout', function (e) {
            this.closePopup();
          });

          let rudder3 = L.marker([71.33376350411108, 52.02179212773881], {icon: rudderIcon}).bindPopup('В 1823 г. Ф.П.Литке нанес на карту в районе пролива Костин Шар “Белужью губу”. <br> Он использовал название, которое было дано губе в старину промышленниками-поморами за то, что здесь часто велся промысел белух.').addTo(map);

          rudder3.on('mouseover', function (e) {
            this.openPopup();
          });
          rudder3.on('mouseout', function (e) {
            this.closePopup();
          });
          schuna.on('mouseover', function (e) {
            this.openPopup();
          });
          schuna.on('mouseout', function (e) {
            this.closePopup();
          });
          flag1.on('mouseover', function (e) {
            this.openPopup();
          });
          flag1.on('mouseout', function (e) {
            this.closePopup();
          });

          let church_img = './img/litke_coin.jpg';

          let church = L.marker([59.89604435355607, 30.30488365599786], {icon: churchIcon}).bindPopup("<img src=" + church_img + "> <p>Похоронен Ф.П. Литке в Санкт-Петербурге. На изображении памятная монета.</p>").addTo(map);

          church.on('mouseover', function (e) {
            this.openPopup();
          });
          church.on('mouseout', function (e) {
            this.closePopup();
          });