var list=document.getElementById('list')
function Addtask(){
    var inp=document.getElementById('tasks')
    //console.log(inp.value)//value of id is printed on console
    var li = document.createElement('li')
    var litext=document.createTextNode(inp.value)
    li.appendChild(litext)
    list.appendChild(li)
    inp.value=''
    console.log(li)


}