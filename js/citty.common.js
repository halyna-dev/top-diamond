//*******************************
//img carusel in About us section
//*******************************
var imgBox = function (a) { //.cat-gallery-1
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
    var perntsLeftBlock = document.querySelector(".parents div.cat:nth-child(2)");
    var perntsRightBlock = document.querySelector(".parents div.cat:nth-child(4)");
    var cittyLeftBlock = document.querySelectorAll(".citty>div:nth-child(2)");
    var cittyRightBlock = document.querySelectorAll(".citty > div:last-child");

    function scrolling(e) {
        if (isPartiallyVisible(perntsLeftBlock)) {
            perntsLeftBlock.classList.add("visible");
        }
        if (isPartiallyVisible(perntsRightBlock)) {
            perntsRightBlock.classList.add("visible");
        }
        for (var i = 0; i < cittyLeftBlock.length; i++) {
            var elLeft = cittyLeftBlock[i];
            if (isPartiallyVisible(elLeft)) {
                elLeft.classList.add("visible");
            }
        }
        for (var i = 0; i < cittyRightBlock.length; i++) {
            var elRight = cittyRightBlock[i];
            if (isPartiallyVisible(elRight)) {
                elRight.classList.add("visible");
            }
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
    //footer copyright
    var cop = document.getElementById('copyright');
    var yer = new Date().getFullYear();
    cop.innerHTML = 'Top diamond ' + yer + ' copyrigth&#9400;';
})();
document.addEventListener("DOMContentLoaded", animateScroll, false);