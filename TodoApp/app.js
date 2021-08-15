var list=document.getElementById('list')
// var te=document.getElementById('texts')
function Addtask(){
    var inp=document.getElementById('tasks')
    //console.log(inp.value)//value of id is printed on console
    var li = document.createElement('li')
    var litext=document.createTextNode(inp.value)
    li.setAttribute("class",'comp')
    li.setAttribute("onclick",'comp()')

    li.appendChild(litext)
    list.appendChild(li)

    //deletebtn
    var div=document.createElement('div')
    div.setAttribute('class','texts')
    var dbtn=document.createElement('button')
    var detext=document.createTextNode('DELETE')
    dbtn.appendChild(detext)
    div.appendChild(dbtn)
    dbtn.setAttribute("class","dbtn")
    dbtn.setAttribute('onclick','deltask(this)')
    //editbtn
    var edbtn=document.createElement("button")
    var edtext=document.createTextNode("EDIT")
    edbtn.appendChild(edtext)
    div.appendChild(edbtn)
    edbtn.setAttribute("class",'ebtn')
    edbtn.setAttribute("onclick","edtask(this)")
   
    list.appendChild(div)
    inp.value=''
    // console.log(li)
}
function comp(){
    console.log("byj")
}
function deltask(param){
    console.log(param.parentNode)
    console.log(param.parentNode.parentNode)
    console.log(param.parentNode.parentNode.nodeValue)


    // param.parentNode.parentNode.remove()
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
