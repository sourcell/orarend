var now = new Date();
var kezdesKulonbseg;
var vegeKulonbseg;
var nap;

var sor = [
	"",
	document.getElementById("sor1"),
	document.getElementById("sor2"),
	document.getElementById("sor3"),
	document.getElementById("sor4"),
	document.getElementById("sor5"),
	document.getElementById("sor6"),
	document.getElementById("sor7"),
	document.getElementById("sor8"),

	document.getElementById("sor10"),
	document.getElementById("sor11"),
	document.getElementById("sor12"),
	document.getElementById("sor13"),
	document.getElementById("sor14"),
	document.getElementById("sor15"),
	document.getElementById("sor16"),
	document.getElementById("sor17"),
];

var sorszam = [
	"",
	document.getElementById("sorszam1"),
	document.getElementById("sorszam2"),
	document.getElementById("sorszam3"),
	document.getElementById("sorszam4"),
	document.getElementById("sorszam5"),
	document.getElementById("sorszam6"),
	document.getElementById("sorszam7"),
	document.getElementById("sorszam8"),
	document.getElementById("sorszam9"),

	document.getElementById("sorszam10"),
	document.getElementById("sorszam11"),
	document.getElementById("sorszam12"),
	document.getElementById("sorszam13"),
	document.getElementById("sorszam14"),
	document.getElementById("sorszam15"),
	document.getElementById("sorszam16"),
	document.getElementById("sorszam17"),
	document.getElementById("sorszam18")
];

var targy = [
	"",
	document.getElementById("targy1"),
	document.getElementById("targy2"),
	document.getElementById("targy3"),
	document.getElementById("targy4"),
	document.getElementById("targy5"),
	document.getElementById("targy6"),
	document.getElementById("targy7"),
	document.getElementById("targy8"),

	document.getElementById("targy10"),
	document.getElementById("targy11"),
	document.getElementById("targy12"),
	document.getElementById("targy13"),
	document.getElementById("targy14"),
	document.getElementById("targy15"),
	document.getElementById("targy16"),
	document.getElementById("targy17")
];

var terem = [
	"",
	document.getElementById("terem1"),
	document.getElementById("terem2"),
	document.getElementById("terem3"),
	document.getElementById("terem4"),
	document.getElementById("terem5"),
	document.getElementById("terem6"),
	document.getElementById("terem7"),
	document.getElementById("terem8"),

	document.getElementById("terem10"),
	document.getElementById("terem11"),
	document.getElementById("terem12"),
	document.getElementById("terem13"),
	document.getElementById("terem14"),
	document.getElementById("terem15"),
	document.getElementById("terem16"),
	document.getElementById("terem17")
];

var kezdes = [
	"",
	document.getElementById("kezdes1"),
	document.getElementById("kezdes2"),
	document.getElementById("kezdes3"),
	document.getElementById("kezdes4"),
	document.getElementById("kezdes5"),
	document.getElementById("kezdes6"),
	document.getElementById("kezdes7"),
	document.getElementById("kezdes8"),

	document.getElementById("kezdes10"),
	document.getElementById("kezdes11"),
	document.getElementById("kezdes12"),
	document.getElementById("kezdes13"),
	document.getElementById("kezdes14"),
	document.getElementById("kezdes15"),
	document.getElementById("kezdes16"),
	document.getElementById("kezdes17")
];

var vege = [
	"",
	document.getElementById("vege1"),
	document.getElementById("vege2"),
	document.getElementById("vege3"),
	document.getElementById("vege4"),
	document.getElementById("vege5"),
	document.getElementById("vege6"),
	document.getElementById("vege7"),
	document.getElementById("vege8"),

	document.getElementById("vege10"),
	document.getElementById("vege11"),
	document.getElementById("vege12"),
	document.getElementById("vege13"),
	document.getElementById("vege14"),
	document.getElementById("vege15"),
	document.getElementById("vege16"),
	document.getElementById("vege17")
];

var hetfo = {
	orakszama: 9,

	targy: [
		"", "Fizika", "Matek", "Német", "Magyar", "Kémia", "K. Angol", "OFŐ", "2x Tesi",
		"Fizika", "Német", "Matek", "Magyar", "Kémia", "H. Angol", "OFŐ", "2x Tesi"
	],

	terem: [
		"", "F", "14", "R", "4", "K", "4", "4", "T",
		"F", "4", "3", "4", "K", "1", "4", "T"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0,
			0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 16,
			8, 9, 10, 11, 12, 13, 14, 16
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 50, 45,
			45, 45, 45, 45, 50, 55, 50, 45
		]
	}
};

