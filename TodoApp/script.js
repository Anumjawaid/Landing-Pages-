// Usage of TocreateElement
var anchor=document.getElementById('maincontent')
var task=document.getElementById('task')
function gettask(){
    var div=TocreateElement('div',task.value,anchor,'class',"taskslist",()=>change())
    console.log(div)
    task.value=""

    
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
    element.setAttribute('Onclick',funcname)
    return element
}
function change(){
    console.log("change run")
}