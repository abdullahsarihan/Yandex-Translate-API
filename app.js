// Prototype, Ajax, Callback

eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("change", translateWord)
    //Change
    document.getElementById("language").onchange = function () {
        // Arayüz işlemleri
        console.log("Event")
        ui.changeUI();
        ui.displayTranslate();
    }
}
const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value)
const ui = new UI();

function translateWord(e) {

    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value)
    translate.translateWord(function(err,response){
        if(err) {
            // Hata
            console.log(err);
        }
        else {
            ui.displayTranslate(response);
        }
    });

    e.preventDefault(); // Sayfanın yenilenmesini engellemek için
}