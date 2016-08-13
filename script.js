var now = new Date();

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
	targy: [
		"", "Hetfo", "Hetfo", "Hetfo", "Hetfo", "Hetfo", "Hetfo", "Hetfo", "Hetfo"
	],

	terem: [
		"", "2", "4", "6", "8", "10", "12", "14", "16"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55, 45
		]
	}
};

var kedd = {
	targy: [
		"", "Kedd", "Kedd", "Kedd", "Kedd", "Kedd", "Kedd", "Kedd", "Kedd"
	],

	terem: [
		"", "2", "4", "6", "8", "10", "12", "14", "16"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55, 45
		]
	}
};

var szerda = {
	targy: [
		"", "Szerda", "Szerda", "Szerda", "Szerda", "Szerda", "Szerda", "Szerda", "Szerda"
	],

	terem: [
		"", "2", "4", "6", "8", "10", "12", "14", "16"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55, 45
		]
	}
};

var csutortok = {
	targy: [
		"", "Csutortok", "Csutortok", "Csutortok", "Csutortok", "Csutortok", "Csutortok", "Csutortok", "Csutortok"
	],

	terem: [
		"", "2", "4", "6", "8", "10", "12", "14", "16"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55, 45
		]
	}
};

var pentek = {
	targy: [
		"", "Pentek", "Pentek", "Pentek", "Pentek", "Pentek", "Pentek", "Pentek", "Pentek"
	],

	terem: [
		"", "2", "4", "6", "8", "10", "12", "14", "16"
	],

	kezdes: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],
		
		perc: [
			"", 0, 0, 0, 0, 5, 10, 10, 0
		]
	},

	vege: {
		ora: [
			"", 8, 9, 10, 11, 12, 13, 14, 15
		],

		perc: [
			"", 45, 45, 45, 45, 50, 55, 55, 45
		]
	}
};


if(now.getDay() == 1){var nap = hetfo;}
if(now.getDay() == 2){var nap = kedd;}
if(now.getDay() == 3){var nap = szerda;}
if(now.getDay() == 4){var nap = csutortok;}
if(now.getDay() == 5 || now.getDay() == 6 || now.getDay() == 0){var nap = pentek;}


for(var i = 0; i <= 8; i++){
	targy[i].innerHTML = nap.targy[i];
	terem[i].innerHTML = nap.terem[i];
}


setInterval(function(){
now = new Date();

for(var i = 1; i <= 8; i++){
	// 1 órán belül elkezdődik
	if(now.getHours() == nap.kezdes.ora[i] - 1 && now.getMinutes() > nap.kezdes.perc[i]){
		kezdes[i].innerHTML = 60 + nap.kezdes.perc[i] - now.getMinutes() + "'";
		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];
	}

	// az óra ugyanaz de a perc még nem - FEHÉR
	if(now.getHours() == nap.kezdes.ora[i] && now.getMinutes() < nap.kezdes.perc[i]){
		kezdes[i].innerHTML = nap.kezdes.perc[i] - now.getMinutes() + "'";
		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];

	}
	
	// több mint 1 órán belül kezdődik - FEHÉR
	if(now.getHours() < nap.kezdes.ora[i] - 1){
		if(nap.kezdes.perc[i] == 0){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":00";
		}else if(nap.kezdes.perc[i] == 5){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":05";
		}else{
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + nap.kezdes.perc[i];
		}
		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];
	}
	
	// elkezdődött de még nincs vége - NARANCSSÁRGA
	if(now.getHours() == nap.kezdes.ora[i] && now.getMinutes() >= nap.kezdes.perc[i] && now.getMinutes() < nap.vege.perc[i]){
		kezdes[i].innerHTML = "->";
		sor[i].style.color = "#f39c12";

		vege[i].innerHTML = nap.vege.perc[i] - now.getMinutes() + "'";

	}

	// már vége - ZÖLD
	if(now.getHours() == nap.kezdes.ora[i] && now.getMinutes() >= nap.vege.perc[i] || now.getHours() > nap.vege.ora[i]){
		if(nap.kezdes.perc[i] == 0){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":00";
		}else if(nap.kezdes.perc[i] == 5){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":05";
		}else{
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + nap.kezdes.perc[i];
		}

		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];
		sor[i].style.color = "#2ecc71";
	}
}

}, 1000);
