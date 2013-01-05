//1. var field = document.forms["textform"].converter;=var field = document.forms[0].converter;
function upperMe(){
    var field = document.forms["textform"].converter;
    var upperCaseVersion = field.value.toUpperCase();
    field.value = upperCaseVersion;

}

//2. 
function inspectBox(){
    if (document.forms["checkform"].checkThis.checked){
        alert("This is check.");
    }else{
        alert("The box is not checked at this moment!");
    }
}

//3
function fullName(){
    var form = document.forms['radioform'];
    for(var i=0; i<form.stooges.length; i++){
        if (form.stooges[i].checked){
            break;
        }
    }
    alert("You choose"+form.stooges[i].value+".");
}

//4
function goThere(){
    var list = document.forms["selectform"].urlList;
    location.href=list.options[list.selectedIndex].value;
}

//5
function verifySong(entry){
    var song=entry.value
    alert(" Checking whether " +song+" is a beatles tune...")
}
function processData(form){
    for (var i=0; i<form.Beatles.length; i++){
        if(form.Beatles[i].checked){
            break;
        }
    }
    var beatle = form.Beatles[i].value;
    var song = form.song.value
    alert("Checking wether "+song+" feather "+beatle+" ...")
}

//6
var newWindow;
function makeNewWindow(){
    newWindow = window.open("","","height=300, width=300");
    newWindow.location.href="http://www.baidu.com";
}
function closeNewWindow(){
    if(newWindow){
        newWindow.close();
        newWindow=null;
    }
}

//7
function checkForm(form){
    for (var i=0; i<form.elements.length; i++){
        if(form.elements[i].type=="text" && form.elements[i].value==""){
            alert("Fill out, Please!");
            return false;
        }
    }
    return true;
}

//8
var imageLibrary = new Array();
imageLibrary["image1"]=new Image(120, 90);
imageLibrary["image1"].src="/static/img/deal.gif";
imageLibrary["image2"]=new Image(120, 90);
imageLibrary["image2"].src="/static/img/del.gif";
imageLibrary["image3"]=new Image(120, 90);
imageLibrary["image3"].src="/static/img/pencil.png";
imageLibrary["image4"]=new Image(120, 90);
imageLibrary["image4"].src="/static/img/redy.gif";
function loadCached(list){
    var img = list.options[list.selectedIndex].value;
    document.thumbnail.src=imageLibrary[img].src;
}