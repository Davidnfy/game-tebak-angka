const angkaRandom = Math.floor(Math.random() * 100) + 1;
const inputan = document.getElementById('inputan');
const pesan = document.getElementById('pesan');
let percobaan = 0;
function periksaInputan() {
    percobaan++;

const inputan_user = parseInt(inputan.value);
if (inputan_user === angkaRandom) {
    pesan.textContent = `Selamat! Anda menebak angka yang benar (${angkaRandom}) dengan ${percobaan} tebakan.`;
    pesan.style.color = 'white';
    inputan.disabled = true;
} else if (inputan_user < angkaRandom) {
    pesan.textContent = 'Tebakan Anda terlalu kecil, coba lagi.';
    pesan.style.color = 'red';

} else if (inputan_user > angkaRandom) {
    pesan.textContent = 'Tebakan Anda terlalu tinggi, coba lagi.';
    pesan.style.color = 'red';
}
inputan.value ='';
inputan.focus();
}

