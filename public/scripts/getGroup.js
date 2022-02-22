import load from './load.js';

export default async function getGroup(id){
    load(true);
    const data = await fetch('getGroupApi?id='+id);
    const groupContent = await data.json();
    load(false);
    asker.changeList(groupContent);
}
