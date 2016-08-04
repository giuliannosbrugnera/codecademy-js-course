var text = "giu nsd sausabda da giu ashbdasdsada";
var myName = "giu";
var hits = [];

for (var i = 0; i < text.length; i++) {
	if (myName[0] === text[i]) {
		for (var j = i; j < i + myName.length; j++) {
			hits.push(text[j])
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}
