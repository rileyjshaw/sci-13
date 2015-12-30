/* Author: Riley Shaw

This file contains the following functions:
	swapImage()
}
*/

count = 2;
function swapImage() {
	switch (count) {
		case 1:
			prof.src = "img/newstead.png"
			document.getElementById('profName').innerHTML = 'Newstead';
			count = 2
			return;
		case 2:
			prof.src = "img/gazor.png"
			document.getElementById('profName').innerHTML = 'Gazor';
			count = 3
			return;
		case 3:
			prof.src = "img/crest.gif"
			document.getElementById('profName').innerHTML = 'our Year Crest';
			count = 4
			return;
		case 4:
			prof.src = "img/hanes.png"
			document.getElementById('profName').innerHTML = 'Hanes';
			count = 5
			return;
		case 5:
			prof.src = "img/ableson.png"
			document.getElementById('profName').innerHTML = 'Ableson';
			count = 6
			return;
		case 6:
			prof.src = "img/somi.png"
			document.getElementById('profName').innerHTML = 'Narayanan';
			count = 7
			return;
		case 7:
			prof.src = "img/deca.gif"
			document.getElementById('profName').innerHTML = 'the Clark Hall Decagon';
			count = 1
			return;
	}
}





