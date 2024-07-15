// ini javascript
// ambil value input
const inputradio1 = document.getElementById("section-man");
const inputradio2 = document.getElementById("section-woman");
const berat = document.getElementById("beratbadan")
const usia = document.getElementById("usia")
const tinggi = document.getElementById("tinggi")

var bmi;

bmi = berat / tinggi *Math.sqrt(2);
