export class Asker {
    students = [];
    notTaken = [];

    /**
     * @returns {Array} - returns the students array
     */
    slump() {
        if (this.students[0] == undefined) return alert("no students");
        const index = randFloor(this.notTaken.length);

        document.getElementById("svara").innerHTML = this.notTaken[index][0];

        this.updateList([this.notTaken[index][1]]);

        const selected = this.notTaken.splice(index, 1);

        if (this.notTaken.length <= 0) {
            this.notTaken = [...this.students];
            this.resetList();
        }

        return selected;
    }

    /**
     * Draws the students in the DOM
     */
    drawList() {
        document.getElementById("students").innerHTML = "";
        this.students.forEach((student) => {
            this.renderStudentItem(student[0], student[1]);
        });
    }

    /**
     * Gives a background color to the id of taken student, used for both setting and removing
     * @param {number} idNumber
     */
    updateList(idNumber) {
        const node = document.getElementById(idNumber);
        node.classList.toggle("bg-white");
        node.classList.toggle("bg-slate-400");
        node.classList.toggle("text-white");
    }

    /**
     * Removes background color from each student
     */
    resetList() {
        this.students.forEach((student) => {
            this.updateList(student[1]);
        });
    }

    /**
     * Renders a student item in the DOM
     * @param {string} name - name of student
     * @param {number} idNum - id of student
     */
    renderStudentItem(name, idNum) {
        document.getElementById("students").innerHTML +=
            "<li id=" +
            idNum +
            " class='rounded p-2 bg-white'>" +
            name +
            "</li>";
    }

    /**
     * Adds a student from input
     */
    addFromInput() {
        const name = document.getElementById("addName").value;
        if (!name) {
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

        this.renderStudentItem(name, index);

        document.getElementById("addName").value = "";
    }

    /**
     * Checks the file is a csv
     */
    check(file) {
        const splitFile = file.split(".");
        return splitFile[splitFile.length - 1] == "csv";
    }

    /**
     * Change the list of items to a different one
     * @param {Array} x - the new list
     */
    changeList(x) {
        this.students = x;
        this.notTaken = [...this.students];
        document.getElementById("students").textContent = "";
        document.getElementById("svara").innerHTML = "&nbsp;";
        if (x.length !== 0) this.drawList();
    }

    /**
     * Reads a csv file and split it by rows and replace the current list with the new one
     */
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
