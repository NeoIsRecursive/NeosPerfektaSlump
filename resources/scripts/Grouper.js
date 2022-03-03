export default class Grouper {
    //skapar grupperna
    createGroups(x) {
        if (x <= 0) {
            alert("Do you really need 0 groups?");
            return;
        } else if (x == asker.students.length) {
            alert("there is literally no point bro");
            return;
        } else if (x > asker.students.length) {
            alert("try fewer groups");
            return;
        }
        var groups = [];
        var noGroup = [...asker.students];
        var antal = Math.floor(asker.students.length / x);
        var iGrupp = 0;

        for (var i = 0; i < x; i++) {
            groups.push([]);
            groups[i].length = antal;
            iGrupp += antal;
        }
        let raNum;
        for (i = 0; i < x; i++) {
            for (var y = 0; y < groups[i].length; y++) {
                raNum = randFloor(noGroup.length);
                groups[i][y] = noGroup[raNum][0];
                noGroup.splice(raNum, 1);
            }
        }

        if (noGroup.length > 0) {
            let kvar = noGroup.length;
            while (noGroup.length > 0) {
                for (i = 0; i < kvar; i++) {
                    raNum = randFloor(noGroup.length);
                    groups[i].push(noGroup[raNum][0]);
                    noGroup.splice(raNum, 1);
                }
            }
        }
        this.drawGroups(groups);
    }

    drawGroups(groups) {
        let count = 0;
        let content = document.getElementById("groups");
        content.innerHTML = "";
        let groupFile = [];
        groups.forEach((group) => {
            const groupText = document.createElement("table");
            let n = document.createElement("tr");
            let nm = document.createElement("th");
            let ye = document.createElement("p");
            ye.textContent = "grupp" + ++count;
            nm.appendChild(ye);
            const copyicon = document.createElement("button");
            copyicon.setAttribute(
                "onclick",
                "grouper.copyGroups(grupp" + count + ")"
            );
            copyicon.innerHTML +=
                "<img src='/../images/copy.svg' class='w-4 cursor-pointer'>";
            nm.appendChild(copyicon);
            nm.setAttribute("class", "flex gap-2");
            n.appendChild(nm);
            groupText.appendChild(n);
            groupText.setAttribute("class", "flex flex-col p-2");
            groupText.setAttribute("id", "grupp" + count);
            groupFile.push("grupp " + count);
            group.forEach((student) => {
                nm = document.createElement("tr");
                n = document.createElement("td");
                let elv = document.createTextNode(student);
                n.appendChild(elv);
                nm.appendChild(n);
                groupText.appendChild(nm);
                groupFile.push(student);
            });
            groupFile.push("");

            content.appendChild(groupText);
        });
        this.downloadGroup(
            document.getElementById("download"),
            groupFile,
            count
        );
    }

    downloadGroup(x, groups, count) {
        let y;
        let test;
        if (test == null) {
            y = "min_lista";
        } else {
            y = test.name.split(".")[0];
        }
        let blob = new Blob([groups.join("\n")], { type: "text/html" });
        x.setAttribute("href", URL.createObjectURL(blob));
        x.setAttribute("download", count + " grupper_i_" + y + ".txt");
    }

    copyGroups(groups = document.getElementById("groups")) {
        console.log(groups.innerText);
        navigator.clipboard.writeText(groups.innerText);
        groups.id == "groups"
            ? console.log("copied all")
            : console.log("copied " + groups.id);
    }
}
