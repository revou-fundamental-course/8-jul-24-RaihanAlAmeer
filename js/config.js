// ini javascript
// ambil value input
// const inputradio1 = document.getElementById("section-man");
// const inputradio2 = document.getElementById("section-woman");


function showalert(){
//  ambil value input html   
    const berat = document.getElementById('berat').value;
    const usia = document.getElementById('usia').value;
    const tinggi = document.getElementById('tinggi').value;

    // convert meter ke cm
    const cmtinggi = tinggi / 100;
    
    // hitung vmi
    let bmi = berat / (cmtinggi * cmtinggi); 
    let fixbmi = bmi.toFixed(1); 

 document.getElementById('perhitungan').innerHTML = fixbmi;

    

}