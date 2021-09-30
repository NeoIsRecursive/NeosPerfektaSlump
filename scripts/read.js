 	function addFromInput(){
		var name = document.getElementById('addName').value;
		if (name == "") {alert("you must type in a name"); return;}
		var index = students.length;
		notTaken.push([name,index]);
		students.push([name, index]);
		drawStudentInList(name,index);
		document.getElementById('addName').value = "";
	}

	function changeList(x){
		students = x;
		if (students[students.length-1][0] == ""){students.splice(students.length-1);}
		notTaken = [...students];
		document.getElementById('students').innerHTML = "";
		document.getElementById('svara').innerHTML = "REDO!";
		drawList();
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
			temp.forEach(student => {
				temp[i] = [student, i];
				i++
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
    