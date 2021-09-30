    //visualisering av student listorna
	function changeList(x){
		students = x;
		if (students[students.length-1][0] == ""){students.splice(students.length-1);}
		notTaken = [...students];
		document.getElementById('students').innerHTML = "";
		document.getElementById('svara').innerHTML = "REDO!";
		drawList();
	}
	function drawList(){
		document.getElementById('students').innerHTML = "";
		students.forEach(student => {
			drawStudentInList(student[0],student[1]);
		});
	}

	//visualises the already taken values, and reset simply resets the style to none.
	function updateList(idNumber, color){
		document.getElementById(idNumber).style = "background-color:"+color;
	}

	//removes background color from each student
	function resetList(){
		for (i = 0; i < students.length;i++){
			updateList(i,"none");
		}
	}
	

	function drawStudentInList(name, idNum){
		document.getElementById('students').innerHTML += "<li id=" + idNum +">"+name+"</li>";
	}

    //creates html tables for each group, lots of code...
	//skapar html tables där varje grupp är ett table, tables gjorde det bättre att kopiera texten innan jag hade fixat ladda ner funktionen, dock mycket kod.
	function drawGroups(groups){
		let count = 0;
		let content = document.getElementById('groups');
		content.innerHTML = "";
		let groupFile = [];
		groups.forEach(group => {
			var groupText = document.createElement('table');
			n = document.createElement('tr');
			nm = document.createElement('th');
			ye = document.createTextNode("grupp"+ ++count);
			nm.appendChild(ye);
			n.appendChild(nm);
			groupText.appendChild(n);
			groupText.setAttribute('class','grupp');
			groupFile.push("grupp " +count);
			group.forEach(student => {
				nm = document.createElement('tr');
				n = document.createElement('td');
				elv = document.createTextNode(student);
				n.appendChild(elv);
				nm.appendChild(n)
				groupText.appendChild(nm);
				groupFile.push(student);
			});
			groupFile.push("");
			content.appendChild(groupText);
		});
		downloadGroup(document.getElementById('download'),groupFile,count);
	}