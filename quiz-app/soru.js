function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hansı javascript paket idarəetmə proqramıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hansı frontend çərçivəsində nəzərə alınmır?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Soru("3-Hansı backend hesab olunur?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hansı javascript proqramlaşdırma dilindən istifadə etmir?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];