// wait for document object model to load
document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded works when the HTML document has been comepletely loaded and parsed, doesnt wait for external resorces
    // reference HTML elements with class namdes
    var moon = document.querySelector(".moon");
    var mountain = document.querySelector(".mountain");
    var stars = document.querySelector(".stars");
    var duplicate = document.querySelector(".duplicate");
    var header = document.querySelector(".header");

    //scroll event listener --> responds to change
    window.addEventListener('scroll', function() {
        //vertical scroll postion calculated
        var value = window.scrollY;

        moon.style.left = value * 0.5 + 'px';
        mountain.style.top = value * 0.15 + 'px';
        stars.style.top = value * 0.5 + 'px';
        duplicate.style.top = value * 0.5 + 'px';
        header.style.top = value * 1 + 'px';
    });
});
const scrollDist = 250; //set scroll distance

//controls footer visibility
function footerVisibility(){
    const footer = document.querySelector('.footer');
    if (window.scrollY >= scrollDist){
        footer.style.display = 'block'; //show footer
    } else{
        footer.style.display = 'none'; //dont
    }
}
// scroll event listner triggers footerVisibilty
window.addEventListener('scroll', footerVisibility);
footerVisibility(); // calls function

