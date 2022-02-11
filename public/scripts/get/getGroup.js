async function getGroup(id){
    const data = await fetch('getGroupApi?id='+id);
    const groupContent = await data.json();
    changeList(groupContent);
}
