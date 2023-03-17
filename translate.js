function Translate(word,language){
    this.apikey = "trnsl.1.1.20210626T090024Z.3d570b2225887eae.6763c330bbf21a1facb4194cdf67b1a03e1aa42d"
    this.word = word;
    this.language = language;

    // XHR onject

    this.xhr = new XMLHttpRequest();
}
Translate.prototype.translateWord = function(callback) {
    // Ajax İşlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint,true);

    this.xhr.onload = () =>{
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text);
        }else {
            callback("Bir hata oluştu",null);
        }

    }

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}