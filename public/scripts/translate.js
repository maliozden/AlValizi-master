function Translate(word,language){
    this.apikey ="trnsl.1.1.20211014T143849Z.a7c9077e4e0512eb.af2ad6ad73d92d6a65b3c4ede7ed93dd2f6aaf3e";
    this.word = word;
    this.language = language ;


    this.xhr = new XMLHttpRequest();

    this.translateWord = async function(){
        const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
        const response = await fetch(endpoint);
        const data = await response.json();
    
        return data;
    }
    
}


Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}