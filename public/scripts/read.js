 	function addFromInput(){
		let name = document.getElementById('addName').value;
		if (name == "") {alert("you must type in a name"); return;}
		let index;
        if (students.length < 1){
            index = 0;
        } else {
            index = students[students.length - 1][1] + 1;
        }
		notTaken.push([name,index]);
		students.push([name, index]);
		drawStudentInList(name,index);
		document.getElementById('addName').value = "";
	}

	document.getElementById('addName').addEventListener("keyup", x => {
		if(x.key == 'Enter') addFromInput();
	});

	function changeInput(){
			const x = document.getElementById('file2');
			const y = document.getElementById('addName');
			if (x.style.display === 'none') {
				x.style.display = 'inline';
				y.style.display = 'none';
			} else {
				x.style.display = 'none';
				y.style.display = 'inline';
			}
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
		const splitFile = file.split(".");
		return splitFile[splitFile.length-1] == "csv";
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
