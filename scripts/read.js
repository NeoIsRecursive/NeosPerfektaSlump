	//slump delen av programmet
	var elever;
	var intetagna;
	function slump(){
		document.getElementById('svara').innerHTML = intetagna.splice(Math.floor(Math.random()*intetagna.length),1);
		if (intetagna.length <= 0) intetagna = [...elever];
	    drawList();
	}
    
    //visualisering av elev listorna
	function changeList(x){
		elever = x;
		if (elever[elever.length-1][0] == ""){elever.splice(elever.length-1);}
		intetagna = [...elever];
		document.getElementById('elever').innerHTML = "";
		document.getElementById('svara').innerHTML = "REDO!";
		drawList();
	}
	
	function drawList(){
		document.getElementById('elever').innerHTML = "";
		elever.forEach(elev => {
			if (intetagna.includes(elev)) {
				document.getElementById('elever').innerHTML += "<li>"+elev+"</li>";
			} else {
				document.getElementById('elever').innerHTML += "<li style='text-decoration: line-through;background-color: black;'>"+elev+"</li>";
			}
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
			if (temp[temp.length-1] == ""){
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