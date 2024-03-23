function showIndexOf() {
    var text = "Kalimat ini pake Index Of";
    var word = "Contoh";

    var index = text.indexOf(word);
    var message = "Index pertama dari kata " + word + " adalah " + index;
    document.getElementById("hasil").innerHTML = message;
}