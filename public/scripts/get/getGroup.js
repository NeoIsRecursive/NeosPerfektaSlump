async function getGroup(id){
    const data = await fetch('getGroupApi?id='+id);
    const groupContent = await data.json();
    changeList(groupContent);
    console.log(groupContent);
}

document.querySelector('button').addEventListener('click', (option)=>{
    option.preventDefault();
    getGroup(document.querySelector('select').value);
})
