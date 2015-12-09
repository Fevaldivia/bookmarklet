function(){
  var words = (function(){

  	var sWords = document.body.innerText.toLowerCase().trim().replace(/[,;.]/g,'').split(/[\s\/]+/g).sort();
    // count duplicates
  	var iWordsCount = sWords.length;

  	// array of words to ignore
  	var ignore = ['and','the','to','a','of','for','as','i','with','it','is','on','that','this','can','in','be','has','if'];
  	ignore = (function(){
  		var o = {};
  		var iCount = ignore.length;
  		for (var i=0;i<iCount;i++){
  			o[ignore[i]] = true;
  		}
  		return o;
  	}());
    // counter for words
  	var counts = {};
  	for (var i=0; i<iWordsCount; i++) {
  		var sWord = sWords[i];
  		if (!ignore[sWord]) {
  			counts[sWord] = counts[sWord] || 0;
  			counts[sWord]++;
  		}
  	}
    // array with objets to return
  	var arr = [];
  	for (sWord in counts) {
  		arr.push({
  			text: sWord,
  			frequency: counts[sWord]
  		});
  	}

  	// sort array
  	return arr.sort(function(a,b){
  		return (a.frequency > b.frequency) ? -1 : ((a.frequency < b.frequency) ? 1 : 0);
  	});

  }());

  (function(){
    //count duplicates
  	var iWordsCount = words.length;
  	for (var i=0; i<iWordsCount; i++) {
  		var word = words[i];
  		document.write(word.frequency + " " + word.text);
      document.write("<br />");
  	}
  }());
}
