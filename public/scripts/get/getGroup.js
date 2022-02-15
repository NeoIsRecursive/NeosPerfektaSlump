export default async function getGroup(id){
    const data = await fetch('getGroupApi?id='+id);
    const groupContent = await data.json();
    asker.changeList(groupContent);
}
