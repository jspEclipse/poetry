var t = 0, caps = false, pause = false;

		const tab = '  ',
		material = ['sand', 'dust', 'leaves', 'paper', 'tin', 'roots', 'brick',
			'stone', 'discarded clothing', 'glass', 'steel', 'plastic', 'mud',
			'broken dishes', 'wood', 'straw', 'weeds'],
		place = ['In a green, mossy terrain', 'In an overpopulated area',
			'By the sea', 'By an abandoned lake', 'In a desert',
			'In a deserted factory', 'In dense woods', 'In Japan',
			'Among small hills', 'In southern France', 'Among high mountains',
			'On an island', 'On open ground', 'In a cold, windy climate',
			'In a place with both heavy rain and bright sun',
			'In a deserted airport', 'In a hot climate', 'Inside a mountain',
			'On the sea', 'In Michigan', 'In heavy jungle undergrowth',
			'By a river', 'Among other houses', 'In a deserted church',
			'In a metropolis', 'Underwater'],
		light_source = ['candles', 'all available lighting', 'electricity',
			'natural light'],
		inhabitants = ['people who sleep very little', 'vegetarians',
			'horses and birds',
			'people speaking many languages wearing little or no clothing',
			'all races of men represented wearing predominantly red clothing',
			'children and old people', 'various birds and fish', 'lovers',
			'people who enjoy eating together', 'people who eat a great deal',
			'collectors of all types', 'friends and enemies',
			'people who sleep almost all the time', 'very tall people',
			'American Indians', 'little boys', 'people from many walks of life',
			'Negroes wearing all colors', 'friends',
			'French and German speaking people', 'fishermen and families',
			'people who love to read'];

		function fullscreenListeners(f)
		{
			f("mozfullscreenchange", fullscreenEvt);
			f("MSFullscreenChange", fullscreenEvt);
			f("fullscreenchange", fullscreenEvt);
			f("webkitfullscreenchange", fullscreenEvt);
		}

		function fullscreenEvt(incomingReq)
		{
			fullscreenListeners(document.removeEventListener);
			if(incomingReq === true || document.mozFullScreen ||
			document.fullscreenElement || document.webkitIsFullScreen ||
			document.msFullscreenElement) {
				var fsElt;
				if(window.c instanceof HTMLCanvasElement) fsElt = window.c;
				else fsElt = document.documentElement;
				if (fsElt.requestFullscreen) fsElt.requestFullscreen();
				else if (fsElt.msRequestFullscreen) fsElt.msRequestFullscreen();
				else if (fsElt.mozRequestFullScreen)
					fsElt.mozRequestFullScreen();
				else if (fsElt.webkitRequestFullScreen)
					fsElt.webkitRequestFullScreen();
				nav.style.display = "none";
				main.style.paddingTop = "0";
			}
			else nav.style.display = "block";
			main.style.paddingTop = "8rem";
			if (typeof l === "function") setTimeout(l, 200);
			fullscreenListeners(document.addEventListener);
		}

		function pick(array) {
			var i = Math.floor(Math.random() * (array.length));
			return array[i];
		}

		function stanza() {
			return 'A house of ' + pick(material) + '<br>' +
					tab +pick(place) + '<br>' +
					tab + tab + 'Using ' + pick(light_source) + '<br>' +
					tab + tab + tab + 'Inhabited by ' + pick(inhabitants) +
					'<br><br>';
		}

		function nextText() {
			var last, text, main = document.getElementById('main');
			if (pause) setTimeout(nextText, 300);
			else {
				if (35 > t) t += 1;
				else main.removeChild(main.firstChild);
				last = document.createElement('p');
				last.innerHTML = caps ? stanza().toUpperCase() : stanza();
				main.appendChild(last);
				main.lastChild.scrollIntoView({block:"end", behavior:"smooth"});
				setTimeout(nextText, 8000);
			}
		}