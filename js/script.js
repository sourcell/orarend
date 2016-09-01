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
	document.getElementById("sor8")
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
	document.getElementById("targy8")
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
	document.getElementById("terem8")
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
	document.getElementById("kezdes8")
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
	document.getElementById("vege8")
];

var hetfo = {
	orakszama: 7,

	targy: [
		"", "Angol", "Német", "Tesi", "Fizika", "Matek", "Kémia", "OFŐ"
	],

	terem: [
		"", "13", "13", "T", "F", "16", "K", "13"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55
		]
	}
};

var kedd = {
	orakszama: 7,

	targy: [
		"", "Angol", "Magyar", "Ének", "Infó", "Töri", "Magyar", "Föci"
	],

	terem: [
		"", "13", "13", "É", "I", "13", "13", "F"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55
		]
	}
};

var szerda = {
	orakszama: 6,

	targy: [
		"", "Fizika", "Német", "Matek", "Angol", "Tesi", "Töri"
	],

	terem: [
		"", "F", "13", "1", "F", "T", "13"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55
		]
	}
};

var csutortok = {
	orakszama: 6,

	targy: [
		"", "Angol", "Angol", "Német", "Biosz", "Magyar", "Matek"
	],

	terem: [
		"", "F", "F", "3", "K", "13", "13"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55
		]
	}
};

var pentek = {
	orakszama: 7,

	targy: [
		"", "Föci", "Kémia", "Fizika", "Biosz", "Töri", "Tesi", "Magyar"
	],

	terem: [
		"", "F", "K", "F", "K", "13", "T", "13"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55
		]
	}
};


if(now.getDay() == 1){nap = hetfo;}else
if(now.getDay() == 2){nap = kedd;}else
if(now.getDay() == 3){nap = szerda;}else
if(now.getDay() == 4){nap = csutortok;}else
if(now.getDay() == 5){nap = pentek;}else{nap = pentek;}


for(var i = 1; i <= nap.orakszama; i++){
	targy[i].innerHTML = nap.targy[i];
	terem[i].innerHTML = nap.terem[i];
}


setInterval(function(){
now = new Date();

for(var i = 1; i <= nap.orakszama; i++){

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





