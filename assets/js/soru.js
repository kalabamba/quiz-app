function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
new Soru("1- Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm", d: "Gulp"}, "c"),
new Soru("2- Hangisi frontend kapasamında değerlendirilmez?", {a: "css", b: "html", c: "javascript", d: "sql"}, "d"),
new Soru("3- Hangisi backend kapasamında değerlendirilmez?", {a: "node.js", b: "Typescript", c: "angular", d: "react"}, "a"),
new Soru("4- Hangisi javascript programlama dilini kullanmaz?", {a: "react", b: "angular", c: "vue.js", d: "asp.net"}, "d")

];