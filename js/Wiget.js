
	    window.addEventListener('load', function () {
	    	var labels = {
	    	    menuTitle: 'title (in my language)',
	    	    increaseText: 'increase text size (in my language)',
	    	    decreaseText: 'decrease text size (in my language)',
	    	    increaseTextSpacing: 'increase text spacing (in my language)',
	    	    decreaseTextSpacing: 'decrease text spacing (in my language)',
	    	    invertColors: 'invert colors (in my language)',
	    	    grayHues: 'gray hues (in my language)',
	    	    underlineLinks: 'underline links (in my language)',
	    	    bigCursor: 'big cursor (in my language)',
	    	    readingGuide: 'reading guide (in my language)',
	    	    textToSpeech: 'text to speech (in my language)',
	    	    speechToText: 'speech to text (in my language)'
	    	};
	    	var options = {
	    	    labels: labels,
	    	    hotkeys: {
	    	        enabled: true
	    	    }
	    	};
	    	options.textToSpeechLang = 'en-US'; // or any other language
	    	options.speechToTextLang = 'en-US'; // or any other language
	    	new Accessibility({ textPixelMode: true }); },
	     false
	     );
		 
		 
		 
