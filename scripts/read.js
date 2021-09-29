	//slump delen av programmet
	var elever;
	var intetagna;
	function slump(){
		var number = Math.floor(Math.random()*intetagna.length);
		document.getElementById('svara').innerHTML = intetagna[number][0];
	    updateList([intetagna[number][1]],"black");
		intetagna.splice(number,1);
		if (intetagna.length <= 0) {intetagna = [...elever];resetList()}
	}
    
    //visualisering av elev listorna
	function changeList(x){
		console.log(x);
		elever = x;
		if (elever[elever.length-1][0] == ""){elever.splice(elever.length-1);}
		intetagna = [...elever];
		document.getElementById('elever').innerHTML = "";
		document.getElementById('svara').innerHTML = "REDO!";
		drawList();
	}
	//visualises the already taken values, and reset simply resets the style to none.
	function updateList(idNumber, color){
		document.getElementById(idNumber).style = "background-color:"+color;
	}
	function resetList(){
		for (i = 0; i < elever.length;i++){
			updateList(i,"none");
		}
	}
	
	function drawList(){
		document.getElementById('elever').innerHTML = "";
		elever.forEach(elev => {
			document.getElementById('elever').innerHTML += "<li id=" +elev[1] +">"+elev[0]+"</li>";
		});
	}

    
    //läsning av filer
	function readCsv(file, cols = null) {
		
		let isCsv = check(file.files[0].name);
		if (!isCsv){
			return alert("not a .csv");
		}

  		let csv = file.files[0];
		let csvReader = new FileReader();

		csvReader.readAsText(csv);

		csvReader.onloadstart = () => {
			console.log("starting to read file");
		}

		csvReader.onloadend = () => {
			var temp = csvReader.result.split("\n");
			var i = 0;
			temp.forEach(elev => {
				temp[i] = [elev, i];
				console.log(temp[i++]);
			});
			/*
			temp.forEach( x => {
				if (x == temp[0] && cols == null){
					csvContent.push(x.split(","));
					cols = csvContent[0].length;
				} else {
					csvContent.push(x.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/,cols));
				}
			});
			*/
			if (temp[temp.length-1][0] == ""){
			    temp.pop();
			}
			console.log("read and parse done!");
			changeList(temp);
		}
	}
    
	//kollar om filnamnet slutar på .csv, den läser alla sorters filer men en del format fungerar sådärr, så csv är bra för det följer regler
	function check(file){
		var hej = file.split(".");
		if (hej[hej.length-1] != "csv"){
			return false;
		} else {
			return true;
		}
	}