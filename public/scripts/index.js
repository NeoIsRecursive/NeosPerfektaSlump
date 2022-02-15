import Asker from "./Asker.js";
import getGroup from "./get/getGroup.js";
import Grouper from "./Grouper.js";

window.randFloor = (len) => Math.floor(Math.random()*len);


window.getGroup = getGroup;
window.asker = new Asker();
window.grouper = new Grouper();
document.getElementById('addName').addEventListener("keyup", x => {
    if (x.key == 'Enter') asker.addFromInput();
});
