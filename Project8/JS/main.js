function full_Sentence() { //Concatenation of fragments into a sentence
	var part_1 = "I have ";
	var part_2 = "made this ";
	var part_3 = "into a complete ";
	var part_4 = "sentence.";
	var whole_sentence = part_1.concat(part_2, part_3, part_4); //the combining
	document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){ //taking out one word to display
	var Sentence = "All work and no play makes Johnny a dull boy.";
	var Section = Sentence.slice(27,33); //the area where Johnny is displayed
	document.getElementById("Slice").innerHTML = Section;
}

function string_Method() { //simple display
	var X =182;
	document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //rounding method
	var X = 123.4323528970
	document.getElementById("Precision").innerHTML = X.toPrecision(10);
}