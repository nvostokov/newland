function paht() {
    let text = '<div class="header__legend header__legend-paht"><div class="header__1exp"><p>1я экспедиция П.К. Пахтусова </p></div><div class="header__2exp"><p>2я экспедиция П.К. Пахтусова</p></div><div class="header__legend-icon"><img src="./img/flag1.svg" alt=""><p>г. Архангельск</p></div><div class="header__legend-icon"><img src="./img/rudder.svg" alt=""><p>Опорные точки машрута</p></div><div class="header__legend-icon"><img src="./img/ship.svg" alt=""><p>Корабль П.К. Пахтусова</p></div><div class="header__legend-icon"><img src="./img/church.svg" alt=""><p>Место захоронения П.К. Пахтусова</p></div></div>';
  
    document.getElementById('text').innerHTML = '<p><p class="header__info-title"><b>Пахтусов Петр Кузьмич</b><span>(1800 - 1835 гг.)</span></p> Русский мореплаватель и гидрограф. В 1828 году получил чин мичмана. Участвовал в экспедиции Ф. П. Литке. В 1829 году предложил свой проект экспедиции на восточное побережье Новой Земли. Им было произведено подробное картографирование побережья Северного Ледовитого океана от Канина Носа до острова Вайгач. Он первым произвёл детальные гидрографические описания и первые промеры глубин Белого моря. Также принимал участие в картографировании острова Колгуев</p>' + text;
    
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
    omnivore.kml('/kml/pahtusov_1.kml', null, customLayer).addTo(map);

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
    omnivore.kml('/kml/pahtusov_2.kml', null, customLayer2).addTo(map);

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

  }


function litke() {

    let text = '<div class="header__legend header__legend-lit"><div class="header__1exp"><p>1я экспедиция Ф.П. Литке 1821 г.</p></div><div class="header__2exp"><p>2я экспедиция Ф.П. Литке 1822 г.</p></div><div class="header__3exp"><p>3я экспедиция Ф.П. Литке 1823 г.</p></div><div class="header__4exp"><p>4я экспедиция Ф.П. Литке 1824 г.</p></div><div class="header__legend-icon"><img src="./img/flag1.svg" alt=""><p>г. Архангельск</p></div><div class="header__legend-icon"><img src="./img/rudder.svg" alt=""><p>Опорные точки машрута</p></div><div class="header__legend-icon"><img src="./img/ship.svg" alt=""><p>Корабль Ф.П. Литке</p></div><div class="header__legend-icon"><img src="./img/church.svg" alt=""><p>Место захоронения Ф.П. Литке</p></div></div>';
  
    document.getElementById('text').innerHTML = '<p><p class="header__info-title"><b>Литке Федор Петрович</b><span>(1787 - 1882 гг.)</span></p> Русский мореплаватель, географ, исследователь Арктики, генерал-адъютант, адмирал (1855), президент Академии Наук в 1864 - 1882 гг.</p>' + text;
    
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
    omnivore.kml('/kml/lit1.kml', null, customLayer).addTo(map); 

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
      omnivore.kml('/kml/lit2.kml', null, customLayer2).addTo(map); 

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
        omnivore.kml('/kml/lit3.kml', null, customLayer3).addTo(map); 

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
          omnivore.kml('/kml/lit4.kml', null, customLayer4).addTo(map); 

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
  }

function civ() {
    let text = '<div class="header__legend header__legend-civ"><div class="header__1exp"><p>Экспедиция П.К. Пахтусова и А.К. Цивольки</p></div><div class="header__2exp"><p>Территории, исследованные А.К. Циволькой</p></div><div class="header__legend-icon"><img src="./img/flag1.svg" alt=""><p>г. Архангельск</p></div><div class="header__legend-icon"><img src="./img/rudder.svg" alt=""><p>Опорные точки машрута</p></div><div class="header__legend-icon"><img src="./img/church.svg" alt=""><p>Место захоронения А.К. Цивольки</p></div></div>';
  
    document.getElementById('text').innerHTML = '<p><p class="header__info-title"><b>Циволька Август Карлович</b><span>(1810 - 1839 гг.)</span></p> Русский мореплаватель польского происхождения, прапорщик корпуса флотских штурманов, исследователь Арктики, участник трёх экспедиций к берегам Новой Земли. <br> В 1834 г. он с радостью принял приглашение отправиться в экспедицию на Новую Землю помощником П. К. Пахтусова.</p>' + text;

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
      omnivore.kml('/kml/tsiv.kml', null, customLayer).addTo(map); 

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
        omnivore.kml('/kml/pahtusov_2.kml', null, customLayer2).addTo(map); 

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
}

function roz() {

  let legend = '<div class="header__legend header__legend-roz"><div class="header__1exp"><p>Маршрут экспедиции Ф.Ф. Розмыслова</p></div><div class="header__legend-icon"><img src="./img/flag1.svg" alt=""><p>г. Архангельск</p></div><div class="header__legend-icon"><img src="./img/rudder.svg" alt=""><p>Опорные точки машрута</p></div></div>';

  document.getElementById('text').innerHTML = '<p><p class="header__info-title"><b>Розмыслов Фёдор Фёдорович</b><span>(ум. 1771 г.)</span></p> Штурман, путешественник XVIII века, положивший основание русским исследованиям Новой Земли. В 1740 г. поступил в Морскую Академию учеником, с 1744 по 1766 ежегодно находился в плаваниях в Балтийском море и сделал 4 перехода из Кронштадта в Архангельск и обратно.</p>' + legend;
  
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
  omnivore.kml('/kml/roz.kml', null, customLayer).addTo(map);

  
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

}