// Usage of TocreateElement
var anchor=document.getElementById('content')
var task=document.getElementById('task')
var taskslist=[]
function gettask(){
    var div=TocreateElement('li',task.value,anchor,'class',"taskslist","none")
    console.log(div)
    
   var stat= TocreateElement('input',"status",div,"type",'radio',"chcktask()")
    var upd=TocreateElement('button',"Update",div,"class",'btn upd','updtask()')
    var del=TocreateElement('button',"Delete",div,"class",'btn del',"deltask(this)")
    // upd.setAttribute('onclick',)
    taskslist.push(task.value)
    task.value=""
console.log(taskslist)
    
}
// function delotask(){
//     console.log("hhhh")
// }

function deltask(param){
    console.log(param.parentNode)
    param.parentNode.innerHTML=""


}

function TocreateElement(elementname,elementtext,where,attrname,attr,funcname){
    // funcname=alert("nothing in the function")
    // you need to just pass the name of the element in the first parameter
    // elementtext in the second parameter
    // where to create element id, of that element in third parameter
    // /what type of attribute you wanted to create attrname
    // 
    var element=document.createElement(elementname)
    var text=document.createTextNode(elementtext)
    element.appendChild(text)
    where.append(element)
    element.setAttribute(attrname,attr)
    element.setAttribute('onclick',funcname)
    return element
}
function change(){
    console.log("change run")
}