var kedd = {
	orakszama: 7,

	targy: [
		"", "Matek", "Civil", "Német", "Tesi", "Biosz", "Töri", "Föci", "-",
		"Német", "Német", "Matek", "Tesi", "Biosz", "Föci", "Töri", "-"
	],

	terem: [
		"", "16", "9", "5", "T", "K", "4", "14", "-",
		"4", "4", "4", "T", "K", "14", "4", "-"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0,
			0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 50, 45,
			45, 45, 45, 45, 50, 55, 50, 45
		]
	}
};

var szerda = {
	orakszama: 7,

	targy: [
		"", "Kémia", "Magyar", "Ének", "Német", "Matek", "Fizika", "K. Angol", "-",
		"Kémia", "Magyar", "Ének", "Matek", "Civil", "Fizika", "H. Angol", "-"
	],

	terem: [
		"", "K", "R", "É", "8", "4", "F", "8", "-",
		"K", "R", "É", "1", "7", "F", "7", "-"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0,
			0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 50, 45,
			45, 45, 45, 45, 50, 55, 50, 45
		]
	}
};

var csutortok = {
	orakszama: 7,

	targy: [
		"", "Föci", "Töri", "Német", "Német", "K. Angol", "K. Angol", "Tesi", "-",
		"Töri", "Föci", "Német", "Német", "H. Angol", "H. Angol", "Tesi", "-"
	],

	terem: [
		"", "14", "4", "4", "4", "11", "10", "T", "-",
		"4", "14", "R", "F", "4", "4", "T", "-"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0,
			0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 50, 45,
			45, 45, 45, 45, 50, 55, 50, 45
		]
	}
};

var pentek = {
	orakszama: 6,

	targy: [
		"", "Tesi", "Német", "Magyar", "Magyar", "Biosz", "Média", "-", "-",
		"Tesi", "Német", "Magyar", "Magyar", "Biosz", "Média", "-", "-"
	],

	terem: [
		"", "T", "16", "4", "4", "K", "5", "-", "-",
		"T", "5", "4", "4", "K", "5", "-", "-"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0,
			0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15,
			8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55, 45,
			45, 45, 45, 45, 50, 55, 55, 45
		]
	}
};


if(now.getDay() == 1){nap = hetfo;}else
if(now.getDay() == 2){nap = kedd;}else
if(now.getDay() == 3){nap = szerda;}else
if(now.getDay() == 4){nap = csutortok;}else
if(now.getDay() == 5){nap = pentek;}else{nap = pentek;}


for(var i = 1; i <= 16; i++){
	targy[i].innerHTML = nap.targy[i];
	terem[i].innerHTML = nap.terem[i];
}


setInterval(function(){
now = new Date();

for(var i = 1; i <= 16; i++){

	kezdesKulonbseg = (nap.kezdes.ora[i]*100 + nap.kezdes.perc[i]) - (now.getHours()*100 + now.getMinutes());
	vegeKulonbseg = (nap.vege.ora[i]*100 + nap.vege.perc[i]) - (now.getHours()*100 + now.getMinutes());

	// több mint 60 perc múlva kezdődik - Fehér
	if(kezdesKulonbseg > 100){
		if(nap.kezdes.perc[i] == "0"){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + "00";
		}else if(nap.kezdes.perc[i] == "5"){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + "05";
		}else{
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + nap.kezdes.perc[i];
		}

		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];
		sor[i].style.color = "#ECF0F1";
	}

	// 60 percen belül kezdődik - Fehér + visszaszámlálás  <--- Fixed?
	if(kezdesKulonbseg <= 100 && kezdesKulonbseg >= 1){
		if(now.getMinutes() >= nap.kezdes.perc[i]){
			kezdes[i].innerHTML = 60 + nap.kezdes.perc[i] - now.getMinutes() + "'";
		}else{
			kezdes[i].innerHTML = nap.kezdes.perc[i] - now.getMinutes() + "'";
		}

		//kezdes[i].innerHTML = kezdesKulonbseg + "'";
		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];
		sor[i].style.color = "#ECF0F1";
	}

	// elkezdődött, de nincs vége - Sárga
	if(kezdesKulonbseg <= 0 && vegeKulonbseg >= 1){
		kezdes[i].innerHTML = "...";
		vege[i].innerHTML = vegeKulonbseg + "'";
		sor[i].style.color = "#F39C12";
	}

	// már vége - Zöld
	if(vegeKulonbseg <= 0){
		if(nap.kezdes.perc[i] == "0"){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + "00";
		}else if(nap.kezdes.perc[i] == "5"){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + "05";
		}else{
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + nap.kezdes.perc[i];
		}

		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];
		sor[i].style.color = "#2ECC71";
	}
}

}, 1000);





