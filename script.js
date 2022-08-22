function showMenu() {
    var menu = $("#dropMenu");
    menu.toggleClass("toggleDisplay");
}
$(function() {
  FODSDirectory = {
    1 : "assets/FODS/wcuFOD.png",
    2 : "assets/FODS/wcuFOD.png",
    3 : "assets/FODS/wcuFOD.png",
    4 : "assets/FODS/wcuFOD.png",
    5 : "assets/FODS/wcuFOD.png",
    6 : "assets/FODS/wcuFOD.png",
  }
    const time = new Date();
    const day = time.getDay()

    let mainBanner = $("#banner")
    mainBanner.prop("src", FODSDirectory[1]);
  
});
