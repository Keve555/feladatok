let linksArr=document.links
for(let item of linksArr){
    console.log(item.href)
    console.log("URL: ",document.URL)
    if(item.href==document.URL){
        item.style.color ="blue"
    }
    
}