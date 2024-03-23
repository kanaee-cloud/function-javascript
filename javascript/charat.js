function showCharacter(){
    var kata = "Contoh";
    var firstCharacter = kata.charAt(0); //ambil karakter pertama
    var secondCharacter = kata.charAt(1); //ambil karakter kedua

    var pesan = "Karakter pertama : " + firstCharacter + "<br>Karakter kedua : " + secondCharacter

    document.getElementById("hasil").innerHTML = pesan;
}