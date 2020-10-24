function selectHappy() {
	var ques = document.getElementById("question");
	var button1 = document.getElementById("happy");
	var button2 = document.getElementById("sad");
	var button3 = document.getElementById("angry");
	var button4 = document.getElementById("sick");
	var button5 = document.getElementById("suicidal");
	ques.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";

	var output = document.createElement("h3");
	var content = document.getElementById("output");
	var text = document.createTextNode("Hello, its good to know you are happy. Happiness is the key to success. Hope you have a great day ahead.");
	output.appendChild(text);
	content.appendChild(output);
}

function selectSad() {
	var ques = document.getElementById("question");
	var button1 = document.getElementById("happy");
	var button2 = document.getElementById("sad");
	var button3 = document.getElementById("angry");
	var button4 = document.getElementById("sick");
	var button5 = document.getElementById("suicidal");
	ques.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";

	var output = document.createElement("h3");
	var content = document.getElementById("output");
	var text = document.createTextNode("You deserve to be happy. You deserve to live a life you are excited about. Don't let others make you forget it. Cheer Up! Do something you like. Good times will come. ");
	output.appendChild(text);
	content.appendChild(output);
}

function selectAngry() {
	var ques = document.getElementById("question");
	var button1 = document.getElementById("happy");
	var button2 = document.getElementById("sad");
	var button3 = document.getElementById("angry");
	var button4 = document.getElementById("sick");
	var button5 = document.getElementById("suicidal");
	ques.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";

	var output = document.createElement("h3");
	var content = document.getElementById("output");
	var text = document.createTextNode("The greatest remedy for anger is delay. Anger does not solve anything. It builds nothing, but it can destroy everything. Lift your mood. Divert your mind. Try to concentrate on things that are important and let go those that are not important. Hope you feel better and have a great day ahead.");
	output.appendChild(text);
	content.appendChild(output);
}

function selectSick() {
	var ques = document.getElementById("question");
	var button1 = document.getElementById("happy");
	var button2 = document.getElementById("sad");
	var button3 = document.getElementById("angry");
	var button4 = document.getElementById("sick");
	var button5 = document.getElementById("suicidal");
	ques.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";

	var textfield = document.createElement("input");
	textfield.setAttribute("type","text");
	textfield.setAttribute("name","answer");
	textfield.setAttribute("placeholder","What problem are you having?");
	
	var submit = document.createElement("input");
	submit.setAttribute("type","submit");
	submit.setAttribute("name","submit");
	
	var content = document.getElementById("output");
	

	content.appendChild(textfield);
	content.appendChild(submit);
}

function selectSuicidal() {
	var ques = document.getElementById("question");
	var button1 = document.getElementById("happy");
	var button2 = document.getElementById("sad");
	var button3 = document.getElementById("angry");
	var button4 = document.getElementById("sick");
	var button5 = document.getElementById("suicidal");
	ques.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "none";
	button5.style.display = "none";

	var output = document.createElement("h3");
	var content = document.getElementById("output");
	var text = document.createTextNode("SUICIDE IS NEVER THE ANSWER, GETTING HELP IS THE ANSWER You will find help, hope, understanding, support and love I love you and I will not stop fighting for you. Please call me: 1-800-784-2433");
	output.appendChild(text);
	content.appendChild(output);
}


