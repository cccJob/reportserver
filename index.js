window.onload = function() {

    var img = document.querySelectorAll("img");
    for (var i = 0, len = img.length; i < len; i++) {
        img[i].addEventListener("click", function() {
            var that = this;
            var classList = that.classList;
            if(!classList.contains("active")){
                classList.add("active");
            }else{
                classList.remove("active");
            }

        }, false);
    }

}
