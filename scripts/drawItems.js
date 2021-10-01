	//loops through, is only set when a file is loaded
	function drawList(){
		document.getElementById('students').innerHTML = "";
		students.forEach(student => {
			drawStudentInList(student[0],student[1]);
		});
	}

	//Gives a background color to the id of taken student, used for both setting and removing
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
			nm.innerHTML += "<img src='../images/copy.svg' onclick='copyGroups(grupp"+count+")'>";
			n.appendChild(nm);
			groupText.appendChild(n);
			groupText.setAttribute('class','grupp');
			groupText.setAttribute('id','grupp'+count);
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