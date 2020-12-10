class pakArman{
    constructor(p, l, b, n, asli, palsu){
        // Penjabaran
        this.panjang = p
        this.lebar = l
        this.bayar = b = 1500000
        this.ppn = n = 15 / 100
    }
    
    luas1 = () => {
        return this.panjang * this.lebar
    }

    luas2 = () => {
        return this.panjang * this.lebar * this.bayar
    }

    luas3 = () => {
        return this.panjang * this.lebar * this.bayar * this.ppn
    }

    luas4 = () => {
        return (this.panjang * this.lebar * this.bayar) + (this.panjang * this.lebar * this.bayar * this.ppn)
    }
}
let tanah = new pakArman(20.5, 30)
console.log("Luas Tanah = " + tanah.luas1() + " m2")
console.log("harga asli = Rp " + tanah.luas2())
console.log("PPN = Rp " + tanah.luas3())
console.log("Total = Rp " + tanah.luas4())

console.log("----------------------")

let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10},
] 
let total = barang.reduce((val, element)=>{
    return val + element.harga * element.jumlah
},0)
console.log("Total belanja = Rp. " + total)

console.log("----------------------")

class rhodey{
    constructor(bb, tb){
        this.beratBadan = bb
        this.tinggiBadan = tb
    }

    BMI = () =>{
        return this.beratBadan / (this.tinggiBadan ** 2)
    }
}
let status = new rhodey(90, 1.7)
console.log("Nilai = " + status.BMI())
if (status < 18.5){
    console.log("Kurang berat badan")
}
else if(status >= 18.5 && status <= 24.9){
    console.log("Ideal")
}   
else if(status >= 25 && status <= 29.9){
    console.log("Kelebihan berat badan")
}
else{
    console.log("Obesitas")
}

console.log("----------------------")

class lingkaran{
    constructor(r){
        this.jari = r
    }
    
    luas = () =>{
        return 3.14 * (this.jari ** 2)
    }

    keliling = () =>{
        return 2 * 3.14 * this.jari
    }
}

let ling = new lingkaran(15)
console.log("Luas lingkaran = " + ling.luas())
console.log("Keliling lingkaran = " + ling.keliling())

console.log("----------------------")

class tabung extends lingkaran{
    constructor(r, t) {
        super(r)
        this.tinggiT = t
    }

    lptabung = () =>{
        return 2 * (22 / 7) * this.jari * (this.jari + this.tinggiT)
    }

    lstabung = () =>{
        return 2 * (22 / 7)* this.jari * this.tinggiT
    }

    vtabung = () =>{
        return (22 / 7) * (this.jari ** 2) * this.tinggiT
    }
}

let tbng = new tabung(7, 50)
console.log("Luas permukaan tabung = " + tbng.lptabung())
console.log("Luas selimut tabung = " + tbng.lstabung())
console.log("Volume tabung = " + tbng.vtabung())

console.log("----------------------")

class kerucut extends lingkaran{
    constructor(r, s, t) {
        super(r)
        this.pelukis = s
        this.tinggiK = t
    }

    lpkerucut = () =>{
        return 3.14 * this.jari * (this.jari + this.pelukis)
    }

    lskerucut = () =>{
        return 3.14 * this.jari * this.pelukis
    }

    vkerucut = () =>{
        return (1 / 3) * 3.14 * this.jari ** 2 * this.tinggiK
    }
}
let krct = new kerucut(10, 41.2, 50)
console.log("Luas permukaan kerucut = " + krct.lpkerucut())
console.log("Luas selimut kerucut = " + krct.lskerucut())
console.log("Volume kerucut = " + krct.vkerucut())

console.log("----------------------")

class bola extends lingkaran{
    constructor(r){
        super(r)
    }

    lpbola = () =>{
        return 4 * 3.14 * (this.jari ** 2)
    }

    vbola = () =>{
        return (4 / 3) * 3.14 * (this.jari ** 3)
    }
}

let bl = new bola(15)
console.log("Luas permukaan bola = " + bl.lpbola())
console.log("Volume bola = " + bl.vbola())