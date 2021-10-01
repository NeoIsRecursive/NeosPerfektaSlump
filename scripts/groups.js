	//vet inte rikitgt varför den ligger här, men växlar mellan grupper och slump av students
	function show() {
        var x = document.getElementById('container');
        var y = document.getElementById('grupper');
        if (x.style.display === 'none') {
            x.style.display = 'flex';
            y.style.display = 'none';
			document.getElementById('showbtn').innerHTML = "Groups";
        } else {
            x.style.display = 'none';
            y.style.display = 'block';
			document.getElementById('showbtn').innerHTML = "Questions";
        }
    }
	
	
	//skapar grupperna
	function createGroups(x) {
		if (x <= 0){
	        alert('Do you really need 0 groups?');
	        return;
	    } else if (x == students.length){
	        alert("there is literally no point bro");
	        return;
	    } else if (x > students.length){
	        alert("try fewer groups");
	        return; 
		}
        var groups = [];
		var noGroup = [...students];
		var antal = Math.floor(students.length / x);
		var iGrupp = 0;
		
		for(var i = 0; i < x; i++){
		    groups.push([]);
		    groups[i].length = antal;
		    iGrupp += antal;
		}

		for (i = 0; i < x; i++) {
			for (var y = 0; y < groups[i].length;y++){
				raNum = randFloor(noGroup.length);
				groups[i][y] = (noGroup[raNum][0]);
				noGroup.splice(raNum,1);
			}
		}
		
		if (noGroup.length > 0){
		    let kvar = noGroup.length;
		    while(noGroup.length > 0){
				for (i = 0; i < kvar; i++) {
					raNum = randFloor(noGroup.length)
					groups[i].push(noGroup[raNum][0]);
					noGroup.splice(raNum,1)
				}
		    }
		}
        drawGroups(groups);
	}
    

	function copyGroups(groups = document.getElementById('groups')){
		console.log(groups.innerText);
		navigator.clipboard.writeText(groups.innerText);
		if (groups.id == "groups") {console.log("copied all") }else {
			console.log("copied "+groups.id)
		};
	}