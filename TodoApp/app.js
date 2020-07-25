var list=document.getElementById('list')
function Addtask(){
    var inp=document.getElementById('tasks')
    //console.log(inp.value)//value of id is printed on console
    var li = document.createElement('li')
    var litext=document.createTextNode(inp.value)
    li.setAttribute("class",'comp')
    li.appendChild(litext)
    list.appendChild(li)
    //deletebtn
    var dbtn=document.createElement('button')
    var detext=document.createTextNode('DELETE')
    dbtn.appendChild(detext)
    li.appendChild(dbtn)
    dbtn.setAttribute("class","dbtn")
    dbtn.setAttribute('onclick','deltask(this)')
    //editbtn
    var edbtn=document.createElement("button")
    var edtext=document.createTextNode("EDIT")
    edbtn.appendChild(edtext)
    li.appendChild(edbtn)
    edbtn.setAttribute("class",'dbtn')
    edbtn.setAttribute("onclick","edtask(this)")


    
    inp.value=''
    // console.log(li)


}
function deltask(param){
    // console.log(param.parentNode)
    param.parentNode.remove()
}
function DelAll(){
    list.innerHTML=''
}
function edtask(param){
    // console.log(param.parentNode.childNodes[2])
   // param.parentNode.firstChild.nodeValue='kjhgfdvbnm' //targeting the parent and its firstchild and changing its node value
    // console.log(param.parentNode.firstChild)
    var edval=param.parentNode.firstChild.nodeValue
    var edit=prompt("Enter Updated Value ",edval)
    // edval=edit
    param.parentNode.firstChild.nodeValue=edit


}
