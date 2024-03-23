// Fungsi untuk mengambil dan menampilkan elemen berdasarkan nama tag
function getElementsByTagName() {
    const paragraphs = document.getElementsByTagName('p'); // Mengambil semua elemen <p>

    const outputList = document.getElementById('outputList');
    outputList.innerHTML = '';  // Mengosongkan daftar output
    for (let i = 0; i < paragraphs.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = paragraphs[i].textContent;
        outputList.appendChild(listItem);
    }
}

// Menambahkan event listener klik pada tombol
const getElementButton = document.getElementById('getElementButton');
getElementButton.addEventListener('click', getElementsByTagName);   