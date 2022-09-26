const nama = "Rizky Ramdhani"// constanta = data yang tidak bisa diubah nilainya
// di JS bagusnya jika ada 2 kata pada variabel, kata kedua diawali dengan huruf kapital

let biodata = document.getElementById('biodata');


function generateBiodata() {
	let generasi;

	if (usia > 10 && usia < 18) {
		generasi = "generasi remaja";
	}
	else if (usia > 18 && usia < 30){
		generasi = "generasi dewasa";
	}
	else if (usia >= 30){
		generasi = "generasi tua";
	}
	else if (usia > 2 && usia < 10){
		generasi = "generasi anak-anak";
	}
	else {
		generasi = "generasi bayi";
	}
	return biodata.InnerHTML = generasi;
}

console.log(namaSaya);
console.log(usia);

generateBiodata();