function nameshow(){
    document.getElementById("start").style.display="none"
    document.getElementById("name").style.display='inline'

}
// function contshow(){
//     document.getElementById("start1").style.display='none'

//     document.getElementById("cont").style.display='inline'
//     document.getElementById("start2").style.display='inline'

    
// }
function parashow(){
    document.getElementById('secmain').style.display="inline"
    document.getElementById('intro').style.display='none'

}
function namesave(e){
    e.preventDefault()
    let name = document.forms['nameform']['name'].value
    sessionStorage.setItem("name",name);
    // location.href='main.html'

parashow()
}