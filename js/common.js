//*******************************
//img carusel in About us section
//*******************************
var imgBox = function (a) {
    var cntrL = document.querySelectorAll(a + ' .arrow')[0];
    var cntrR = document.querySelectorAll(a + ' .arrow')[1];
    var miniBox = document.querySelector(a).nextElementSibling;
    cntrL.onclick = function () {
        var images = document.querySelectorAll(a + ' a');
        var imgParnt = document.querySelector(a);
        var l = images.length;
        imgParnt.insertBefore(images[l - 1], images[0]);
        //поменять адрес в очереди миниатюр на большую
        var imgMini = miniBox.querySelectorAll('div');
        var src = images[0].getAttribute('href')
            , newSrc;
        console.log('previous', src);
        for (var i = 0; i < imgMini.length; i++) {
            newSrc = imgMini[i].getElementsByTagName('img')[0].getAttribute('src');
            if (newSrc == images[l - 1].getAttribute('href')) { // i+1 == 0
                imgMini[i].getElementsByTagName('img')[0].setAttribute('src', src);
            }
        }
    };
    cntrR.onclick = function () {
        var images = document.querySelectorAll(a + ' a');
        var imgParnt = document.querySelector(a);
        var img = imgParnt.removeChild(images[0]);
        imgParnt.appendChild(img);
        //поменять адрес в очереди миниатюр на большую
        var imgMini = miniBox.querySelectorAll('div');
        var src = img.getAttribute('href')
            , newSrc;
        console.log('next', src);
        for (var i = 0; i < imgMini.length; i++) {
            newSrc = imgMini[i].getElementsByTagName('img')[0].getAttribute('src');
            if (newSrc == images[1].getAttribute('href')) { // i+1 == 0
                imgMini[i].getElementsByTagName('img')[0].setAttribute('src', src);
            }
        }
    };
    miniBox.addEventListener('click', function (e) {
        var img = e.target;
        var imgBig = document.querySelector(a + ' a');
        var images = document.querySelectorAll(a + ' a');
        var imgParnt = document.querySelector(a);
        var l = images.length;
        var prevHref = imgBig.getAttribute('href');
        console.log('Begin');
        //если большая картинка != кликнутой, пролистать большие до неё
        while (img.getAttribute('src') !== imgBig.getAttribute('href')) {
            imgParnt.insertBefore(images[l - 1], images[0]);
            imgBig = document.querySelector('.gallery-box a');
            images = document.querySelectorAll('.gallery-box a');
        }
        //заменим миниатюру
        img.setAttribute('src', prevHref);
    });
    return imgBox;
};
//*******************************
//END img carusel in About us section
//*******************************
//*******************************
//Tab gallery in Gallery section
//*******************************
function galleryTabs() {
    var tabs = document.querySelector('.btn-list ul');
    var tabImages = document.querySelector('.gallery-tab');
    tabs.addEventListener('click', function (e) {
        var btn = e.target;
        var btnList = document.querySelectorAll('.btn-list .btn');
        var index = 0;
        if (btn.classList.contains('btn-primary')) {
            return;
        }
        else if (btn.classList.contains('btn')) {
            for (var i = 0; i < btnList.length; i++) {
                btnList[i].classList.remove('btn-primary');
            }
            btn.classList.add('btn-primary');
            index = btn.dataset.galleryTab;
        }
        //fix span target in btn
        if (btn.parentElement.classList.contains('btn-primary')) {
            return;
        }
        else if (btn.parentElement.classList.contains('btn')) {
            for (var i = 0; i < btnList.length; i++) {
                btnList[i].classList.remove('btn-primary');
            }
            btn.parentElement.classList.add('btn-primary');
            index = btn.parentElement.dataset.galleryTab;
        }
        var imgList = document.querySelectorAll('.gallery-tab>[data-gallery-tab]');
        var a;
        for (var i = 0; i < imgList.length; i++) {
            a = imgList[i].getAttribute('data-gallery-tab');
            if (a == index) {
                imgList[i].classList.add('show');
                imgList[i].classList.remove('hide');
            }
            else {
                imgList[i].classList.remove('show');
                imgList[i].classList.add('hide');
            }
        }
    });
};
//*******************************
//END tab gallery in Gallery section
//*******************************    
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
    var abLeftBlock = document.querySelector(".main .about>div:nth-child(2)");
    var abRightBlock = document.querySelector(".main .about>div:nth-child(3)");
    var listItems = document.querySelectorAll(".main .whyUs>div.col-sm-6");
    var socialBlock = document.querySelector(".main .contacts .social");
    var adrBlock = document.querySelector(".main .contacts .adr");

    function scrolling() {
        if (isPartiallyVisible(abLeftBlock)) {
            abLeftBlock.classList.add("visible");
        }
        if (isPartiallyVisible(abRightBlock)) {
            abRightBlock.classList.add("visible");
        }
        for (var i = 0; i < listItems.length; i++) {
            var listItem = listItems[i];
            if (isPartiallyVisible(listItem)) {
                listItem.classList.add("visible");
            }
        }
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
    galleryTabs();
    mailForm();
    animateScroll();
} , false);