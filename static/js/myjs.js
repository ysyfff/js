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

//9
$(document).ready(function(){
    //$('tr').filter(':odd').addClass('alt');
    //$('tr:odd').addClass('alt');
    $('#oe tr:odd').addClass('alt');//this is the most exact one !!!!!!!!!
});

//10.1
/*$(document).ready(function(){
    $('#switcher-default').bind('click', function(){
        $('body').removeClass('narrow');
        $('body').removeClass('large');
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
    $('#switcher-large').bind('click', function(){
        $('body').addClass('large');
        $('body').removeClass('narrow');
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
    $('#switcher-narrow').bind('click', function(){
        $('body').addClass('narrow');
        $('body').removeClass('large');
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
});*/
//10.2
/*$(document).ready(function(){
    $('#switcher-default').bind('click', function(){
        $('body').removeClass('narrow').removeClass('large');
    });
    $('#switcher-large').bind('click', function(){
        $('body').addClass('large').removeClass('narrow');
    });
    $('#switcher-narrow').bind('click', function(){
        $('body').addClass('narrow').removeClass('large');
    });
    $('#switcher .button').bind('click', function(){
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
});*/
//10.3
/*$(document).ready(function(){
    $('#switcher-default').bind('click', function(){
        $('body').removeClass();
    });
    $('#switcher-large').bind('click', function(){
        $('body').removeClass().addClass('large');
    });
    $('#switcher-narrow').bind('click', function(){
        $('body').removeClass().addClass('narrow');
    });
    $('#switcher .button').bind('click', function(){
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
});*/
//10.4
/*$(document).ready(function(){
    $('#switcher .button').bind('click', function{
        $('body').removeClass();
        if(this.id=='switcher-narrow'){
            $('body').addClass('narrow');
        }
        else if(this.id=='switcher-large'){
            $('body').addClass('large');
        }
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
});*/

//10.5
/*$(document).ready(function(){
    $('#switcher h3').toggle(function(){
        $('#switcher .button').addClass('hidden');
    },function(){
        $('#switcher .button').removeClass('hidden');
    });
});*/

//10.6
$(document).ready(function(){
    $('#switcher .button').hover(function(){
        $(this).addClass('hover');
    }, function(){
        $(this).removeClass('hover');
    });
});

//10.7
/*$(document).ready(function(){
    $('#switcher').click(function(){
        $('#switcher .button').toggleClass('hidden');
    });
});*/

//10.8
/*$(document).ready(function(){
    $('#switcher').click(function(event){
        if(event.target==this){
            $('#switcher .button').toggleClass('hidden');
        }
    });
});*/

//10.9
/*$(document).ready(function(){
    $('#switcher').click(function(event){
        if (!$(event.target).is('.button')){///////hide
            $('#switcher .button').toggleClass('hidden');
        }
        else if ($(event.target).is('.button')){//////////////function
            $('body').removeClass();
            if(event.target.id =='switcher-narrow'){
                $('body').addClass('narrow');
            }
            else if (event.target.id == 'switcher-large'){
                $('body').addClass('large');
            }
            $('#switcher .button').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
});*/
/*$(document).ready(function(){
    $('#switcher').click(function(event){
        if ($(event.target).is('.button')){
            $('body').removeClass();
            if(event.target.id =='switcher-narrow'){
                $('body').addClass('narrow');
            }
            else if (event.target.id == 'switcher-large'){
                $('body').addClass('large');
            }
            $('#switcher .button').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
});*/

//10.10
/*$(document).ready(function(){
    $('#switcher').bind('click.collapse', function(event){
        if(!$(event.target).is('.button')){
            $('#switcher .button').toggleClass('hidden');
        }
    });
    $('#switcher-narrow, #switcher-large').click(function(){
        $('#switcher').unbind('click.collapse');
    });
});
$(document).ready(function(){
    $('#switcher').click(function(event){
        if ($(event.target).is('.button')){
            $('body').removeClass();
            if(event.target.id =='switcher-narrow'){
                $('body').addClass('narrow');
            }
            else if (event.target.id == 'switcher-large'){
                $('body').addClass('large');
            }
            $('#switcher .button').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
});*/

//10.11
$(document).ready(function(){
    var toggleStyleSwitcher = function(event){
        if (!$(event.target).is('.button')){
            $('#switcher .button').toggleClass('hidden');
        }
    };
    $('#switcher').click(toggleStyleSwitcher);
    $('#switcher-narrow, #switcher-large').click(function(){
        $('#switcher').unbind('click', toggleStyleSwitcher);
    });
    $('#switcher-default').click(function(){
        $('#switcher').click(toggleStyleSwitcher);
    });
    $('#switcher').click(function(event){
        if ($(event.target).is('.button')){
            $('body').removeClass();
            if(event.target.id =='switcher-narrow'){
                $('body').addClass('narrow');
            }
            else if (event.target.id == 'switcher-large'){
                $('body').addClass('large');
            }
            $('#switcher .button').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
    $(document).keyup(function(event){
        switch(String.fromCharCode(event.keyCode)){
            case 'D':
                $('#switcher-default').click();
                break;
            case 'N':
                $('#switcher-narrow').click();
                break;
            case 'L':
                $('#switcher-large').click();
                break;
        }
    });
    //$('#switcher').trigger('click');
    $('#switcher').click();
});
//12
$(document).ready(function(){
    var $speech = $('div.speech');
    var defaultSize = $speech.css('fontSize');
    $('#switcher button').click(function(){
        var num = parseFloat($speech.css('fontSize'), 10);
        switch(this.id){
            case 'switcher1-large':
                num *= 1.4;
                break;
            case 'switcher1-small':
                num /= 1.4;
                break;
            default:
                num = parseFloat(defaultSize, 10);
        }
        $speech.animate({fontSize:num+'px'}, 'slow');
    });
    /*$('p:eq(1)').hide();
    $('a.less').hide();
    $('a.more').click(function(){
        //$('p:eq(1)').show(850);
        $('p:eq(1)').fadeIn(850);
        $('a.less').show();
        $(this).hide();
        return false;
    });
    $('a.less').click(function(){
        //$('p:eq(1)').hide(850);
        $('p:eq(1)').fadeOut(850);
        $('a.more').show();
        $(this).hide();
        return false;
    });*/
    var $firstPara = $('p:eq(1)');
    $firstPara.hide();
    $('a.more').click(function(){
        if($firstPara.is(':hidden')){
            $firstPara.fadeIn(850);
            $(this).text('read less');
        }else{
            $firstPara.fadeOut(850);
            $(this).text('read more');
        }
        return false;
    });
});

//13
var clc=0;
$(document).ready(function(){
    $('div.label').click(function(){
        clc++;
        var paraWidth = $('div.speech p').outerWidth();
        var $switcher = $(this).parent();
        var switcherWidth = $switcher.outerWidth();
        if (clc%2==1){
            $switcher
            .animate({left:paraWidth-switcherWidth}, 'slow')
            .animate({height:'+=20px'}, 'slow')
            /*.css('backgroundColor', 'blue');*/
            .queue(function(){
                $switcher.css('backgroundColor', 'blue').dequeue();
            });
        }else{
            $switcher
            .animate({left:'0px'}, 'slow')
            .animate({height:'-=20px'}, 'slow')
            .queue(function(){
                $switcher.css('backgroundColor', 'grey').dequeue();
            });
        }
    });
});