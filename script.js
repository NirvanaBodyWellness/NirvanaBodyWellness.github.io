const ogHeight = document.getElementsByClassName("title-overlay-container")[0].offsetHeight;
console.log(ogHeight)
document.addEventListener("scroll", function () {

    let titleContainer = document.querySelector(".title-overlay-container");
    let scrollTop = window.scrollY;
    console.log(scrollTop)
    if (scrollTop > 50 && scrollTop < 330) {
        titleContainer.style.height = ogHeight - scrollTop;
    } else if(scrollTop > 330) {
        1+1;
    } else {
        titleContainer.style.height = "50vh";
    }
});
