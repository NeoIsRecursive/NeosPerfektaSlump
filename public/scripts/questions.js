	//slump delen av programmet
	var students = [];
	var notTaken = [];

	function randFloor(len){
		return Math.floor(Math.random()*len);
	}

	function slump(){
		if(students[0] == undefined) return alert("no students");
		var number = randFloor(notTaken.length);
		document.getElementById('svara').innerHTML = notTaken[number][0];
	    updateList([notTaken[number][1]]);
		notTaken.splice(number,1);
		if (notTaken.length <= 0) {
			notTaken = [...students];
			resetList()
		}
	}
