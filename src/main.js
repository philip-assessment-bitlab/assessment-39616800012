var begin = 80,
	end = 320,
	pathD = document.getElementById('pathD'),
	pathE = document.getElementById('pathE'),
	pathF = document.getElementById('pathF'),
	segmentD = new Segment(pathD, begin, end),
	segmentE = new Segment(pathE, begin, end),
	segmentF = new Segment(pathF, begin, end),
	wrapper = document.getElementById('menu-icon-wrapper'),
	trigger = document.getElementById('menu-icon-trigger'),
	toCloseIcon = true,
	nav = document.getElementById('menu'),
	menuItem1 = document.getElementsByTagName("li")[0],
	menuItem2 = document.getElementsByTagName("li")[1];

function createOverlayLeft() {
	let newOverlay = document.createElement("div");
	newOverlay.setAttribute("id", "leftOverlay");
	let newContent = document.createTextNode("Overlay");
	newOverlay.appendChild(newContent);
	let currentDiv = document.getElementById("div1");
	document.body.insertBefore(newOverlay, currentDiv);
	newOverlay.style.display = "none";
	newOverlay.style.background = "blue";
	newOverlay.style.position = "fixed";
	newOverlay.style.width = "50%";
	newOverlay.style.height = "100%";
	newOverlay.style.top = 0;
	newOverlay.style.left = 0;
	newOverlay.style.right = 0;
	newOverlay.style.bottom = 0;
	newOverlay.style.cursor = "pointer";
	newOverlay.addEventListener("click", hideOverlays);
}

function createOverlayRight() {
	let newOverlay = document.createElement("div");
	newOverlay.setAttribute("id", "rightOverlay");
	let newContent = document.createTextNode("Overlay");
	newOverlay.appendChild(newContent);
	let currentDiv = document.getElementById("div1");
	document.body.insertBefore(newOverlay, currentDiv);
	newOverlay.style.display = "none";
	newOverlay.style.background = "red";
	newOverlay.style.position = "fixed";
	newOverlay.style.width = "50%";
	newOverlay.style.height = "100%";
	newOverlay.style.top = 0;
	newOverlay.style.left = "50%";
	newOverlay.style.right = 0;
	newOverlay.style.bottom = 0;
	newOverlay.style.cursor = "pointer";
	newOverlay.addEventListener("click", hideOverlays);
}

createOverlayLeft();
createOverlayRight();

menuItem1.addEventListener("click", displayOverlays);
menuItem2.addEventListener("click", displayOverlays);

function displayOverlays() {
	let leftOverlay = document.getElementById("leftOverlay");
	let rightOverlay = document.getElementById("rightOverlay");
	leftOverlay.style.display = "block";
	rightOverlay.style.display = "block";
}

function hideOverlays() {
	let leftOverlay = document.getElementById("leftOverlay");
	let rightOverlay = document.getElementById("rightOverlay");
	leftOverlay.style.display = "none";
	rightOverlay.style.display = "none";
}

var btn = document.getElementById('rnmSearch');
btn.onclick = function () {
  var name = document.getElementById("rnmName").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);

      document.getElementById('names').innerHTML = '';
      for (var i = 0; i < res.results.length; i++) {
        document.getElementById('names').innerHTML += res.results[i].name + "<br>";

        if (i === 9) {
          break;
        }
      } 
    }
  };
  xhttp.open("GET", "https://rickandmortyapi.com/api/character/?name=" + name, true);
  xhttp.send();
};

function addScale(m) {
	m.className = 'scaled';
}

function removeScale(m) {
	m.className = '';
}

trigger.onclick = function () {
	addScale(wrapper);
	setTimeout(function () {
		removeScale(wrapper)
	}, 150);

	if (nav.style.display === 'block') {
		nav.style.display = 'none';
	} else {
		nav.style.display = 'block';
	}
};
