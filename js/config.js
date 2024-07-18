// ini javascript
// ambil value input
// const inputradio1 = document.getElementById("section-man");
// const inputradio2 = document.getElementById("section-woman");

function showalert(){
//  ambil value input html   
    const berat = document.getElementById('berat').value;
    const usia = document.getElementById('usia').value;
    const tinggi = document.getElementById('tinggi').value;

    // validasi
    if(berat===""){
        document.getElementById('berat').style.border = "2px solid red";
        alert("mohon isi berat badan anda");
        Event.preventDevault();
    }
    if(usia===""){
        document.getElementById('usia').style.border = "2px solid red";
        alert("mohon isi usia anda");
        Event.preventDevault();
    }
    if(tinggi===""){
        document.getElementById('tinggi').style.border = "2px solid red";
        alert("mohon isi tinggi badan anda");
        Event.preventDevault();
    }

    // anchor scroll untuk mobile
    if(window.innerWidth <=700){
        const links = document.querySelectorAll('a[href^="#"]');

    }


    // convert meter ke cm
    const cmtinggi = tinggi / 100;
    
    // hitung bmi
    let bmi = berat / (cmtinggi * cmtinggi); 
    const fixbmi = bmi.toFixed(1); 
    
    const kata2 = "Anda memiliki";

    document.getElementById('perhitungan').innerHTML = fixbmi;
    
    // logic konklusi hasil berdasarkan bmi
    if(fixbmi < 18.5){
        document.getElementById('khitung').innerHTML = "Kekurangan Berat Badan";
        document.getElementById('konklusi').innerHTML = kata2 + " Kekurangan Berat Badan";
        document.getElementById('judul-hasil').innerHTML = "Hasil Bmi Kurang Dari 18.5";
        document.getElementById('konklusi-hasil').innerHTML = "Individu dengan BMI di bawah 18.5 sering kali dianggap kurang berat badan. Kondisi ini dapat menunjukkan kekurangan nutrisi atau kurangnya massa otot.";
        document.getElementById('hasil-final').innerHTML = "Kurang Berat Badan";
        document.getElementById('penyakit-hasil').innerHTML = "Risiko osteoporosis, kelemahan imunitas, gangguan reproduksi, masalah pertumbuhan pada remaja".replace(/, /g,'<br>');
    }

    else if (fixbmi >= 18.5 && fixbmi <= 24.9){
        document.getElementById('khitung').innerHTML = "Berat Badan Normal";
        document.getElementById('konklusi').innerHTML = kata2 + " Berat Badan Normal";
        document.getElementById('judul-hasil').innerHTML ="Hasil Bmi Antara 18.5 & 24.9";
        document.getElementById('konklusi-hasil').innerHTML = "BMI antara 18.5 hingga 24.9 dianggap sebagai rentang berat badan yang sehat dan ideal untuk sebagian besar orang dewasa.";
        document.getElementById('hasil-final').innerHTML = "Normal/Ideal";
        document.getElementById('penyakit-hasil').innerHTML = "Potensi penyakit yang rendah";
    }

    else if (fixbmi >= 25.0 && fixbmi <= 29.9){
        document.getElementById('khitung').innerHTML = "Berat Badan Berlebih";  
        document.getElementById('konklusi').innerHTML = kata2 + " Berat Badan Berlebih";
        document.getElementById('judul-hasil').innerHTML ="Hasil Bmi Antara 25.0 & 29.9";
        document.getElementById('konklusi-hasil').innerHTML = "Individu dengan BMI antara 25.0 hingga 29.9 dianggap memiliki kelebihan berat badan.";
        document.getElementById('hasil-final').innerHTML = "Kelebihan Berat Badan";
        document.getElementById('penyakit-hasil').innerHTML = "Meningkatnya risiko penyakit jantung, diabetes tipe 2, tekanan darah tinggi, stroke".replace(/, /g,'<br>');
    }

    else if (fixbmi >= 30.0){
        document.getElementById('khitung').innerHTML = "Obesitas";
        document.getElementById('konklusi').innerHTML = kata2 + " Obesitas";
        document.getElementById('judul-hasil').innerHTML ="Hasil Bmi Lebih Dari 30.0";
        document.getElementById('konklusi-hasil').innerHTML = "Obesitas terjadi saat BMI mencapai 30.0 atau lebih. Ini menunjukkan adanya kadar lemak tubuh yang berlebihan";
        document.getElementById('hasil-final').innerHTML = "Obesitas";
        document.getElementById('penyakit-hasil').innerHTML = "Risiko yang signifikan untuk penyakit jantung koroner, diabetes tipe 2, hipertensi, osteoartritis, gangguan tidur".replace(/, /g,'<br>');

    }

   

    // state button hasil setelah jalankan function
        document.getElementById('download-hasil').style.display = 'inline-block';
        document.getElementById('konsulgizi').style.display = 'inline-block';
        document.getElementById('regisgizi').style.display = 'inline-block';
        document.getElementById('konsulgizi2').style.display = 'inline-block';
        document.getElementById('regisgizi2').style.display = 'inline-block';
}
// button reset
function reset(){
    document.getElementById('berat').innerHTML = "";
    document.getElementById('usia').innerHTML = "";
    document.getElementById('tinggi').innerHTML = "";
}

function removealert(){
    if (berat.value !== "") {
        berat.style.border = "";
    }
    if (usia.value !== "") {
        usia.style.border = "";
    }
    if (tinggi.value !== "") {
        tinggi.style.border = "";
    }
}