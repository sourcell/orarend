var now = new Date();

var sor = [
	"",
	document.getElementById("sor1"),
	document.getElementById("sor2"),
	document.getElementById("sor3"),
	document.getElementById("sor4"),
];

var targy = [
	"",
	document.getElementById("targy1"),
	document.getElementById("targy2"),
	document.getElementById("targy3"),
	document.getElementById("targy4"),
];

var terem = [
	"",
	document.getElementById("terem1"),
	document.getElementById("terem2"),
	document.getElementById("terem3"),
	document.getElementById("terem4"),	
];

var kezdes = [
	"",
	document.getElementById("kezdes1"),
	document.getElementById("kezdes2"),
	document.getElementById("kezdes3"),
	document.getElementById("kezdes4"),
];

var vege = [
	"",
	document.getElementById("vege1"),
	document.getElementById("vege2"),
	document.getElementById("vege3"),
	document.getElementById("vege4")
];

var hetfo = {
	targy: [
		"", "Angol", "Matek", "Nemet", "Nyelvtan"
	],

	terem: [
		"", "2", "4", "6", "8"
	],

	kezdes: {
		ora: [
			"", 20, 21, 22, 23
		],
		
		perc: [
			"", 0, 0, 0, 0
		]
	},

	vege: {
		ora: [
			"", 20, 21, 22, 23
		],

		perc: [
			"", 45, 45, 45, 45
		]
	}
};

var kedd = {
	targy: [
		"", "Angol", "Matek", "Nemet", "Nyelvtan"
	],

	terem: [
		"", "2", "4", "6", "8"
	],

	kezdes: {
		ora: [
			"", 20, 20, 20, 20
		],
		
		perc: [
			"", 0, 2, 4, 5
		]
	},

	vege: {
		ora: [
			"", 20, 19, 19, 19
		],

		perc: [
			"", 1, 3, 5, 7
		]
	}
};

var szerda = {
	targy: [
		"", "Angol", "Matek", "Nemet", "Nyelvtan"
	],

	terem: [
		"", "2", "4", "6", "8"
	],

	kezdes: {
		ora: [
			"", 20, 20, 20, 20
		],
		
		perc: [
			"", 0, 2, 4, 5
		]
	},

	vege: {
		ora: [
			"", 20, 19, 19, 19
		],

		perc: [
			"", 1, 3, 5, 7
		]
	}
};

var csutortok = {
	targy: [
		"", "Angol", "Matek", "Nemet", "Nyelvtan"
	],

	terem: [
		"", "2", "4", "6", "8"
	],

	kezdes: {
		ora: [
			"", 20, 20, 20, 20
		],
		
		perc: [
			"", 0, 2, 4, 5
		]
	},

	vege: {
		ora: [
			"", 20, 19, 19, 19
		],

		perc: [
			"", 1, 3, 5, 7
		]
	}
};

var pentek = {
	targy: [
		"", "Angol", "Matek", "Nemet", "Nyelvtan"
	],

	terem: [
		"", "2", "4", "6", "8"
	],

	kezdes: {
		ora: [
			"", 20, 20, 20, 20
		],
		
		perc: [
			"", 35, 41, 47, 53
		]
	},

	vege: {
		ora: [
			"", 20, 20, 20, 20
		],

		perc: [
			"", 40, 46, 52, 58
		]
	}
};

for(var i = 1; i <= 4; i++){
	if(now.getDay() == 1){
		targy[i].innerHTML = hetfo.targy[i];
		terem[i].innerHTML = hetfo.terem[i];
	}else if(now.getDay() == 2){
		targy[i].innerHTML = kedd.targy[i];
		terem[i].innerHTML = kedd.terem[i];
	}else if(now.getDay() == 3){
		targy[i].innerHTML = szerda.targy[i];
		terem[i].innerHTML = szerda.terem[i];
	}else if(now.getDay() == 4){
		targy[i].innerHTML = csutortok.targy[i];
		terem[i].innerHTML = csutortok.terem[i];
	}else if(now.getDay() == 5){
		targy[i].innerHTML = pentek.targy[i];
		terem[i].innerHTML = pentek.terem[i];
	}	
}

setInterval(function(){
now = new Date();

if(now.getDay() == 1){nap = hetfo;}
if(now.getDay() == 2){nap = kedd;}
if(now.getDay() == 3){nap = szerda;}
if(now.getDay() == 4){nap = csutortok;}
if(now.getDay() == 5){nap = pentek;}

for(var i = 1; i <= 4; i++){
	// 1 órán belül elkezdődik
	if(now.getHours() == nap.kezdes.ora[i] - 1 && now.getMinutes() > nap.kezdes.perc[i]){
		kezdes[i].innerHTML = 60 + nap.kezdes.perc[i] - now.getMinutes() + "'";
		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];

	// az óra ugyanaz de a perc még nem
	}else if(now.getHours() == nap.kezdes.ora[i] && now.getMinutes() < nap.kezdes.perc[i]){
		kezdes[i].innerHTML = nap.kezdes.perc[i] - now.getMinutes() + "'";
		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];


	// több mint 1 órán belül kezdődik
	}else if(now.getHours() < nap.kezdes.ora[i] - 1){
		if(nap.kezdes.perc[i] == 0){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":00";
		}else if(nap.kezdes.perc[i] == 5){
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":05";
		}else{
			kezdes[i].innerHTML = nap.kezdes.ora[i] + ":" + nap.kezdes.perc[i];
		}
		vege[i].innerHTML = nap.vege.ora[i] + ":" + nap.vege.perc[i];

	// elkezdődött de még nincs vége
	}else if(now.getHours() == nap.kezdes.ora[i] && now.getMinutes() >= nap.kezdes.perc[i] && now.getMinutes() < nap.vege.perc[i]){
		kezdes[i].innerHTML = "->";
		sor[i].style.color = "#f39c12";

		vege[i].innerHTML = nap.vege.perc[i] - now.getMinutes() + "'";

	// már vége
	}else if(now.getHours() == nap.kezdes.ora[i] && now.getMinutes() >= nap.vege.perc[i] || now.getHours() > nap.vege.ora[i]){
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