export default class Asker {
    students = [];
    notTaken = [];

    slump() {
        if (this.students[0] == undefined) return alert("no students");
        var number = randFloor(this.notTaken.length);
        document.getElementById("svara").innerHTML = this.notTaken[number][0];
        this.updateList([this.notTaken[number][1]]);
        this.notTaken.splice(number, 1);
        if (this.notTaken.length <= 0) {
            this.notTaken = [...this.students];
            this.resetList();
        }
    }

    //loops through, is only set when a file is loaded
    drawList() {
        document.getElementById("students").innerHTML = "";
        this.students.forEach((student) => {
            this.drawStudentInList(student[0], student[1]);
        });
    }

    //Gives a background color to the id of taken student, used for both setting and removing
    updateList(idNumber) {
        const node = document.getElementById(idNumber);
        node.classList.toggle("bg-white");
        node.classList.toggle("bg-slate-400");
        node.classList.toggle("text-white");
    }

    //removes background color from each student
    resetList() {
        this.students.forEach((student) => {
            this.updateList(student[1]);
        });
    }

    drawStudentInList(name, idNum) {
        document.getElementById("students").innerHTML +=
            "<li id=" +
            idNum +
            " class='rounded p-2 bg-white'>" +
            name +
            "</li>";
    }

    addFromInput() {
        let name = document.getElementById("addName").value;
        if (name == "") {
            alert("you must type in a name");
            return;
        }
        let index;
        if (this.students.length < 1) {
            index = 0;
        } else {
            index = this.students[this.students.length - 1][1] + 1;
        }
        this.notTaken.push([name, index]);
        this.students.push([name, index]);
        this.drawStudentInList(name, index);
        document.getElementById("addName").value = "";
    }

    check(file) {
        const splitFile = file.split(".");
        return splitFile[splitFile.length - 1] == "csv";
    }

    changeList(x) {
        this.students = x;
        this.notTaken = [...this.students];
        document.getElementById("students").textContent = "";
        document.getElementById("svara").innerHTML = "&nbsp;";
        if (x.length !== 0) this.drawList();
    }

    readCsv(file, cols = null) {
        let isCsv = this.check(file.files[0].name);
        if (!isCsv) {
            return alert("not a .csv");
        }

        let csv = file.files[0];
        let csvReader = new FileReader();

        csvReader.readAsText(csv);

        csvReader.onloadstart = () => {
            console.log("starting to read file");
        };

        csvReader.onloadend = () => {
            let temp = csvReader.result.split("\n");
            temp.forEach((student, index) => {
                temp[index] = [student, index];
            });
            temp = temp.filter((item) => item[0] !== "");
            console.log(temp);
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
            this.changeList(temp);
        };
    }
}
