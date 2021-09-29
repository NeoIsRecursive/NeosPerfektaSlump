	//slump delen av programmet
	var students = [];
	var notTaken = [];

	function randFloor(len){
		return Math.floor(Math.random()*len);
	}

	function slump(){
		var number = randFloor(notTaken.length);
		document.getElementById('svara').innerHTML = notTaken[number][0];
	    updateList([notTaken[number][1]],"black");
		notTaken.splice(number,1);
		if (notTaken.length <= 0) {notTaken = [...students]; resetList()}
	}

    
	function addFromInput(){
		var name = document.getElementById('addName').value;
		if (name == "") {alert("you must type in a name"); return;}
		var index = students.length;
		notTaken.push([name,index]);
		students.push([name, index]);
		drawStudentInList(name,index);
		document.getElementById('addName').value = "";
	}

    //visualisering av student listorna
	function changeList(x){
		students = x;
		if (students[students.length-1][0] == ""){students.splice(students.length-1);}
		notTaken = [...students];
		document.getElementById('students').innerHTML = "";
		document.getElementById('svara').innerHTML = "REDO!";
		drawList();
	}
	//visualises the already taken values, and reset simply resets the style to none.
	function updateList(idNumber, color){
		document.getElementById(idNumber).style = "background-color:"+color;
	}
	function resetList(){
		for (i = 0; i < students.length;i++){
			updateList(i,"none");
		}
	}
	
	function drawStudentInList(name, idNum){
		document.getElementById('students').innerHTML += "<li id=" + idNum +">"+name+"</li>";
	}

	function drawList(){
		document.getElementById('students').innerHTML = "";
		students.forEach(student => {
			drawStudentInList(student[0],student[1]);
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
    
	//kollar om filnamnet slutar på .csv, den läser alla sorters filer men en del format fungerar sådärr, så csv är bra för det följer regler
	function check(file){
		var hej = file.split(".");
		if (hej[hej.length-1] != "csv"){
			return false;
		} else {
			return true;
		}
	}