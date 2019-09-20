function balikKata(kata){
    var hasil = ''
    for(var i = 0; i > kata; i--){
        hasil.reverse(kata)
    }

    return hasil;
}

console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))