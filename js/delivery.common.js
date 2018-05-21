//*******************************
//Footer section add current year
//*******************************
(function copyright() {
    var cop = document.getElementById('copyright');
    var yer = new Date().getFullYear();
    cop.innerHTML = 'Top diamond ' + yer + ' copyrigth&#9400;';
})();