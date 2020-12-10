// Objek

let siswa1 = {
    nama: "Suneo",
    nis: "101",
    jurusan: "RPL"
}

let siswa2 = {
    nama: "Jeko",
    nis: "102",
    jurusan: "tkj"
}

console.log("Nama Siswa 1 = " + siswa1.nama); //siswa1
siswa1.nama = "Nobita"
console.log("Nama Siswa 1 = " + siswa1.nama);
console.log("Nis Siswa 1 = " + siswa1.nis);
console.log("Jurusan Siswa 1 = " + siswa1.jurusan);

console.log("Nama Siswa 2 = " + siswa2.nama); //siswa2
console.log("Nis Siswa 2 = " + siswa2.nis);
console.log("Jurusan Siswa 2 = " + siswa2.jurusan);

console.log("------------------------");
// Array

let jurusan = ["Rekayasa Perangkat Lunak", "Teknik Komputer dan Jaringan"]
let tingkat_kelas = [10, 11, 12]
let siswa = [
    // Objek 1
    {
        nama: "Rudi", jurusan: "RPL"
    },
    // Objek 2
    {
        nama: "Ta", jurusan: "TKJ"
    },
    // Objek 3
    {
        nama: "Budi", jurusan: "RPL"
    }
]

console.log("Jumlah jurusan = " + jurusan.length);
console.log("Jumlah tingkat_jurusan = " + tingkat_kelas.length);
console.log("Jumlah siswa = " + siswa.length);

// Array Push
let kota = ["Malang", "Surabaya", "Jogja"]

console.log("Isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

kota.push("Banyuwangi");

console.log("Isi array kota saat ini");
console.log(kota);
console.log("Jumlah data = " + kota.length)

// Penambahan Array Pada Objek
let barang = [
    {nama: "Rinso", harga: 5000},
    {nama: "Minyak", harga: 12000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah barang = " + barang.length);

barang.push(
    {nama: "Molto", harga: 10000}
)
console.log("Isi barang saat ini");
console.log(barang);
console.log("Jumlah barang = " + barang.length);

// Menghapus data pada array
let org = [
    'Ana', 'Siti', 'Tony', 'Ika', 'Heri', 'Jon'
]
console.log("Jumlah = " + org.length);
org.splice(2, 1);
console.log("Jumlah terbaru = " + org.length);
console.log(org);

// Menampilkan data pada objek
let murid = [
    {nama_depan: "To", nama_belakang: "ni"},
    {nama_depan: "Her", nama_belakang: "man"},
    {nama_depan: "A", nama_belakang: "sep"}
]

murid.map(
    (sis, index) => {
        console.log(sis.nama_depan + sis.nama_belakang);
    }
)

console.log("------------------------");

// Operator
let a = 2, b = 5, c = 10
console.log("a + b = " + (a+b));
console.log("a - b = " + (a-b));
console.log("a * b = " + (a*b));
console.log("c / a = " + (c/a));
console.log("b % a = " + (b%a));
console.log("a ** b = " + (a**b));

console.log("------------------------");

// Operator Perbandingan
let d = 5, e = 10, f = "5"
console.log("d == f -> " + (d==f));
console.log("d === f -> " + (d===f));
console.log("d != f -> " + (d!=f));
console.log("d !== f -> " + (d!==f));
console.log("a > b -> " + (d>e));
console.log("a >= b -> " + (d>=e));
console.log("a < b -> " + (d<e));
console.log("a <= b -> " + (d<=e));

console.log("------------------------");

// Percabangan
let tahun = 2020
if (tahun % 4 == 0){
    console.log(tahun + " adalah tahun kabisat ");
}
else{
    console.log(tahun + " bukan tahun kabisat ")
}

let nilai = 59
if (nilai > 80){
    console.log("Excellent")
}
else if (nilai <= 80 && nilai > 70){
    console.log("Good")
}
else if (nilai <= 70 && nilai > 60){
    console.log("Bad")
}
else{
    console.log("PEKOK")
}

console.log("------------------------");

// Perulangan
for (let index = 1; index <= 10; index++){
    console.log("Perulangan ke- " + index)
}

let arek = {
    nm: "Asep",
    jr: "RPL",
    almt: "Neraka",
    umr: "1000"
}
for (key in arek){
    console.log(key)
}

let setan = ["Dajjal", "Ajajil", "Tukang PHP", "Yajud", "Majud"]
for (stn in setan){
    console.log(setan);
}

console.log("------------------------");

// While loop
let laptop = ["asus", "hp", "rog", "acer"]
let i = 0
while(laptop[i]){
    console.log(laptop[i])
    i++
}

// do, while loop
let kamera = ["canon", "nikon", "sony"]
let j = 0
do{
    console.log(kamera[j])
    j++
}while(kamera[j])

console.log("------------------------");

// Fungsi
luasLingkaran = (r) =>{
    return 3.14 * (r ** 2)
}
console.log("Luas lingkaran adalah " + luasLingkaran(10))

console.log("------------------------");

// Sebuah Kelas
class persegiPanjang{
    constructor(p, l){
        // atribut disefinisikan di kelas constructor
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}
let tanah = new persegiPanjang(10, 20)
console.log("Luas tanah = " + tanah.luas())
console.log("Keliling tanah = " + tanah.keliling())

// Pewarisan

class Balok extends persegiPanjang{
    constructor(p, l, t){
        super(p, l)
        this.tinggi = t
    }

    luas = () =>{
        return (2 * this.panjang * this.lebar) + (2 * this.panjang * this.tinggi) + (2 * this.tinggi * this.lebar)
    }

    volume = () =>{
        return this.panjang * this.lebar * this.tinggi
    }
}

let lemari = new Balok(10, 20, 30)
console.log("Luas lemari = " + lemari.luas())
console.log("Volume lemari = " + lemari.volume())

// JSON
let pangan = [
    {nama: "beras", harga: 12000, jumlah: 5},
    {nama: "minyak", harga: 5000, jumlah: 2}
]
console.log(JSON.stringify(pangan));