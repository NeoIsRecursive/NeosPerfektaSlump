    //denna funktionen skapar en fil med grupperna som användaren kan ladda ner
    //skapar en "blob" med text som sedan kan laddas ner, hur vet jag inte riktigt då det inte fanns super mycket på nätet om det :/    
    function test(x,groups,count){
        let y = document.getElementById('file').files[0].name.split(".")[0];
        let blob = new Blob([groups.join("\n")], {type:'text/html'});
        x.setAttribute("href",URL.createObjectURL(blob));
        x.setAttribute("download",count +" grupper_i_"+y+".txt");
    }