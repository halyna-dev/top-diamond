var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.52
            , lng: 34.6
        }, // -34.397, 150.644
        zoom: 13
        , styles: [
            {
                "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#212121"
      }
    ]
  }
            , {
                "elementType": "labels.icon"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#757575"
      }
    ]
  }
            , {
                "elementType": "labels.text.stroke"
                , "stylers": [
                    {
                        "color": "#212121"
      }
    ]
  }
            , {
                "featureType": "administrative"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#c0c0c0"
      }
                    , {
                        "weight": 2
      }
    ]
  }
            , {
                "featureType": "administrative.country"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#9e9e9e"
      }
    ]
  }
            , {
                "featureType": "administrative.locality"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#bdbdbd"
      }
    ]
  }
            , {
                "featureType": "administrative.province"
                , "elementType": "labels"
                , "stylers": [
                    {
                        "color": "#c0c0c0"
      }
    ]
  }
            , {
                "featureType": "poi"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#ffffff"
      }
    ]
  }
            , {
                "featureType": "poi.park"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#191919"
      }
    ]
  }
            , {
                "featureType": "poi.park"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#616161"
      }
    ]
  }
            , {
                "featureType": "poi.park"
                , "elementType": "labels.text.stroke"
                , "stylers": [
                    {
                        "color": "#1b1b1b"
      }
    ]
  }
            , {
                "featureType": "road"
                , "elementType": "geometry.fill"
                , "stylers": [
                    {
                        "color": "#2c2c2c"
      }
    ]
  }
            , {
                "featureType": "road"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#c0c0c0"
      }
    ]
  }
            , {
                "featureType": "road.arterial"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#373737"
      }
    ]
  }
            , {
                "featureType": "road.highway"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#3c3c3c"
      }
    ]
  }
            , {
                "featureType": "road.highway.controlled_access"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#4e4e4e"
      }
    ]
  }
            , {
                "featureType": "road.local"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#616161"
      }
    ]
  }
            , {
                "featureType": "transit"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#808080"
      }
    ]
  }
            , {
                "featureType": "water"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#000000"
      }
    ]
  }
            , {
                "featureType": "water"
                , "elementType": "labels.text"
                , "stylers": [
                    {
                        "color": "#c0c0c0"
      }
    ]
  }
            , {
                "featureType": "water"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#808080"
      }
    ]
  }
]
    });
};
//*******************************
//Form in contact us section
//*******************************
function mailForm() {
    var inpList = document.querySelectorAll('.contacts .mailform_input input');
    var textArea = document.querySelector('.contacts .mailform_input textarea');
    var mailForm = document.querySelector('.contacts .mailform');
    mailForm.addEventListener('mouseover', function (e) {
        if (textArea.value !== '') {
            mailForm.querySelector('.mailform_area .mailform_place-holder').classList.add('state-1');
        }
        else {
            mailForm.querySelector('.mailform_area .mailform_place-holder').classList.remove('state-1');
        }
        if (inpList[0].value !== '') {
            mailForm.querySelector('.mailform_input:first-of-type .mailform_place-holder').classList.add('state-1');
        }
        else {
            mailForm.querySelector('.mailform_input:first-of-type .mailform_place-holder').classList.remove('state-1');
        }
        if (inpList[1].value !== '') {
            mailForm.querySelector('.mailform_input:nth-of-type(2) .mailform_place-holder').classList.add('state-1');
        }
        else {
            mailForm.querySelector('.mailform_input:nth-of-type(2) .mailform_place-holder').classList.remove('state-1');
        }
    });
    var mailCntrl = document.querySelector('.contacts .mailform_controls');
    mailCntrl.addEventListener('click', function (e) {
        e.preventDefault();
        var elm = e.target;
        if (elm.type == 'reset' || elm.parentElement.type == 'reset') {
            console.log('reset');
            textArea.value = '';
            inpList[0].value = '';
            inpList[1].value = '';
        }
    });
    // * * * mail form Ajaks * * * //
    // находим необходимый селектор
    var mailform = document.querySelector('.mailform');
    var btn = document.querySelector('.btn[type=submit]');
    // устанавливаем запрос
    var request = new XMLHttpRequest();
    // отслеживаем запрос
    request.onreadystatechange = function () {
            // проверяем вернулись запрошенные данные
            if (request.readyState === 4) {
                // добавляем рамку
                mailform.style.border = '1px solid #e8e8e8';
                // проверяем успешен ли запрос
                if (request.status === 200) {
                    // обнавляем элемент HTML
                    mailform.innerHTML = request.response;
                }
                else {
                    // иначе выводим сообщение об ошибке
                    mailform.innerHTML = 'Произошла ошибка при запросе: ' + request.status + ' ' + request.statusText;
                }
            }
        }
        // определяем тип запроса
    request.open('POST', 'mail.php');
    // регистрируем событие
    btn.addEventListener('click', function () {
        // скрываем кнопку
        this.style.display = 'none';
        // отправляем запрос
        request.send();
    });
};

//*******************************
//Animation scroll
//*******************************
function animateScroll() {
    console.log('animate scroll begin');
    var isScrolling = false;
    window.addEventListener("scroll", throttleScroll, false);

    function throttleScroll(e) {
        if (isScrolling == false) {
            window.requestAnimationFrame(function () {
                scrolling(e);
                isScrolling = false;
            });
        }
        isScrolling = true;
    }
    var socialBlock = document.querySelector(".main .contacts  .social");
    var adrBlock = document.querySelector(".main .contacts .adr");

    function scrolling() {
        if (isPartiallyVisible(socialBlock)) {
            socialBlock.classList.add("visible");
        }
        if (isPartiallyVisible(adrBlock)) {
            adrBlock.classList.add("visible");
        }
    }

    function isPartiallyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
        var height = elementBoundary.height;
        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
};
//*******************************
//Footer section add current year
//*******************************
(function copyright() {
    var cop = document.getElementById('copyright');
    var yer = new Date().getFullYear();
    cop.innerHTML = 'Top diamond ' + yer + ' copyrigth&#9400;';
})();
document.addEventListener("DOMContentLoaded", function(){
    mailForm();
    animateScroll();
} ,false);
