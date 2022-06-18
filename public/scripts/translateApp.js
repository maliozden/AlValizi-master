
eventlisteners();

function eventlisteners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    document.getElementById("language").onchange = function(){

        ui.changeUI();
    }



}

const ui = new UI();

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
function translateWord(e){
    

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord().then(response =>{
        ui.displayTranslate(response.text[0]);
    }).catch(err =>{
        ui.displayTranslate(err);
    });

    e.preventDefault();
}